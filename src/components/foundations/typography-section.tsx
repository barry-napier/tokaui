'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface TypographyStyle {
  name: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
}

interface TypographyStyleProps {
  style: TypographyStyle;
  onUpdate: (style: TypographyStyle) => void;
}

function TypographyStyleEditor({ style, onUpdate }: TypographyStyleProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentStyle, setCurrentStyle] = useState(style);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(currentStyle);
    setIsEditing(false);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Font Family</label>
            <Select
              value={currentStyle.fontFamily}
              onValueChange={(value) => setCurrentStyle({ ...currentStyle, fontFamily: value })}
            >
              <SelectTrigger aria-label="Font family">
                <SelectValue placeholder="Select font family" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="helvetica">Helvetica</SelectItem>
                <SelectItem value="arial">Arial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Font Size</label>
            <Input
              type="text"
              value={currentStyle.fontSize}
              onChange={(e) => setCurrentStyle({ ...currentStyle, fontSize: e.target.value })}
              placeholder="e.g., 16px, 1.25rem"
              aria-label="Font size"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Font Weight</label>
            <Select
              value={currentStyle.fontWeight}
              onValueChange={(value) => setCurrentStyle({ ...currentStyle, fontWeight: value })}
            >
              <SelectTrigger aria-label="Font weight">
                <SelectValue placeholder="Select font weight" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="400">Regular (400)</SelectItem>
                <SelectItem value="500">Medium (500)</SelectItem>
                <SelectItem value="600">Semibold (600)</SelectItem>
                <SelectItem value="700">Bold (700)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button type="submit">Save</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCurrentStyle(style);
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className="cursor-pointer space-y-2"
          style={{
            fontFamily: currentStyle.fontFamily,
            fontSize: currentStyle.fontSize,
            fontWeight: currentStyle.fontWeight,
          }}
        >
          <h4 className="text-lg font-medium text-gray-900">{currentStyle.name}</h4>
          <p className="text-sm text-gray-500">
            {currentStyle.fontFamily}, {currentStyle.fontSize}, {currentStyle.fontWeight}
          </p>
          <div className="mt-2">The quick brown fox jumps over the lazy dog</div>
        </div>
      )}
    </div>
  );
}

interface TypographySectionProps {
  styles: TypographyStyle[];
  onUpdateStyle: (index: number, style: TypographyStyle) => void;
}

export function TypographySection({ styles, onUpdateStyle }: TypographySectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Typography</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {styles.map((style, index) => (
          <TypographyStyleEditor
            key={style.name}
            style={style}
            onUpdate={(updatedStyle) => onUpdateStyle(index, updatedStyle)}
          />
        ))}
      </div>
    </div>
  );
}
