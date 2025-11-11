'use client'; // For interactivity

import { useState } from 'react';
import Image from 'next/image'; // Added import for Image component
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DesignAI() {
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateDesigns = () => {
    if (!prompt.trim()) return; // Prevent empty submits
    setLoading(true);
    // Mock AI delay (1-2 seconds)
    setTimeout(() => {
      // Simple mock responses based on keywords (expandable later)
      const mockSuggestions = [
        'Bold blue circle with a gear icon for tech innovation.',
        'Minimalist sans-serif font with green accents for eco-branding.',
        'Vibrant red wave pattern for dynamic startup energy.',
        // Add more or tie to prompt (e.g., if 'logo' in prompt, focus on logos)
      ];
      setSuggestions(mockSuggestions);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="py-12">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">AI Design Assistant</h2>
          <p className="text-center mb-8 text-gray-600">Describe your design idea, and get instant suggestions!</p>
          <div className="space-y-6">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full p-4 border rounded-lg resize-none h-32"
              placeholder="E.g., 'A sleek logo for a coffee shop with warm colors'"
            />
            <button
              onClick={generateDesigns}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Generating...' : 'Generate Designs'}
            </button>
            {suggestions.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Design Suggestions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm">{suggestion}</p>
                      <Image
                        src={`https://via.placeholder.com/300x200?text=Design+${index + 1}`}
                        alt={`Mock Design ${index + 1}`}
                        width={300}
                        height={200}
                        className="mt-2 rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Added collab link here, after suggestions */}
            <div className="text-center mt-6">
              <a href="/collab" className="text-blue-600 hover:underline">Collaborate on Designs in Real-Time</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}