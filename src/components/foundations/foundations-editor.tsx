'use client';

import { useState } from 'react';
import { ColorSwatch } from './color-swatch';
import { TypographySection } from './typography-section';
import { SpacingSection } from './spacing-section';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

// Initial data that would typically come from your database
const initialColors = [
  { name: 'Primary Blue', hex: '#0066FF' },
  { name: 'Secondary Gray', hex: '#4B5563' },
  { name: 'Success Green', hex: '#10B981' },
  { name: 'Warning Yellow', hex: '#F59E0B' },
  { name: 'Error Red', hex: '#EF4444' },
];

interface TypographyStyle {
  name: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
}

const initialTypographyStyles = [
  {
    name: 'Heading 1',
    fontFamily: 'inter',
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  {
    name: 'Heading 2',
    fontFamily: 'inter',
    fontSize: '2rem',
    fontWeight: '600',
  },
  {
    name: 'Body',
    fontFamily: 'inter',
    fontSize: '1rem',
    fontWeight: '400',
  },
];

const initialSpacingValues = [
  { name: 'xs', value: '0.5rem' },
  { name: 'sm', value: '1rem' },
  { name: 'md', value: '1.5rem' },
  { name: 'lg', value: '2rem' },
  { name: 'xl', value: '3rem' },
];

export function FoundationsEditor() {
  const [colors, setColors] = useState(initialColors);
  const [typographyStyles, setTypographyStyles] = useState(initialTypographyStyles);
  const [spacingValues, setSpacingValues] = useState(initialSpacingValues);

  const handleAddColor = () => {
    const newColor = {
      name: 'New Color',
      hex: '#000000',
    };
    setColors([...colors, newColor]);
  };

  const handleUpdateColor = (index: number, name: string, hex: string) => {
    const newColors = [...colors];
    newColors[index] = { name, hex };
    setColors(newColors);
  };

  const handleDeleteColor = (index: number) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const handleUpdateTypography = (index: number, style: TypographyStyle) => {
    const newStyles = [...typographyStyles];
    newStyles[index] = style;
    setTypographyStyles(newStyles);
  };

  const handleUpdateSpacing = (index: number, value: string) => {
    const newSpacing = [...spacingValues];
    newSpacing[index] = { ...newSpacing[index], value };
    setSpacingValues(newSpacing);
  };

  return (
    <div className="space-y-12">
      {/* Colors Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Colors</h2>
          <Button onClick={handleAddColor} size="sm">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Color
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map((color, index) => (
            <ColorSwatch
              key={`${color.name}-${index}`}
              name={color.name}
              hex={color.hex}
              onDelete={() => handleDeleteColor(index)}
              onUpdate={(name, hex) => handleUpdateColor(index, name, hex)}
            />
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <TypographySection styles={typographyStyles} onUpdateStyle={handleUpdateTypography} />

      {/* Spacing Section */}
      <SpacingSection spacingValues={spacingValues} onUpdateSpacing={handleUpdateSpacing} />
    </div>
  );
}
