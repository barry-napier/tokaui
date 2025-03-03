import { Metadata } from 'next';
import { PatternsList } from '@/components/patterns/patterns-list';

export const metadata: Metadata = {
  title: 'Patterns & Layouts | Toka',
  description: 'Build and organize higher-level design structures for your applications',
};

export default function PatternsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative border-b border-gray-800 bg-black pb-8 pt-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-white">Patterns & Layouts</h1>
          <p className="mb-6 max-w-3xl text-lg text-gray-400">
            Build and organize higher-level design structures for consistent and usable interfaces.
          </p>
          <div className="from-blue-500 to-purple-500 h-1 w-24 bg-gradient-to-r"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-lg border border-gray-800 bg-black p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Pattern Library</h2>
          <p className="text-gray-400">
            Patterns combine components into reusable solutions for common user interface needs.
            They provide consistency and reduce design and development time.
          </p>
        </div>

        <PatternsList />
      </div>
    </div>
  );
}
