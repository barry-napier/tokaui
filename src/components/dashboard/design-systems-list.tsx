'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import { MoreVertical, Plus, Pencil, Trash2 } from 'lucide-react';

interface DesignSystem {
  id: string;
  name: string;
  client?: string;
  thumbnail_url?: string;
  created_at: string;
}

// Sample data for demonstration
const sampleDesignSystems: DesignSystem[] = [
  {
    id: 'alpha-123',
    name: 'Project Alpha Design System',
    client: 'Alpha Industries',
    thumbnail_url: '/design-systems/alpha-thumbnail.png',
    created_at: '2023-10-15T12:00:00Z',
  },
  {
    id: 'beta-456',
    name: 'Beta Brand Design System',
    client: 'Beta Corporation',
    thumbnail_url: '/design-systems/beta-thumbnail.png',
    created_at: '2023-11-20T14:30:00Z',
  },
  {
    id: 'gamma-789',
    name: 'Gamma E-commerce Design System',
    client: 'Gamma Retail',
    thumbnail_url: '/design-systems/gamma-thumbnail.png',
    created_at: '2024-01-05T09:15:00Z',
  },
];

export function DesignSystemsList() {
  const router = useRouter();
  const [designSystems, setDesignSystems] = useState<DesignSystem[]>(sampleDesignSystems);
  const [selectedSystem, setSelectedSystem] = useState<DesignSystem | null>(null);
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newClient, setNewClient] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateNew = () => {
    setNewName('');
    setNewClient('');
    setIsCreateDialogOpen(true);
  };

  const handleCreateSubmit = () => {
    if (!newName.trim()) return;

    setLoading(true);
    try {
      // In a real app, this would be an API call
      const newSystem: DesignSystem = {
        id: `ds-${Date.now()}`,
        name: newName.trim(),
        client: newClient.trim() || undefined,
        created_at: new Date().toISOString(),
      };

      setDesignSystems((prev) => [...prev, newSystem]);
      setIsCreateDialogOpen(false);
      setNewName('');
      setNewClient('');
    } catch (error) {
      console.error('Error creating design system:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (system: DesignSystem) => {
    router.push(`/dashboard/${system.id}`);
  };

  const handleRename = async () => {
    if (!selectedSystem || !newName.trim()) return;

    setLoading(true);
    try {
      // In a real app, this would be an API call
      setDesignSystems((systems) =>
        systems.map((s) =>
          s.id === selectedSystem.id
            ? {
                ...s,
                name: newName.trim(),
                client: newClient.trim() || s.client,
              }
            : s
        )
      );
      setIsRenameDialogOpen(false);
    } catch (error) {
      console.error('Error renaming design system:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedSystem) return;

    setLoading(true);
    try {
      // In a real app, this would be an API call
      setDesignSystems((systems) => systems.filter((s) => s.id !== selectedSystem.id));
      setIsDeleteDialogOpen(false);
    } catch (error) {
      console.error('Error deleting design system:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
        <Button
          onClick={handleCreateNew}
          className="flex items-center gap-2 bg-white text-black hover:bg-gray-200"
        >
          <Plus className="h-4 w-4" />
          Create New
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {designSystems.map((system) => (
          <Card
            key={system.id}
            className="hover:border-blue-500 hover:shadow-blue-500/10 relative border-gray-800 bg-black transition-all hover:shadow-md"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl text-white">{system.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {system.client && <span className="block">Client: {system.client}</span>}
                    Created {format(new Date(system.created_at), 'MMM d, yyyy')}
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="border-gray-800 bg-gray-900">
                    <DropdownMenuItem
                      className="text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => {
                        setSelectedSystem(system);
                        setNewName(system.name);
                        setNewClient(system.client || '');
                        setIsRenameDialogOpen(true);
                      }}
                    >
                      <Pencil className="mr-2 h-4 w-4" />
                      Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-400 hover:text-red-300 hover:bg-gray-800"
                      onClick={() => {
                        setSelectedSystem(system);
                        setIsDeleteDialogOpen(true);
                      }}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              {system.thumbnail_url ? (
                <div className="mb-4">
                  <img
                    src={system.thumbnail_url}
                    alt={`${system.name} thumbnail`}
                    className="h-32 w-full rounded-md object-cover"
                  />
                </div>
              ) : (
                <div className="mb-4 flex h-32 items-center justify-center rounded-md border border-gray-800 bg-gray-900">
                  <p className="text-gray-500">No preview available</p>
                </div>
              )}
              <Button
                className="w-full bg-white text-black hover:bg-gray-200"
                onClick={() => handleSelect(system)}
              >
                Open
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="border-gray-800 bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-white">Create New Design System</DialogTitle>
            <DialogDescription className="text-gray-400">
              Add a new design system to your dashboard.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="new-name" className="text-gray-300">
                Design System Name
              </Label>
              <Input
                id="new-name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border-gray-700 bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-client" className="text-gray-300">
                Client (Optional)
              </Label>
              <Input
                id="new-client"
                value={newClient}
                onChange={(e) => setNewClient(e.target.value)}
                className="border-gray-700 bg-gray-800 text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCreateDialogOpen(false)}
              disabled={loading}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateSubmit}
              disabled={loading || !newName.trim()}
              className="bg-white text-black hover:bg-gray-200"
            >
              {loading ? 'Creating...' : 'Create Design System'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rename Dialog */}
      <Dialog open={isRenameDialogOpen} onOpenChange={setIsRenameDialogOpen}>
        <DialogContent className="border-gray-800 bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-white">Rename Design System</DialogTitle>
            <DialogDescription className="text-gray-400">
              Update the name and client for your design system.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Design System Name
              </Label>
              <Input
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border-gray-700 bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client" className="text-gray-300">
                Client (Optional)
              </Label>
              <Input
                id="client"
                value={newClient}
                onChange={(e) => setNewClient(e.target.value)}
                className="border-gray-700 bg-gray-800 text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRenameDialogOpen(false)}
              disabled={loading}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={handleRename}
              disabled={loading || !newName.trim()}
              className="bg-white text-black hover:bg-gray-200"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="border-gray-800 bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-white">Delete Design System</DialogTitle>
            <DialogDescription className="text-gray-400">
              Are you sure you want to delete this design system? This action cannot be undone.
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
            <Button variant="destructive" onClick={handleDelete} disabled={loading}>
              {loading ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
