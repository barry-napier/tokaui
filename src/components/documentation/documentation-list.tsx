'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, FileText, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface DocumentPage {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
}

interface DocumentationListProps {
  designSystemId: string;
}

// Sample documentation pages - in a real app, this would be fetched from an API
const initialDocPages: DocumentPage[] = [
  {
    id: 'overview',
    title: 'Overview',
    content:
      '# Design System Overview\n\nThis is the main overview page for your design system. It provides a high-level introduction to your design system and its principles.\n\n## Purpose\n\nThis design system aims to create a consistent user experience across all products and platforms.\n\n## Core Principles\n\n- **Consistency**: Maintain visual and functional consistency\n- **Accessibility**: Ensure all components are accessible\n- **Flexibility**: Components should be adaptable to different contexts\n- **Efficiency**: Streamline the design and development process',
    lastUpdated: '2023-11-15',
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    content:
      '# Getting Started\n\n## Installation\n\nTo install the design system in your project, run:\n\n```bash\nnpm install @company/design-system\n```\n\n## Basic Usage\n\n```jsx\nimport { Button, Card } from "@company/design-system";\n\nfunction MyComponent() {\n  return (\n    <Card>\n      <h2>Hello World</h2>\n      <Button>Click Me</Button>\n    </Card>\n  );\n}\n```',
    lastUpdated: '2023-11-10',
  },
  {
    id: 'color-usage',
    title: 'Color Usage Guidelines',
    content:
      '# Color Usage Guidelines\n\n## Primary Colors\n\nPrimary colors should be used for main actions, key information, and primary UI elements.\n\n## Secondary Colors\n\nSecondary colors should be used for supporting elements, backgrounds, and less prominent UI elements.\n\n## Accessibility\n\nEnsure all color combinations meet WCAG 2.1 AA standards for contrast ratio.',
    lastUpdated: '2023-10-28',
  },
];

export function DocumentationList({ designSystemId }: DocumentationListProps) {
  const router = useRouter();
  const [docPages, setDocPages] = useState<DocumentPage[]>(initialDocPages);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDeleteDoc = async () => {
    if (!selectedDocId) return;

    setLoading(true);
    try {
      // In a real app, this would be an API call
      setDocPages((prev) => prev.filter((doc) => doc.id !== selectedDocId));
      setIsDeleteDialogOpen(false);
      setSelectedDocId(null);
    } catch (error) {
      console.error('Error deleting documentation page:', error);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteDialog = (docId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDocId(docId);
    setIsDeleteDialogOpen(true);
  };

  const navigateToEdit = (docId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/dashboard/${designSystemId}/documentation/${docId}/edit`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-white">Documentation Pages</h2>
        <Button
          className="bg-white text-black hover:bg-gray-200"
          onClick={() => router.push(`/dashboard/${designSystemId}/documentation/create`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Document
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {docPages.map((doc) => (
          <Card
            key={doc.id}
            className="cursor-pointer border-gray-800 bg-black transition-all hover:border-gray-700 hover:bg-gray-900"
            onClick={() => router.push(`/dashboard/${designSystemId}/documentation/${doc.id}`)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-xl text-white">
                <span>{doc.title}</span>
                <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-white"
                    onClick={(e) => navigateToEdit(doc.id, e)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-red-500 h-8 w-8 text-gray-400"
                    onClick={(e) => openDeleteDialog(doc.id, e)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
              <p className="text-sm text-gray-400">Last updated: {doc.lastUpdated}</p>
            </CardHeader>
            <CardContent>
              <div className="flex h-32 items-center justify-center rounded-md border border-gray-800 bg-gray-900 p-4">
                <FileText className="h-12 w-12 text-gray-600" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/dashboard/${designSystemId}/documentation/${doc.id}`);
                }}
              >
                View Document
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="border-gray-800 bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>Delete Document</DialogTitle>
            <DialogDescription className="text-gray-400">
              Are you sure you want to delete this document? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              disabled={loading}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteDoc}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {loading ? 'Deleting...' : 'Delete Document'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
