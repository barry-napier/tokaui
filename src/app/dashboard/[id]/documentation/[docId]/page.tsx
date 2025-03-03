import { Metadata } from 'next';
import { DocumentViewer } from '@/components/documentation/document-viewer';

export const metadata: Metadata = {
  title: 'Document | Toka UI',
  description: 'View documentation for your design system',
};

interface DocumentDetailPageProps {
  params: {
    id: string;
    docId: string;
  };
}

export default function DocumentDetailPage({ params }: DocumentDetailPageProps) {
  const { id: designSystemId, docId } = params;

  return (
    <div className="space-y-6">
      <DocumentViewer designSystemId={designSystemId} docId={docId} />
    </div>
  );
}
