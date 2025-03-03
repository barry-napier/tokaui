'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Folder, Edit, Trash2, ChevronRight } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface DocumentCategory {
  id: string;
  name: string;
  description: string;
  documentCount: number;
  color: string;
}

interface DocumentationCategoriesProps {
  designSystemId: string;
}

// Sample categories - in a real app, this would be fetched from an API
const initialCategories: DocumentCategory[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Introduction and setup guides for new users',
    documentCount: 3,
    color: 'bg-blue-500',
  },
  {
    id: 'components',
    name: 'Component Usage',
    description: 'Guidelines for using UI components',
    documentCount: 5,
    color: 'bg-purple-500',
  },
  {
    id: 'design-principles',
    name: 'Design Principles',
    description: 'Core design principles and values',
    documentCount: 2,
    color: 'bg-green-500',
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    description: 'Accessibility guidelines and best practices',
    documentCount: 4,
    color: 'bg-amber-500',
  },
];

// Available category colors
const categoryColors = [
  { name: 'Blue', value: 'bg-blue-500' },
  { name: 'Purple', value: 'bg-purple-500' },
  { name: 'Green', value: 'bg-green-500' },
  { name: 'Amber', value: 'bg-amber-500' },
  { name: 'Red', value: 'bg-red-500' },
  { name: 'Pink', value: 'bg-pink-500' },
  { name: 'Indigo', value: 'bg-indigo-500' },
  { name: 'Teal', value: 'bg-teal-500' },
];

export function DocumentationCategories({ designSystemId }: DocumentationCategoriesProps) {
  const router = useRouter();
  const [categories, setCategories] = useState<DocumentCategory[]>(initialCategories);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryColor, setCategoryColor] = useState('bg-blue-500');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setCategoryName('');
    setCategoryDescription('');
    setCategoryColor('bg-blue-500');
    setSelectedCategoryId(null);
  };

  const handleCreateCategory = async () => {
    if (!categoryName.trim()) return;

    setLoading(true);
    try {
      // In a real app, this would be an API call
      const newCategoryId = categoryName.toLowerCase().replace(/\s+/g, '-');
      const newCategory: DocumentCategory = {
        id: newCategoryId,
        name: categoryName,
        description: categoryDescription,
        documentCount: 0,
        color: categoryColor,
      };

      setCategories((prev) => [...prev, newCategory]);
      setIsAddDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error creating category:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditCategory = async () => {
    if (!selectedCategoryId || !categoryName.trim()) return;

    setLoading(true);
    try {
      // In a real app, this would be an API call
      setCategories((prev) =>
        prev.map((category) =>
          category.id === selectedCategoryId
            ? {
                ...category,
                name: categoryName,
                description: categoryDescription,
                color: categoryColor,
              }
            : category
        )
      );
      setIsEditDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error updating category:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async () => {
    if (!selectedCategoryId) return;

    setLoading(true);
    try {
      // In a real app, this would be an API call
      setCategories((prev) => prev.filter((category) => category.id !== selectedCategoryId));
      setIsDeleteDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error deleting category:', error);
    } finally {
      setLoading(false);
    }
  };

  const openEditDialog = (category: DocumentCategory, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCategoryId(category.id);
    setCategoryName(category.name);
    setCategoryDescription(category.description);
    setCategoryColor(category.color);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (categoryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCategoryId(categoryId);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-white">Document Categories</h2>
        <Button
          className="bg-white text-black hover:bg-gray-200"
          onClick={() => setIsAddDialogOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer border-gray-800 bg-black transition-all hover:border-gray-700 hover:bg-gray-900"
            onClick={() =>
              router.push(`/dashboard/${designSystemId}/documentation/category/${category.id}`)
            }
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge className={`${category.color} px-2 py-1`}>
                  {category.documentCount} docs
                </Badge>
                <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-white"
                    onClick={(e) => openEditDialog(category, e)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-red-500 h-8 w-8 text-gray-400"
                    onClick={(e) => openDeleteDialog(category.id, e)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardTitle className="text-xl text-white">{category.name}</CardTitle>
              <p className="text-sm text-gray-400">{category.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center rounded-md border border-gray-800 bg-gray-900 p-4">
                <Folder className={`h-12 w-12 ${category.color.replace('bg-', 'text-')}`} />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/dashboard/${designSystemId}/documentation/category/${category.id}`);
                }}
              >
                <span>Browse Documents</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Add Category Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="border-gray-800 bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>Create New Category</DialogTitle>
            <DialogDescription className="text-gray-400">
              Add a new category to organize your documentation.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Category Name
              </Label>
              <Input
                id="name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="e.g., Getting Started"
                className="border-gray-700 bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-300">
                Description
              </Label>
              <Input
                id="description"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                placeholder="e.g., Guides for new users"
                className="border-gray-700 bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Category Color</Label>
              <div className="flex flex-wrap gap-2">
                {categoryColors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    className={`h-8 w-8 rounded-full ${color.value} ${
                      categoryColor === color.value
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900'
                        : ''
                    }`}
                    onClick={() => setCategoryColor(color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsAddDialogOpen(false);
                resetForm();
              }}
              disabled={loading}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateCategory}
              disabled={loading || !categoryName.trim()}
              className="bg-white text-black hover:bg-gray-200"
            >
              {loading ? 'Creating...' : 'Create Category'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Category Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="border-gray-800 bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription className="text-gray-400">
              Update the category details.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name" className="text-gray-300">
                Category Name
              </Label>
              <Input
                id="edit-name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="border-gray-700 bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-description" className="text-gray-300">
                Description
              </Label>
              <Input
                id="edit-description"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                className="border-gray-700 bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Category Color</Label>
              <div className="flex flex-wrap gap-2">
                {categoryColors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    className={`h-8 w-8 rounded-full ${color.value} ${
                      categoryColor === color.value
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900'
                        : ''
                    }`}
                    onClick={() => setCategoryColor(color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsEditDialogOpen(false);
                resetForm();
              }}
              disabled={loading}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditCategory}
              disabled={loading || !categoryName.trim()}
              className="bg-white text-black hover:bg-gray-200"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="border-gray-800 bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>Delete Category</DialogTitle>
            <DialogDescription className="text-gray-400">
              Are you sure you want to delete this category? This will not delete the documents
              within the category.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsDeleteDialogOpen(false);
                resetForm();
              }}
              disabled={loading}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteCategory}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {loading ? 'Deleting...' : 'Delete Category'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
