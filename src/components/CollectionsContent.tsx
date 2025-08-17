'use client';

import { useState, useEffect } from 'react';
import { mediaData, MediaType } from '@/data/sampleData';
import MediaToggle from '@/components/MediaToggle';
import CollectionGrid from '@/components/CollectionGrid';
import Link from 'next/link';

interface CollectionsContentProps {
  initialMediaType: MediaType;
}

export default function CollectionsContent({ initialMediaType }: CollectionsContentProps) {
  const [selectedMediaType, setSelectedMediaType] = useState<MediaType | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setSelectedMediaType(initialMediaType);
  }, [initialMediaType]);

  // Don't render until client-side hydration is complete
  if (!isClient || !selectedMediaType) {
    return null;
  }

  return (
    <>
      <MediaToggle 
        mediaTypes={mediaData}
        selectedMediaType={selectedMediaType}
        onMediaTypeChange={setSelectedMediaType}
      />

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {selectedMediaType.name} Collections
        </h2>
        <p className="text-gray-500 text-center mb-8">
          {selectedMediaType.collections.length} collections • {selectedMediaType.collections.reduce((acc, col) => acc + col.items.length, 0)} total items
        </p>
      </div>

      <CollectionGrid collections={selectedMediaType.collections} />
      
      <div className="mt-20 text-center">
        <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Missing Something?</h3>
          <p className="text-gray-600 mb-6">
            Don&apos;t see a genre or theme you&apos;re looking for? The collection is always growing, 
            and I&apos;m constantly adding new analyses and discoveries.
          </p>
          <Link 
            href="/contact" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Suggest a Genre
          </Link>
        </div>
      </div>
    </>
  );
}
