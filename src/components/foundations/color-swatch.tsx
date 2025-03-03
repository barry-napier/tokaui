'use client';

import { Trash2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface ColorSwatchProps {
  name: string;
  hex: string;
  onDelete: () => void;
  onUpdate: (name: string, hex: string) => void;
}

export function ColorSwatch({ name, hex, onDelete, onUpdate }: ColorSwatchProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [colorName, setColorName] = useState(name);
  const [hexValue, setHexValue] = useState(hex);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(colorName, hexValue);
    setIsEditing(false);
  };

  return (
    <div className="group relative rounded-lg border border-gray-800 bg-black p-4">
      <div className="mb-3 h-24 w-full rounded-md" style={{ backgroundColor: hex }} />

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            placeholder="Color name"
            className="w-full border-gray-800 bg-black text-white focus:border-gray-600"
            aria-label="Color name"
          />
          <Input
            value={hexValue}
            onChange={(e) => setHexValue(e.target.value)}
            placeholder="Hex code"
            pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
            title="Valid hex color code (e.g., #FF0000)"
            className="w-full border-gray-800 bg-black font-mono text-white focus:border-gray-600"
            aria-label="Hex code"
          />
          <div className="flex gap-2">
            <Button type="submit" size="sm" className="bg-white text-black hover:bg-gray-200">
              Save
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-gray-700 text-white hover:bg-gray-900 hover:text-white"
              onClick={() => {
                setColorName(name);
                setHexValue(hex);
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div onClick={() => setIsEditing(true)} className="cursor-pointer">
          <p className="font-medium text-white">{name}</p>
          <p className="font-mono text-sm text-gray-400">{hex}</p>
        </div>
      )}

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 text-gray-400 opacity-0 hover:text-white group-hover:opacity-100"
        onClick={onDelete}
      >
        <Trash2Icon className="h-4 w-4" />
        <span className="sr-only">Delete color</span>
      </Button>
    </div>
  );
}
