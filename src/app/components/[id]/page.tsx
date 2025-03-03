import { Metadata } from 'next';
import { ComponentEditor } from '@/components/components/component-editor';

export const metadata: Metadata = {
  title: 'Edit Component | Toka',
  description: 'Edit and customize your design system component',
};

interface ComponentPageProps {
  params: {
    id: string;
  };
}

export default function ComponentPage({ params }: ComponentPageProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ComponentEditor componentId={params.id} />
      </div>
    </main>
  );
}
