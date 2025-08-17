import { MediaType } from '@/types';

interface MediaToggleProps {
  mediaTypes: MediaType[];
  selectedMediaType: MediaType;
  onMediaTypeChange: (mediaType: MediaType) => void;
}

export default function MediaToggle({ mediaTypes, selectedMediaType, onMediaTypeChange }: MediaToggleProps) {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-50 rounded-2xl p-1 border border-gray-100">
        {mediaTypes.map((mediaType) => (
          <button
            key={mediaType.id}
            onClick={() => onMediaTypeChange(mediaType)}
            className={`px-10 py-4 rounded-xl font-medium transition-all duration-300 ${
              selectedMediaType.id === mediaType.id
                ? 'bg-white text-gray-900 shadow-lg shadow-gray-200/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
            }`}
          >
            {mediaType.name}
          </button>
        ))}
      </div>
    </div>
  );
}
