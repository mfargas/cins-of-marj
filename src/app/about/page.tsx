import Header from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 mb-4 inline-block">
            ← Back to Collections
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Cins of Marj</h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12 text-gray-600">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎬 Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Cins of Marj is a personal curation of films and television shows that have left an indelible mark on my cinematic journey. 
              This isn&apos;t just a list of recommendations—it&apos;s a deep dive into the art of storytelling, visual composition, and emotional impact.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 What You&apos;ll Find</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Analysis</h3>
                <p className="leading-relaxed">
                  Each entry includes my personal thoughts on what makes the work special, from cinematography choices to narrative structure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Curated Collections</h3>
                <p className="leading-relaxed">
                  Organized by genre and theme, making it easy to discover works that match your current mood or interests.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Behind-the-Scenes Insights</h3>
                <p className="leading-relaxed">
                  Personal notes about when I watched each piece and what stood out during different viewings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Streaming Information</h3>
                <p className="leading-relaxed">
                  Where you can currently watch these films and shows, so you can dive in immediately.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💭 Why This Matters</h2>
            <p className="text-lg leading-relaxed">
              In an age of endless content, it&apos;s easy to miss the truly transformative works. This collection represents years of exploration, 
              countless hours of viewing, and deep reflection on what makes certain stories resonate so profoundly. Whether you&apos;re a casual 
              viewer or a film enthusiast, I hope these analyses help you discover new perspectives and appreciate the art form in fresh ways.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Start Exploring</h2>
            <p className="text-lg leading-relaxed mb-6">
              Ready to dive into the collections? Start with the genre that calls to you, or browse through all the films and TV shows 
              to find your next favorite piece of media.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
