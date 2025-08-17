'use client';

import { useState, useEffect } from 'react';
import { mediaData, MediaType } from '@/data/sampleData';
import MediaToggle from '@/components/MediaToggle';
import CollectionGrid from '@/components/CollectionGrid';
import FeaturedCarousel from '@/components/FeaturedCarousel';

interface HomeContentProps {
  initialMediaType: MediaType;
}

export default function HomeContent({ initialMediaType }: HomeContentProps) {
  const [selectedMediaType, setSelectedMediaType] = useState<MediaType | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setSelectedMediaType(initialMediaType);
  }, [initialMediaType]);

  if (!isClient || !selectedMediaType) {
    return null;
  }

  const featuredItems = selectedMediaType.collections.flatMap(col => col.items).slice(0, 10);

  // Debug logging
  console.log('Selected Media Type:', selectedMediaType);
  console.log('Featured Items:', featuredItems);
  console.log('Number of items:', featuredItems.length);

  return (
    <div className="space-y-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight font-mono">
          Browse Collections
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Explore curated collections organized by genre and theme.
        </p>
      </div>

      <MediaToggle
        mediaTypes={mediaData}
        selectedMediaType={selectedMediaType}
        onMediaTypeChange={setSelectedMediaType}
      />

      {/* Main Content Layout */}
      <div className="flex gap-20">
        {/* Left Sidebar - Collections */}
        <div className="w-1/4">
          <h3 className="text-xl font-bold text-gray-900 mb-8 font-mono">
            Collections
          </h3>
          <CollectionGrid collections={selectedMediaType.collections} />
        </div>

        {/* Right Side - Featured Carousel */}
        <div className="w-3/4">
          <h3 className="text-xl font-bold text-gray-900 mb-8 font-mono">
            Featured {selectedMediaType.name}
          </h3>

          {/* Debug info */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              Debug: {featuredItems.length} items available for carousel
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {featuredItems.length > 0 ? (
              <FeaturedCarousel items={featuredItems} />
            ) : (
              <div className="bg-gray-50 rounded-2xl p-12 text-center">
                <p className="text-gray-500">No featured items available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
