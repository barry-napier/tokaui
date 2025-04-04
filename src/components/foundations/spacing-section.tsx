'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SpacingValue {
  name: string;
  value: string;
}

interface SpacingSectionProps {
  spacingValues: SpacingValue[];
  onUpdateSpacing: (index: number, value: string) => void;
}

export function SpacingSection({ spacingValues, onUpdateSpacing }: SpacingSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Spacing Scale</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spacingValues.map((spacing, index) => (
          <div key={spacing.name} className="space-y-2">
            <Label htmlFor={`spacing-${index}`} className="text-gray-300">
              {spacing.name}
            </Label>
            <div className="flex items-center gap-4">
              <Input
                id={`spacing-${index}`}
                value={spacing.value}
                onChange={(e) => onUpdateSpacing(index, e.target.value)}
                placeholder="e.g., 1rem, 16px"
                aria-label={spacing.name}
                className="border-gray-800 bg-black text-white focus:border-gray-600"
              />
              <div
                className="h-8 rounded border border-gray-800 bg-gray-900"
                style={{ width: spacing.value }}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
