'use client';

import { useParams } from 'next/navigation';
import { mediaData } from '@/data/sampleData';
import Header from '@/components/Header';
import MediaItemCard from '@/components/MediaItemCard';
import Link from 'next/link';

export default function CollectionPage() {
  const params = useParams();
  const collectionId = params.id as string;
  
  // Find the collection across all media types
  let targetCollection = null;
  let mediaTypeName = '';
  
  for (const mediaType of mediaData) {
    const collection = mediaType.collections.find(c => c.id === collectionId);
    if (collection) {
      targetCollection = collection;
      mediaTypeName = mediaType.name;
      break;
    }
  }

  if (!targetCollection) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Collection Not Found</h1>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 mb-4 inline-block">
            ← Back to Collections
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {targetCollection.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {targetCollection.description}
            </p>
            <div className="mt-4 text-gray-500 font-medium">
              {mediaTypeName} • {targetCollection.items.length} {targetCollection.items.length === 1 ? 'item' : 'items'}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetCollection.items.map((item) => (
            <MediaItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
