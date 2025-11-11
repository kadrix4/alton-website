import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Quote() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="py-12">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Request a Quote</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="service" className="block text-sm font-medium">Service Type</label>
              <select id="service" className="w-full p-2 border rounded">
                <option>Printing</option>
                <option>Branding</option>
                <option>Both</option>
              </select>
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium">Details</label>
              <textarea id="details" className="w-full p-2 border rounded" rows={4} placeholder="Describe your needs"></textarea>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit Quote Request</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}