import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Advanced Printing & Branding Services</h2>
          <p className="text-xl mb-8">Elevate your brand with custom designs, high-quality prints, and innovative tools.</p>
          <a href="/quote" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">Get a Quote</a>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Printing</h4>
              <p>Business cards, banners, flyers, and more with premium quality. <a href="/ar" className="text-blue-600 hover:underline">Preview in AR</a></p>
            </div>
           <div className="bg-white p-6 rounded-lg shadow">
  <h4 className="text-xl font-semibold mb-2">Branding</h4>
  <p>Logo design, custom merchandise, and packaging solutions. <a href="/dashboard" className="text-blue-600 hover:underline">Get Personalized Recommendations</a></p>
</div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Advanced Tools</h4>
              <p>AI design, AR previews, and more coming soon! <a href="/sustainability" className="text-blue-600 hover:underline">Try our Sustainability Calculator</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}