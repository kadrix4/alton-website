import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://via.placeholder.com/50?text=Alton" // Placeholder logo - replace with your real logo URL or file
              alt="Alton Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <h1 className="text-2xl font-bold">Alton</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

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
              <p>Business cards, banners, flyers, and more with premium quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Branding</h4>
              <p>Logo design, custom merchandise, and packaging solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Advanced Tools</h4>
              <p>AI design, AR previews, and more coming soon!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 SPEANRE. All rights reserved.</p>
      </footer>
    </div>
  );
}