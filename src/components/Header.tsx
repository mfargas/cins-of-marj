import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50 font-sans">
      <div className="max-w-4xl mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-medium text-gray-900 hover:text-gray-700 transition-colors font-mono"
          >
            🎬 Cins of Marj
          </Link>
          
          <div className="flex items-center space-x-12">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/collections" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Collections
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
