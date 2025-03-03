'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusIcon } from 'lucide-react';

interface Component {
  id: string;
  name: string;
  type: string;
  thumbnail?: string;
}

const initialComponents: Component[] = [
  {
    id: '1',
    name: 'Primary Button',
    type: 'button',
    thumbnail: '/thumbnails/button.png',
  },
  {
    id: '2',
    name: 'Info Card',
    type: 'card',
    thumbnail: '/thumbnails/card.png',
  },
  {
    id: '3',
    name: 'Search Input',
    type: 'input',
    thumbnail: '/thumbnails/input.png',
  },
];

export function SimpleComponentsList() {
  const [components] = useState(initialComponents);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Components</h2>
        <Button className="bg-white text-black hover:bg-gray-200">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Component
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card key={component.id} className="overflow-hidden border-gray-800 bg-black">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">{component.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex aspect-video items-center justify-center bg-gray-900">
                {component.thumbnail ? (
                  <img
                    src={component.thumbnail}
                    alt={component.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400">{component.type}</div>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button
                variant="outline"
                className="w-full border-gray-800 text-white hover:bg-gray-800"
                asChild
              >
                <Link href={`/component-editor?id=${component.id}`}>Edit Component</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
