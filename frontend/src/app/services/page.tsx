export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Reuse Header - We'll make it shared later */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alton</h1>
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

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Printing Services</h3>
              <p>We offer high-quality printing for business cards, flyers, banners, and more. Customize with your designs or use our templates.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Branding Services</h3>
              <p>From logo creation to full brand identity packages, including merchandise and packaging design.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Advanced Features</h3>
              <p>Coming soon: AI-powered design tools, AR previews, and sustainability options.</p>
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