import { Metadata } from 'next';
import { DocumentCreator } from '@/components/documentation/document-creator';

export const metadata: Metadata = {
  title: 'Create Documentation | Toka',
  description: 'Create a new documentation page for your design system',
};

interface DocumentCreatePageProps {
  params: {
    id: string;
  };
}

export default function DocumentCreatePage({ params }: DocumentCreatePageProps) {
  const designSystemId = params.id;

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-white">Create Documentation</h1>
        <p className="text-gray-400">
          Create a new documentation page for your design system. Document usage guidelines, best
          practices, and implementation details.
        </p>
      </div>

      <DocumentCreator designSystemId={designSystemId} />
    </div>
  );
}
