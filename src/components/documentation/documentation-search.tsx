'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface DocumentPage {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
}

interface DocumentationSearchProps {
  designSystemId: string;
  docPages: DocumentPage[];
}

export function DocumentationSearch({ designSystemId, docPages }: DocumentationSearchProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<DocumentPage[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate search delay
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = docPages.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) || doc.content.toLowerCase().includes(query)
      );

      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, docPages]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search documentation..."
          className="border-gray-800 bg-black pl-10 text-white focus:border-gray-700"
        />
      </div>

      {searchQuery.trim() && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400">
            {isSearching
              ? 'Searching...'
              : searchResults.length === 0
                ? 'No results found'
                : `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'}`}
          </h3>

          {searchResults.length > 0 && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {searchResults.map((doc) => (
                <Card
                  key={doc.id}
                  className="cursor-pointer border-gray-800 bg-black transition-all hover:border-gray-700 hover:bg-gray-900"
                  onClick={() =>
                    router.push(`/dashboard/${designSystemId}/documentation/${doc.id}`)
                  }
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-white">{doc.title}</CardTitle>
                    <p className="text-xs text-gray-400">Last updated: {doc.lastUpdated}</p>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <p className="truncate text-sm text-gray-400">
                        {doc.content.replace(/[#*`]/g, '').substring(0, 60)}...
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                      View Document
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
