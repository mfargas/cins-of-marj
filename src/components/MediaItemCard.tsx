import { MediaItem } from '@/types';
import { useState, useEffect } from 'react';

interface MediaItemCardProps {
  item: MediaItem;
}

export default function MediaItemCard({ item }: MediaItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg ${
            i <= rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-gray-600 text-center">
          <div className="text-4xl mb-2">🎬</div>
          <div className="text-sm opacity-80">{item.title}</div>
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {item.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>{item.year}</span>
            <span>{item.director || item.creator}</span>
          </div>
          <div className="flex items-center space-x-1">
            {renderStars(item.rating)}
            <span className="text-gray-500 text-sm ml-2">({item.rating}/10)</span>
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.genre.map((genre) => (
            <span
              key={genre}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Analysis Preview */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm line-clamp-3">
            {item.analysis}
          </p>
        </div>

        {/* Expandable Content */}
        {isClient && isExpanded && (
          <div className="space-y-4 border-t border-gray-200 pt-4">
            {/* Personal Notes */}
            {item.personalNotes && (
              <div>
                <h4 className="text-gray-800 font-semibold text-sm mb-2">Personal Notes</h4>
                <p className="text-gray-600 text-sm">{item.personalNotes}</p>
              </div>
            )}

            {/* Streaming Platforms */}
            {item.streamingPlatforms && item.streamingPlatforms.length > 0 && (
              <div>
                <h4 className="text-gray-800 font-semibold text-sm mb-2">Available On</h4>
                <div className="flex flex-wrap gap-2">
                  {item.streamingPlatforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Watch Date */}
            {item.watchDate && (
              <div>
                <h4 className="text-gray-800 font-semibold text-sm mb-2">Watched On</h4>
                <p className="text-gray-600 text-sm">
                  {new Date(item.watchDate).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors font-medium"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}
