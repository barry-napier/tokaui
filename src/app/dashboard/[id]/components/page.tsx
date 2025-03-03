import { Metadata } from 'next';
import Link from 'next/link';
import { SimpleComponentsList } from '@/components/components/simple-components-list';

export const metadata: Metadata = {
  title: 'Components | Toka',
  description: 'Manage the components of your design system',
};

export default function ComponentsPage({ params }: { params: { id: string } }) {
  const designSystemId = params.id;

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold text-white">Components</h1>
        <div className="from-blue-500 to-purple-500 mt-1 h-1 w-24 bg-gradient-to-r" />
        <p className="mt-4 text-gray-400">
          Manage the reusable UI components that make up your design system. Create, edit, and
          organize components by type.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Component Library</h2>
            <p className="mt-1 text-gray-400">
              All components in your design system, organized by type.
            </p>
          </div>
          <Link
            href={`/dashboard/${designSystemId}/components/create`}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Create Component
          </Link>
        </div>

        <SimpleComponentsList designSystemId={designSystemId} />
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Component Guidelines</h2>
          <p className="mt-1 text-gray-400">
            Best practices for creating and using components in your design system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h3 className="mb-3 text-lg font-medium text-white">Naming Conventions</h3>
            <p className="text-gray-400">
              Use PascalCase for component names (e.g., Button, CardHeader). Be descriptive but
              concise.
            </p>
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h3 className="mb-3 text-lg font-medium text-white">Component Structure</h3>
            <p className="text-gray-400">
              Each component should have a clear API with well-defined props and appropriate default
              values.
            </p>
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h3 className="mb-3 text-lg font-medium text-white">Accessibility</h3>
            <p className="text-gray-400">
              Ensure all components meet WCAG 2.1 AA standards. Include proper ARIA attributes and
              keyboard navigation.
            </p>
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h3 className="mb-3 text-lg font-medium text-white">Variants & States</h3>
            <p className="text-gray-400">
              Document all component variants and states (hover, focus, disabled, etc.) with
              examples.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
