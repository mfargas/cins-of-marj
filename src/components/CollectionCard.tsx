import { Collection } from '@/types';
import Link from 'next/link';

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/collection/${collection.id}`}>
      <div className="group bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-md transition-all duration-200">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors font-mono">
            {collection.name}
          </h3>
          <p className="text-gray-400 text-xs font-medium">
            {collection.items.length} {collection.items.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {collection.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs font-medium">
            View →
          </span>
          <div className="w-6 h-6 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
