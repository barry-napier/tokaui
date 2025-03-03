import { Metadata } from 'next';
import { DocumentationList } from '@/components/documentation/documentation-list';

export const metadata: Metadata = {
  title: 'Documentation & Guidelines | Toka',
  description: 'Manage documentation and guidelines for your design system',
};

interface DocumentationPageProps {
  params: {
    id: string;
  };
}

export default function DocumentationPage({ params }: DocumentationPageProps) {
  const designSystemId = params.id;

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-white">Documentation & Guidelines</h1>
        <p className="text-gray-400">
          Create and manage documentation pages for your design system. Document usage guidelines,
          best practices, and implementation details.
        </p>
      </div>

      <DocumentationList designSystemId={designSystemId} />
    </div>
  );
}
