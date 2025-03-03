'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Pattern {
  id: string;
  name: string;
  description: string;
  category: string;
  thumbnail?: string;
}

interface PatternsGridProps {
  designSystemId: string;
}

const initialPatterns: Pattern[] = [
  {
    id: 'hero-section',
    name: 'Hero Section',
    description: 'Prominent section at the top of a page that introduces the main content',
    category: 'sections',
    thumbnail: '/thumbnails/hero-section.png',
  },
  {
    id: 'feature-grid',
    name: 'Feature Grid',
    description: 'Grid layout for displaying multiple features or benefits',
    category: 'sections',
    thumbnail: '/thumbnails/feature-grid.png',
  },
  {
    id: 'pricing-table',
    name: 'Pricing Table',
    description: 'Comparison table for displaying different pricing tiers',
    category: 'sections',
    thumbnail: '/thumbnails/pricing-table.png',
  },
  {
    id: 'dashboard-layout',
    name: 'Dashboard Layout',
    description: 'Layout template for admin dashboards with sidebar navigation',
    category: 'layouts',
    thumbnail: '/thumbnails/dashboard-layout.png',
  },
  {
    id: 'authentication-flow',
    name: 'Authentication Flow',
    description: 'Multi-step authentication process including login, signup, and password reset',
    category: 'flows',
    thumbnail: '/thumbnails/auth-flow.png',
  },
];

export function PatternsGrid({ designSystemId }: PatternsGridProps) {
  const [patterns] = useState(initialPatterns);

  // Format category names for display
  const formatCategoryName = (category: string) => {
    return category
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-white">Available Patterns</h2>
        <Button className="bg-white text-black hover:bg-gray-200" asChild>
          <Link href={`/dashboard/${designSystemId}/patterns/new`}>
            <Plus className="mr-2 h-4 w-4" />
            Add Pattern
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <Card
            key={pattern.id}
            className="hover:border-blue-500 hover:shadow-blue-500/10 overflow-hidden border-gray-800 bg-black hover:shadow-md"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-white">{pattern.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex aspect-video items-center justify-center bg-gray-900">
                {pattern.thumbnail ? (
                  <img
                    src={pattern.thumbnail}
                    alt={pattern.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <span className="text-sm text-gray-400">{pattern.name} Preview</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="mb-2 text-sm text-gray-400">{pattern.description}</p>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-gray-900 px-2 py-1 text-xs text-gray-400">
                    {formatCategoryName(pattern.category)}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-gray-800 text-white hover:bg-gray-800"
                asChild
              >
                <Link href={`/dashboard/${designSystemId}/patterns/${pattern.id}`}>
                  View Pattern
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
