'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface IconItem {
  name: string;
  component: React.ReactNode;
  reference: string;
}

interface IconGridProps {
  title: string;
  description: string;
  icons: IconItem[];
}

export function IconGrid({ title, description, icons }: IconGridProps) {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const copyToClipboard = (reference: string) => {
    navigator.clipboard.writeText(reference);
    setCopiedIcon(reference);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {icons.map((icon) => (
          <TooltipProvider key={icon.reference}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => copyToClipboard(icon.reference)}
                  className={cn(
                    'group flex h-16 w-full items-center justify-center rounded-md border border-gray-800 bg-black p-3 transition-all hover:border-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black',
                    copiedIcon === icon.reference && 'border-blue-500 bg-blue-500/10'
                  )}
                  aria-label={`Copy ${icon.name} icon reference`}
                >
                  <div className="relative">
                    <div
                      className={cn(
                        'text-gray-300 transition-colors group-hover:text-white',
                        copiedIcon === icon.reference && 'text-blue-500'
                      )}
                    >
                      {icon.component}
                    </div>
                    <div
                      className={cn(
                        'absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity',
                        copiedIcon === icon.reference ? 'opacity-100' : 'group-hover:opacity-100'
                      )}
                    >
                      {copiedIcon === icon.reference ? (
                        <Check className="text-blue-500 h-4 w-4" />
                      ) : (
                        <Copy className="h-3 w-3 text-white" />
                      )}
                    </div>
                  </div>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">{icon.name}</p>
                <p className="font-mono text-xs text-gray-400">{icon.reference}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
