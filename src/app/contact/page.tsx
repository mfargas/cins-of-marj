import Header from '@/components/Header';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 mb-4 inline-block">
            ← Back to Collections
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💬 Let&apos;s Connect</h2>
            <p className="text-lg text-gray-600 mb-6">
              Have thoughts on any of the films or shows in the collection? Want to discuss a particular analysis? 
              Or maybe you have recommendations for what should be added next? I&apos;d love to hear from you!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">📧 Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:hello@cinsofmarj.com" className="text-gray-900 hover:text-gray-700 underline">
                    hello@cinsofmarj.com
                  </a>
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">🐦 Social Media</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <a href="#" className="text-gray-900 hover:text-gray-700 underline">Twitter</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="#" className="text-gray-900 hover:text-gray-700 underline">Instagram</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🤝 Collaboration</h2>
            <p className="text-lg text-gray-600 mb-6">
              Interested in contributing to the collection or collaborating on film analysis? 
              I&apos;m always open to guest contributions and collaborative projects.
            </p>
            
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> This is currently a personal project, but I&apos;m exploring ways to make it more collaborative 
                and community-driven in the future.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Suggestions & Feedback</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your feedback helps make this collection better. Whether it&apos;s about the website design, 
              the analysis content, or suggestions for new features, I value your input.
            </p>
            
            <div className="flex justify-center">
              <Link 
                href="/" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Back to Collections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
