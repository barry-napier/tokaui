'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ColorSwatch {
  name: string;
  value: string;
  label: string;
  description?: string;
}

interface ColorSwatchesProps {
  colors: ColorSwatch[];
  title?: string;
  description?: string;
}

export function ColorSwatches({ colors, title, description }: ColorSwatchesProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(value);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="space-y-4">
      {title && description && (
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {colors.map((color) => (
          <div key={color.name} className="space-y-2">
            <button
              onClick={() => copyToClipboard(color.value)}
              className="group relative h-20 w-full overflow-hidden rounded-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              style={{ backgroundColor: color.value }}
              aria-label={`Copy ${color.label} color: ${color.value}`}
            >
              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity',
                  copiedColor === color.value ? 'opacity-100' : 'group-hover:opacity-100'
                )}
              >
                {copiedColor === color.value ? (
                  <Check className="h-6 w-6 text-white" />
                ) : (
                  <Copy className="h-5 w-5 text-white" />
                )}
              </div>
            </button>

            <div className="space-y-1">
              <p className="text-sm font-medium text-white">{color.label}</p>
              <p
                className="cursor-pointer font-mono text-xs text-gray-400 hover:text-white"
                onClick={() => copyToClipboard(color.value)}
              >
                {color.value}
              </p>
              {color.description && <p className="text-xs text-gray-500">{color.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
