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
import { useSupabaseClient } from '@/hooks/useSupabaseClient';

interface DesignSystem {
  id: string;
  name: string;
  thumbnail_url?: string;
  created_at: string;
}

export function DesignSystemsList() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const [designSystems, setDesignSystems] = useState<DesignSystem[]>([]);
  const [selectedSystem, setSelectedSystem] = useState<DesignSystem | null>(null);
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateNew = () => {
    router.push('/auth/onboarding');
  };

  const handleSelect = (system: DesignSystem) => {
    setSelectedSystem(system);
    // Update active system in Supabase and reload dashboard
    // This is a placeholder - implement actual logic
    router.push(`/dashboard/${system.id}`);
  };

  const handleRename = async () => {
    if (!selectedSystem || !newName.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('design_systems')
        .update({ name: newName.trim() })
        .eq('id', selectedSystem.id);

      if (error) throw error;

      // Update local state
      setDesignSystems((systems) =>
        systems.map((s) => (s.id === selectedSystem.id ? { ...s, name: newName.trim() } : s))
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
      const { error } = await supabase.from('design_systems').delete().eq('id', selectedSystem.id);

      if (error) throw error;

      // Update local state
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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Design Systems</h2>
        <Button onClick={handleCreateNew}>
          <Plus className="mr-2 h-4 w-4" />
          Create New
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {designSystems.map((system) => (
          <Card key={system.id} className="relative">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{system.name}</CardTitle>
                  <CardDescription>
                    Created {format(new Date(system.created_at), 'MMM d, yyyy')}
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => {
                        setSelectedSystem(system);
                        setNewName(system.name);
                        setIsRenameDialogOpen(true);
                      }}
                    >
                      <Pencil className="mr-2 h-4 w-4" />
                      Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600"
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
              {system.thumbnail_url && (
                <div className="mb-4">
                  <img
                    src={system.thumbnail_url}
                    alt={`${system.name} thumbnail`}
                    className="h-32 w-full rounded-md object-cover"
                  />
                </div>
              )}
              <Button variant="outline" className="w-full" onClick={() => handleSelect(system)}>
                Open
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rename Dialog */}
      <Dialog open={isRenameDialogOpen} onOpenChange={setIsRenameDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Design System</DialogTitle>
            <DialogDescription>Enter a new name for your design system.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRenameDialogOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button onClick={handleRename} disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Design System</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this design system? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              disabled={loading}
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
