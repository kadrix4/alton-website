import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

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

      <Footer />
    </div>
  );
}