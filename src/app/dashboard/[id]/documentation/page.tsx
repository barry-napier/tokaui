import { Metadata } from 'next';
import { DocumentationList } from '@/components/documentation/documentation-list';
import { DocumentationSearch } from '@/components/documentation/documentation-search';
import { DocumentationCategories } from '@/components/documentation/documentation-categories';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Documentation & Guidelines | Toka',
  description: 'Manage documentation and guidelines for your design system',
};

interface DocumentationPageProps {
  params: {
    id: string;
  };
}

// Sample documentation pages - in a real app, this would be fetched from an API
const docPages = [
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

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-gray-900">
          <TabsTrigger value="all" className="data-[state=active]:bg-black">
            All Documents
          </TabsTrigger>
          <TabsTrigger value="categories" className="data-[state=active]:bg-black">
            Categories
          </TabsTrigger>
          <TabsTrigger value="search" className="data-[state=active]:bg-black">
            Search
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <DocumentationList designSystemId={designSystemId} />
        </TabsContent>
        <TabsContent value="categories" className="mt-6">
          <DocumentationCategories designSystemId={designSystemId} />
        </TabsContent>
        <TabsContent value="search" className="mt-6">
          <DocumentationSearch designSystemId={designSystemId} docPages={docPages} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
