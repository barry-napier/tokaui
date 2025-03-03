'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ReactMarkdown from 'react-markdown';

interface DocumentCreatorProps {
  designSystemId: string;
}

export function DocumentCreator({ designSystemId }: DocumentCreatorProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(
    '# New Document\n\nStart writing your documentation here.'
  );
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async () => {
    if (!title.trim()) {
      setError('Please enter a document title');
      return;
    }

    setIsCreating(true);
    setError('');

    try {
      // In a real app, this would be an API call to create the document
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Generate a unique ID for the new document
      const docId = title.toLowerCase().replace(/\s+/g, '-');

      console.log('Document created successfully', { title, docId, content });

      // Redirect to the newly created document
      router.push(`/dashboard/${designSystemId}/documentation/${docId}`);
    } catch (error) {
      console.error('Error creating document:', error);
      setError('Failed to create document. Please try again.');
    } finally {
      setIsCreating(false);
    }
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
          <h1 className="text-2xl font-bold text-white">Create New Document</h1>
        </div>
        <Button
          onClick={handleCreate}
          className="bg-white text-black hover:bg-gray-200"
          disabled={isCreating}
        >
          <Save className="mr-2 h-4 w-4" />
          {isCreating ? 'Creating...' : 'Create Document'}
        </Button>
      </div>

      {error && <div className="bg-red-900/20 text-red-400 rounded-md p-3 text-sm">{error}</div>}

      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="title" className="text-sm font-medium text-gray-400">
            Document Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter document title"
            className="border-gray-800 bg-black text-white focus:border-gray-700"
          />
        </div>

        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="bg-gray-900">
            <TabsTrigger value="edit" className="data-[state=active]:bg-black">
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview" className="data-[state=active]:bg-black">
              Preview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="mt-4">
            <Card className="border-gray-800 bg-black p-6">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[500px] border-gray-800 bg-black font-mono text-white focus:border-gray-700"
                placeholder="# Document Title

Write your markdown content here..."
              />
            </Card>
          </TabsContent>
          <TabsContent value="preview" className="mt-4">
            <Card className="border-gray-800 bg-black p-6">
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
