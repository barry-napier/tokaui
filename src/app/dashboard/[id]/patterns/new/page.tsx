import { Metadata } from 'next';
import { PatternEditor } from '@/components/patterns/pattern-editor';

export const metadata: Metadata = {
  title: 'Create New Pattern | Toka UI',
  description: 'Create a new pattern for your design system',
};

interface NewPatternPageProps {
  params: {
    id: string;
  };
}

export default function NewPatternPage({ params }: NewPatternPageProps) {
  const designSystemId = params.id;

  return (
    <div className="space-y-6">
      <PatternEditor designSystemId={designSystemId} patternId="new" />
    </div>
  );
}
