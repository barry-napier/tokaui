import { Metadata } from 'next';
import { ComponentsList } from '@/components/components/components-list';

export const metadata: Metadata = {
  title: 'Components | Toka',
  description: 'Manage your design system components',
};

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Components</h1>
          <p className="mt-2 text-gray-600">
            Create and manage reusable components for your design system.
          </p>
        </div>

        <ComponentsList />
      </div>
    </main>
  );
}
