'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, FileText, Edit, Trash2, ArrowLeft } from 'lucide-react';
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
  categoryId: string;
}

interface CategoryDocumentsListProps {
  designSystemId: string;
  categoryId: string;
}

// Sample documentation pages - in a real app, this would be fetched from an API
const allDocPages: DocumentPage[] = [
  {
    id: 'overview',
    title: 'Overview',
    content:
      '# Design System Overview\n\nThis is the main overview page for your design system. It provides a high-level introduction to your design system and its principles.\n\n## Purpose\n\nThis design system aims to create a consistent user experience across all products and platforms.\n\n## Core Principles\n\n- **Consistency**: Maintain visual and functional consistency\n- **Accessibility**: Ensure all components are accessible\n- **Flexibility**: Components should be adaptable to different contexts\n- **Efficiency**: Streamline the design and development process',
    lastUpdated: '2023-11-15',
    categoryId: 'getting-started',
  },
  {
    id: 'installation',
    title: 'Installation Guide',
    content:
      '# Installation Guide\n\nFollow these steps to install and set up the design system in your project.\n\n## Prerequisites\n\n- Node.js 14 or higher\n- npm or yarn\n\n## Installation\n\n```bash\nnpm install @company/design-system\n```',
    lastUpdated: '2023-11-12',
    categoryId: 'getting-started',
  },
  {
    id: 'quick-start',
    title: 'Quick Start',
    content:
      '# Quick Start\n\nGet up and running with the design system in minutes.\n\n## Basic Setup\n\n```jsx\nimport { ThemeProvider } from "@company/design-system";\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <YourApp />\n    </ThemeProvider>\n  );\n}\n```',
    lastUpdated: '2023-11-10',
    categoryId: 'getting-started',
  },
  {
    id: 'button-usage',
    title: 'Button Component',
    content:
      '# Button Component\n\nThe Button component is used to trigger actions or events.\n\n## Variants\n\n- Primary\n- Secondary\n- Outline\n- Ghost\n\n## Usage\n\n```jsx\nimport { Button } from "@company/design-system";\n\nfunction Example() {\n  return (\n    <Button variant="primary">Click Me</Button>\n  );\n}\n```',
    lastUpdated: '2023-10-28',
    categoryId: 'components',
  },
  {
    id: 'card-usage',
    title: 'Card Component',
    content:
      '# Card Component\n\nThe Card component is used to group related content and actions.\n\n## Parts\n\n- CardHeader\n- CardContent\n- CardFooter\n\n## Usage\n\n```jsx\nimport { Card, CardHeader, CardContent, CardFooter } from "@company/design-system";\n\nfunction Example() {\n  return (\n    <Card>\n      <CardHeader>Title</CardHeader>\n      <CardContent>Content goes here</CardContent>\n      <CardFooter>Actions</CardFooter>\n    </Card>\n  );\n}\n```',
    lastUpdated: '2023-10-25',
    categoryId: 'components',
  },
  {
    id: 'consistency',
    title: 'Consistency Principle',
    content:
      '# Consistency Principle\n\nConsistency is key to creating a cohesive user experience.\n\n## Visual Consistency\n\n- Use the same colors, typography, and spacing throughout the interface\n- Maintain consistent component styling\n\n## Behavioral Consistency\n\n- Ensure interactions work the same way across the application\n- Use familiar patterns that users already understand',
    lastUpdated: '2023-10-20',
    categoryId: 'design-principles',
  },
  {
    id: 'color-contrast',
    title: 'Color Contrast Guidelines',
    content:
      '# Color Contrast Guidelines\n\nEnsure your design meets accessibility standards for color contrast.\n\n## WCAG Requirements\n\n- AA standard: 4.5:1 contrast ratio for normal text\n- AAA standard: 7:1 contrast ratio for normal text\n\n## Testing Tools\n\n- WebAIM Contrast Checker\n- Stark Contrast Checker\n- Lighthouse Accessibility Audit',
    lastUpdated: '2023-10-15',
    categoryId: 'accessibility',
  },
];

export function CategoryDocumentsList({ designSystemId, categoryId }: CategoryDocumentsListProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Filter documents by category
  const docPages = allDocPages.filter((doc) => doc.categoryId === categoryId);

  const handleDeleteDoc = async () => {
    if (!selectedDocId) return;

    setLoading(true);
    try {
      // In a real app, this would be an API call
      console.log(`Deleting document: ${selectedDocId}`);
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
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push(`/dashboard/${designSystemId}/documentation`)}
            className="border-gray-800 hover:bg-gray-900"
          >
            <ArrowLeft className="h-4 w-4 text-gray-400" />
          </Button>
          <h2 className="text-xl font-medium text-white">Documents in this Category</h2>
        </div>
        <Button
          className="bg-white text-black hover:bg-gray-200"
          onClick={() => router.push(`/dashboard/${designSystemId}/documentation/create`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Document
        </Button>
      </div>

      {docPages.length === 0 ? (
        <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed border-gray-800 bg-black p-8 text-center">
          <FileText className="mb-2 h-10 w-10 text-gray-600" />
          <h3 className="text-lg font-medium text-white">No documents in this category</h3>
          <p className="mt-1 text-sm text-gray-400">
            Create a new document or assign existing documents to this category.
          </p>
          <Button
            className="mt-4 bg-white text-black hover:bg-gray-200"
            onClick={() => router.push(`/dashboard/${designSystemId}/documentation/create`)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Document
          </Button>
        </div>
      ) : (
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
      )}

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
