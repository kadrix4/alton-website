export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
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
          <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
          <p className="text-center mb-8">Check out some of our past projects. (Images and details coming soon!)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">Project 1 Placeholder</div>
            <div className="bg-white p-4 rounded-lg shadow">Project 2 Placeholder</div>
            <div className="bg-white p-4 rounded-lg shadow">Project 3 Placeholder</div>
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