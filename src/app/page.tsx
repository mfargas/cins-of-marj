import { mediaData } from '@/data/sampleData';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight font-mono">
            Cins of Marj
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A personal collection of films and TV shows that left a lasting impact,
            complete with detailed analysis and insights.
          </p>
        </div>
        <HomeContent initialMediaType={mediaData[0]} />
      </div>
    </main>
  );
}
