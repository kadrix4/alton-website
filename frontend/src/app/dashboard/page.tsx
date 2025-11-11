'use client'; // For interactivity

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [businessType, setBusinessType] = useState('');
  const [budget, setBudget] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const mockLogin = () => {
    setLoggedIn(true); // Simple mock—no real auth
  };

  const getRecommendations = () => {
    if (!businessType || !budget) return;
    setLoading(true);
    setTimeout(() => { // Mock "ML processing" delay
      let recs: string[] = [];
      // Simple "ML" logic: Rules based on inputs
      if (businessType.toLowerCase().includes('tech') || businessType.toLowerCase().includes('startup')) {
        recs.push('Modern minimalist logo + digital business cards (Eco-paper recommended).');
        recs.push('AR preview for app mockups.');
      } else if (businessType.toLowerCase().includes('cafe') || businessType.toLowerCase().includes('restaurant')) {
        recs.push('Warm color branding kit + menu flyers.');
        recs.push('Sustainable packaging options.');
      } else {
        recs.push('Custom branding package tailored to your industry.');
      }
      if (parseInt(budget) < 100) {
        recs.push('Budget-friendly: Start with basic prints ($50 starter kit).');
      } else {
        recs.push('Premium: Full suite with AI design ($200+).');
      }
      setRecommendations(recs);
      setLoading(false);
    }, 1000);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <section className="py-12 text-center">
          <div className="container mx-auto max-w-md">
            <h2 className="text-3xl font-bold mb-8">User Dashboard</h2>
            <p className="mb-8">Log in to get personalized recommendations.</p>
            <button 
              onClick={mockLogin} 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Mock Login (Demo)
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="py-12">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Personalized Recommendations</h2>
          <p className="text-center mb-8 text-gray-600">Tell us about your business for ML-powered suggestions.</p>
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">Business Type</label>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="E.g., Tech startup, Coffee shop"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget ($)</label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="E.g., 150"
                min="0"
              />
            </div>
            <button
              onClick={getRecommendations}
              disabled={loading || !businessType || !budget}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Get Recommendations'}
            </button>
          </div>
          {recommendations.length > 0 && (
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Your Tailored Suggestions:</h3>
              <ul className="space-y-2">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p>{rec}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}