import { PatternsList } from '@/components/patterns/patterns-list';

export default function PatternsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Patterns & Layouts</h1>
          <p className="mt-2 text-gray-600">
            Create and manage reusable design patterns and layout templates for your design system.
          </p>
        </div>

        <PatternsList />
      </div>
    </main>
  );
}
