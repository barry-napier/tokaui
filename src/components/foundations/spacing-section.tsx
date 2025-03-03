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
      <h3 className="text-lg font-medium text-gray-900">Spacing Scale</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spacingValues.map((spacing, index) => (
          <div key={spacing.name} className="space-y-2">
            <Label htmlFor={`spacing-${index}`}>{spacing.name}</Label>
            <div className="flex items-center gap-4">
              <Input
                id={`spacing-${index}`}
                value={spacing.value}
                onChange={(e) => onUpdateSpacing(index, e.target.value)}
                placeholder="e.g., 1rem, 16px"
              />
              <div
                className="h-8 rounded border border-gray-200 bg-gray-50"
                style={{ width: spacing.value }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
