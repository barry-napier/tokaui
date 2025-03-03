import { Metadata } from 'next';
import { PatternEditor } from '@/components/patterns/pattern-editor';

export const metadata: Metadata = {
  title: 'Edit Pattern | Toka UI',
  description: 'Edit and customize your design pattern',
};

interface PatternDetailPageProps {
  params: {
    id: string;
    patternId: string;
  };
}

export default function PatternDetailPage({ params }: PatternDetailPageProps) {
  const { id: designSystemId, patternId } = params;

  return (
    <div className="space-y-6">
      <PatternEditor designSystemId={designSystemId} patternId={patternId} />
    </div>
  );
}
