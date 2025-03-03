import { Metadata } from 'next';
import { DocumentEditor } from '@/components/documentation/document-editor';

export const metadata: Metadata = {
  title: 'Edit Document | Toka UI',
  description: 'Edit documentation for your design system',
};

interface DocumentEditPageProps {
  params: {
    id: string;
    docId: string;
  };
}

export default function DocumentEditPage({ params }: DocumentEditPageProps) {
  const { id: designSystemId, docId } = params;

  return (
    <div className="space-y-6">
      <DocumentEditor designSystemId={designSystemId} docId={docId} />
    </div>
  );
}
