'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Pattern {
  id: string;
  name: string;
  type: string;
  thumbnail?: string;
}

const mockPatterns: Pattern[] = [
  {
    id: '1',
    name: 'Sign-Up Form',
    type: 'Form Layout',
    thumbnail: '/patterns/signup-form.png',
  },
  {
    id: '2',
    name: 'Product Grid',
    type: 'Grid Layout',
    thumbnail: '/patterns/product-grid.png',
  },
  {
    id: '3',
    name: 'Blog Post',
    type: 'Article Layout',
    thumbnail: '/patterns/blog-post.png',
  },
];

export function PatternsList() {
  const router = useRouter();
  const [patterns, setPatterns] = useState<Pattern[]>(mockPatterns);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newPatternName, setNewPatternName] = useState('');
  const [newPatternType, setNewPatternType] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreatePattern = async () => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      const newPattern: Pattern = {
        id: Math.random().toString(),
        name: newPatternName,
        type: newPatternType,
      };
      setPatterns((prev) => [...prev, newPattern]);
      setIsAddDialogOpen(false);
      setNewPatternName('');
      setNewPatternType('');
      router.push(`/patterns/${newPattern.id}`);
    } catch (error) {
      console.error('Error creating pattern:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Patterns</h2>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Pattern
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <Card
            key={pattern.id}
            className="cursor-pointer transition-all hover:shadow-md"
            onClick={() => router.push(`/patterns/${pattern.id}`)}
          >
            <CardHeader>
              <CardTitle className="text-xl">{pattern.name}</CardTitle>
              <p className="text-sm text-gray-500">{pattern.type}</p>
            </CardHeader>
            <CardContent>
              {pattern.thumbnail ? (
                <img
                  src={pattern.thumbnail}
                  alt={pattern.name}
                  className="h-40 w-full rounded-md object-cover"
                />
              ) : (
                <div className="flex h-40 items-center justify-center rounded-md bg-gray-100">
                  <p className="text-gray-500">No preview available</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Pattern</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Pattern Name</Label>
              <Input
                id="name"
                value={newPatternName}
                onChange={(e) => setNewPatternName(e.target.value)}
                placeholder="e.g., Sign-Up Form"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Pattern Type</Label>
              <Input
                id="type"
                value={newPatternType}
                onChange={(e) => setNewPatternType(e.target.value)}
                placeholder="e.g., Form Layout"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} disabled={loading}>
              Cancel
            </Button>
            <Button
              onClick={handleCreatePattern}
              disabled={loading || !newPatternName || !newPatternType}
            >
              {loading ? 'Creating...' : 'Create Pattern'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
