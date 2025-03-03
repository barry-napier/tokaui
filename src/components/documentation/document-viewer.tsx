'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Edit, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import ReactMarkdown from 'react-markdown';

interface DocumentViewerProps {
  designSystemId: string;
  docId: string;
}

interface DocumentPage {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
}

// Sample documentation pages - in a real app, this would be fetched from an API
const docPages: Record<string, DocumentPage> = {
  overview: {
    id: 'overview',
    title: 'Overview',
    content:
      '# Design System Overview\n\nThis is the main overview page for your design system. It provides a high-level introduction to your design system and its principles.\n\n## Purpose\n\nThis design system aims to create a consistent user experience across all products and platforms.\n\n## Core Principles\n\n- **Consistency**: Maintain visual and functional consistency\n- **Accessibility**: Ensure all components are accessible\n- **Flexibility**: Components should be adaptable to different contexts\n- **Efficiency**: Streamline the design and development process',
    lastUpdated: '2023-11-15',
  },
  'getting-started': {
    id: 'getting-started',
    title: 'Getting Started',
    content:
      '# Getting Started\n\n## Installation\n\nTo install the design system in your project, run:\n\n```bash\nnpm install @company/design-system\n```\n\n## Basic Usage\n\n```jsx\nimport { Button, Card } from "@company/design-system";\n\nfunction MyComponent() {\n  return (\n    <Card>\n      <h2>Hello World</h2>\n      <Button>Click Me</Button>\n    </Card>\n  );\n}\n```',
    lastUpdated: '2023-11-10',
  },
  'color-usage': {
    id: 'color-usage',
    title: 'Color Usage Guidelines',
    content:
      '# Color Usage Guidelines\n\n## Primary Colors\n\nPrimary colors should be used for main actions, key information, and primary UI elements.\n\n## Secondary Colors\n\nSecondary colors should be used for supporting elements, backgrounds, and less prominent UI elements.\n\n## Accessibility\n\nEnsure all color combinations meet WCAG 2.1 AA standards for contrast ratio.',
    lastUpdated: '2023-10-28',
  },
};

export function DocumentViewer({ designSystemId, docId }: DocumentViewerProps) {
  const router = useRouter();
  const [document, setDocument] = useState<DocumentPage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDocument = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Get document data from our mock data
        const doc = docPages[docId];
        if (doc) {
          setDocument(doc);
        } else {
          // If document not found, create a new empty document
          setDocument({
            id: docId,
            title: 'Document Not Found',
            content: '# Document Not Found\n\nThe requested document could not be found.',
            lastUpdated: new Date().toISOString().split('T')[0],
          });
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocument();
  }, [docId]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-800 hover:bg-gray-900"
              disabled
            >
              <ArrowLeft className="h-4 w-4 text-gray-400" />
            </Button>
            <Skeleton className="h-8 w-48 bg-gray-800" />
          </div>
          <Skeleton className="h-10 w-24 bg-gray-800" />
        </div>
        <Card className="border-gray-800 bg-black p-6">
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4 bg-gray-800" />
            <Skeleton className="h-4 w-full bg-gray-800" />
            <Skeleton className="h-4 w-full bg-gray-800" />
            <Skeleton className="h-4 w-2/3 bg-gray-800" />
          </div>
        </Card>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-gray-400">Document not found</div>
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold text-white">{document.title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-sm text-gray-400">
            <Clock className="mr-1 h-4 w-4" />
            Last updated: {document.lastUpdated}
          </div>
          <Button
            onClick={() => router.push(`/dashboard/${designSystemId}/documentation/${docId}/edit`)}
            className="bg-white text-black hover:bg-gray-200"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit Document
          </Button>
        </div>
      </div>

      <Card className="border-gray-800 bg-black p-6">
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{document.content}</ReactMarkdown>
        </div>
      </Card>
    </div>
  );
}
