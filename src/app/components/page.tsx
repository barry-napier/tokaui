import { Metadata } from 'next';
import { SimpleComponentsList } from '@/components/components/simple-components-list';

export const metadata: Metadata = {
  title: 'Components | Toka',
  description: 'Manage and customize your design system components',
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative border-b border-gray-800 bg-black pb-8 pt-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-white">Components</h1>
          <p className="mb-6 max-w-3xl text-lg text-gray-400">
            Create and customize reusable UI elements for consistent interfaces across your
            applications.
          </p>
          <div className="from-blue-500 to-purple-500 h-1 w-24 bg-gradient-to-r"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-lg border border-gray-800 bg-black p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Component Library</h2>
          <p className="text-gray-400">
            Browse, customize, and implement components from your design system. Each component is
            designed to be accessible, responsive, and consistent with your brand guidelines.
          </p>
        </div>

        <SimpleComponentsList />
      </div>
    </div>
  );
}
