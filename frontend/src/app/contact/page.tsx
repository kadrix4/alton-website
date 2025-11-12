'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! We will get back to you soon.');
        reset();
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check if the backend is running.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="py-12">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          
          {statusMessage && (
            <div className={`mb-4 p-4 rounded ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                {...register('name', { required: 'Name is required' })} 
                className="w-full p-2 border rounded" 
                placeholder="Your Name" 
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                {...register('email', { 
                  required: 'Email is required', 
                  pattern: { 
                    value: /^\S+@\S+$/i, 
                    message: 'Invalid email address' 
                  } 
                })} 
                className="w-full p-2 border rounded" 
                placeholder="Your Email" 
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea 
                id="message" 
                {...register('message', { required: 'Message is required' })} 
                className="w-full p-2 border rounded" 
                rows={4} 
                placeholder="Your Message"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button 
              type="submit" 
              disabled={submitStatus === 'loading'}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full disabled:opacity-50"
            >
              {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}