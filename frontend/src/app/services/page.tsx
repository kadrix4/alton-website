import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

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

      <Footer />
    </div>
  );
}