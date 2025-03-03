import { Metadata } from 'next';
import { Layout } from 'lucide-react';
import { PatternsGrid } from '@/components/patterns/patterns-grid';

export const metadata: Metadata = {
  title: 'Patterns & Layouts | Toka UI',
  description: 'Manage and create reusable patterns and layouts for your design system',
};

interface PatternsPageProps {
  params: {
    id: string;
  };
}

export default function PatternsPage({ params }: PatternsPageProps) {
  const designSystemId = params.id;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layout className="h-6 w-6 text-white" />
          <h1 className="text-3xl font-bold text-white">Patterns & Layouts</h1>
        </div>
        <div className="relative">
          <div className="from-purple-600 to-blue-600 h-1 w-24 bg-gradient-to-r"></div>
        </div>
        <p className="max-w-3xl text-gray-400">
          Create and manage reusable patterns and layouts that combine components into cohesive
          sections. These patterns help maintain consistency across your applications and speed up
          development.
        </p>
      </div>

      {/* Patterns Grid */}
      <PatternsGrid designSystemId={designSystemId} />
    </div>
  );
}
