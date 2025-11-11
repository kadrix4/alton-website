'use client'; // For interactivity

import { useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Collab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth * 0.8;
      canvas.height = 400;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'blue';
        ctxRef.current = ctx;
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);

    const draw = (e: MouseEvent) => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const stopDrawing = () => {
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
    };

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Real-Time Collaborative Editor</h2>
          <p className="text-center mb-8 text-gray-600">Draw and edit designs together (mock mode—multi-user coming soon!).</p>
          <div className="text-center mb-4">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              className="border-2 border-gray-300 rounded-lg bg-white cursor-crosshair"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={clearCanvas}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear Canvas
            </button>
            <button
              onClick={() => {
                const canvas = canvasRef.current;
                if (canvas) {
                  const link = document.createElement('a');
                  link.download = 'design.png';
                  link.href = canvas.toDataURL();
                  link.click();
                }
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download Design
            </button>
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">Tip: Draw with mouse. Invite a team member to share screen for collab!</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}