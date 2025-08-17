import { mediaData } from '@/data/sampleData';
import Header from '@/components/Header';
import CollectionsContent from '@/components/CollectionsContent';
import Link from 'next/link';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 mb-4 inline-block">
            ← Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">All Collections</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all the curated collections of films and TV shows, organized by genre and theme.
          </p>
        </div>

        <CollectionsContent initialMediaType={mediaData[0]} />
      </div>
    </div>
  );
}
