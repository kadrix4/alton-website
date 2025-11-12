'use client';

import { useRef, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Collab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [roomId, setRoomId] = useState('main-room');
  const [connectedUsers, setConnectedUsers] = useState(0);
  const [color, setColor] = useState('#0000ff');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth * 0.8;
      canvas.height = 500;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        ctxRef.current = ctx;
      }
    }

    socketRef.current = io('http://localhost:5000');

    socketRef.current.emit('join-canvas', roomId);

    socketRef.current.on('user-joined', (userId) => {
      console.log('User joined:', userId);
      setConnectedUsers(prev => prev + 1);
    });

    socketRef.current.on('draw', (data) => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      ctx.strokeStyle = data.color;
      ctx.beginPath();
      ctx.moveTo(data.x0, data.y0);
      ctx.lineTo(data.x1, data.y1);
      ctx.stroke();
    });

    socketRef.current.on('clear-canvas', () => {
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [roomId]);

  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = color;
    }
  }, [color]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = ctxRef.current;
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x1 = e.clientX - rect.left;
    const y1 = e.clientY - rect.top;

    const x0 = ctx.currentPoint?.x ?? x1;
    const y0 = ctx.currentPoint?.y ?? y1;

    ctx.lineTo(x1, y1);
    ctx.stroke();

    if (socketRef.current) {
      socketRef.current.emit('draw', {
        room: roomId,
        x0,
        y0,
        x1,
        y1,
        color
      });
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (socketRef.current) {
        socketRef.current.emit('clear-canvas', roomId);
      }
    }
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'collaboration-design.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Real-Time Collaborative Editor</h2>
              <p className="text-gray-600">Draw together in real-time! Room: {roomId}</p>
              <p className="text-sm text-green-600">Connected users: {connectedUsers + 1}</p>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium">Color:</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-12 h-12 border-2 border-gray-300 rounded cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className="border-2 border-gray-300 rounded cursor-crosshair w-full"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={clearCanvas}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Clear Canvas
            </button>
            <button
              onClick={downloadCanvas}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Download Design
            </button>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">How to test real-time collaboration:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Open this page in another browser window (or incognito mode)</li>
              <li>Draw on one canvas - it will appear on the other in real-time!</li>
              <li>Multiple users can draw simultaneously</li>
              <li>Everyone sees the same canvas updates instantly</li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}