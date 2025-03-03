import { Metadata } from 'next';
import { CategoryDocumentsList } from '@/components/documentation/category-documents-list';

export const metadata: Metadata = {
  title: 'Category Documents | Toka',
  description: 'View documents in a specific category',
};

interface CategoryDocumentsPageProps {
  params: {
    id: string;
    categoryId: string;
  };
}

// Sample categories - in a real app, this would be fetched from an API
const categories = {
  'getting-started': {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Introduction and setup guides for new users',
    color: 'bg-blue-500',
  },
  components: {
    id: 'components',
    name: 'Component Usage',
    description: 'Guidelines for using UI components',
    color: 'bg-purple-500',
  },
  'design-principles': {
    id: 'design-principles',
    name: 'Design Principles',
    description: 'Core design principles and values',
    color: 'bg-green-500',
  },
  accessibility: {
    id: 'accessibility',
    name: 'Accessibility',
    description: 'Accessibility guidelines and best practices',
    color: 'bg-amber-500',
  },
};

export default function CategoryDocumentsPage({ params }: CategoryDocumentsPageProps) {
  const designSystemId = params.id;
  const categoryId = params.categoryId;
  const category = categories[categoryId as keyof typeof categories];

  if (!category) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-gray-400">Category not found</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <div className={`h-4 w-4 rounded-full ${category.color}`}></div>
          <h1 className="text-3xl font-bold text-white">{category.name}</h1>
        </div>
        <p className="text-gray-400">{category.description}</p>
      </div>

      <CategoryDocumentsList designSystemId={designSystemId} categoryId={categoryId} />
    </div>
  );
}
