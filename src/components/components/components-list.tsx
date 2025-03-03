'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlusIcon } from 'lucide-react';

interface Component {
  id: string;
  name: string;
  type: 'button' | 'card' | 'input' | 'custom';
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
    name: 'Product Card',
    type: 'card',
    thumbnail: '/thumbnails/card.png',
  },
];

export function ComponentsList() {
  const router = useRouter();
  const [components, setComponents] = useState(initialComponents);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newComponent, setNewComponent] = useState({
    name: '',
    type: 'button' as const,
  });
  const [loading, setLoading] = useState(false);

  const handleAddComponent = async () => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      const component: Component = {
        id: Math.random().toString(36).substr(2, 9),
        name: newComponent.name,
        type: newComponent.type,
        thumbnail: `/thumbnails/${newComponent.type}.png`,
      };
      setComponents([...components, component]);
      setIsAddDialogOpen(false);
      setNewComponent({ name: '', type: 'button' });
    } catch (error) {
      console.error('Error adding component:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectComponent = (component: Component) => {
    router.push(`/components/${component.id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Components</h2>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Component
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card
            key={component.id}
            className="cursor-pointer transition-all hover:border-gray-300 hover:shadow-sm"
            onClick={() => handleSelectComponent(component)}
          >
            <CardHeader>
              <CardTitle className="text-xl">{component.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {component.thumbnail ? (
                <div className="mb-4">
                  <img
                    src={component.thumbnail}
                    alt={`${component.name} thumbnail`}
                    className="h-32 w-full rounded-md object-cover"
                  />
                </div>
              ) : (
                <div className="mb-4 flex h-32 items-center justify-center rounded-md bg-gray-100">
                  <span className="text-gray-400">No preview available</span>
                </div>
              )}
              <p className="text-sm capitalize text-gray-500">{component.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Component</DialogTitle>
            <DialogDescription>Create a new component for your design system.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Component Name</Label>
              <Input
                id="name"
                value={newComponent.name}
                onChange={(e) => setNewComponent({ ...newComponent, name: e.target.value })}
                placeholder="e.g., Primary Button"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Component Type</Label>
              <Select
                value={newComponent.type}
                onValueChange={(value: 'button' | 'card' | 'input' | 'custom') =>
                  setNewComponent({ ...newComponent, type: value })
                }
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select component type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="button">Button</SelectItem>
                  <SelectItem value="card">Card</SelectItem>
                  <SelectItem value="input">Input</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} disabled={loading}>
              Cancel
            </Button>
            <Button onClick={handleAddComponent} disabled={loading || !newComponent.name.trim()}>
              {loading ? 'Creating...' : 'Create Component'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
