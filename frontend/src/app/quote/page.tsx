'use client'; // Add this for client-side interactivity

import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import Footer from '../components/Footer';

type QuoteFormData = {
  service: string;
  details: string;
  email: string;
};

export default function Quote() {
  const { register, handleSubmit, formState: { errors } } = useForm<QuoteFormData>();

  const onSubmit = (data: QuoteFormData) => {
    console.log('Quote Request:', data); // For now, logs to browser console (F12 to see)
    alert('Quote request submitted! (Check console for details)'); // Placeholder alert
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="py-12">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Request a Quote</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="service" className="block text-sm font-medium">Service Type</label>
              <select 
                id="service" 
                {...register('service', { required: 'Service type is required' })}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a service</option>
                <option value="Printing">Printing</option>
                <option value="Branding">Branding</option>
                <option value="Both">Both</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium">Details</label>
              <textarea 
                id="details" 
                {...register('details', { required: 'Details are required' })} 
                className="w-full p-2 border rounded" 
                rows={4} 
                placeholder="Describe your needs"
              />
              {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details.message}</p>}
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
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}