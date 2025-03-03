'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ChevronLeft } from 'lucide-react';

interface ComponentEditorProps {
  componentId: string;
}

interface ComponentData {
  id: string;
  name: string;
  type: 'button' | 'card' | 'input' | 'custom';
  properties: {
    label?: string;
    color?: string;
    size?: number;
    // Add more properties as needed
  };
}

const mockComponent: ComponentData = {
  id: '1',
  name: 'Primary Button',
  type: 'button',
  properties: {
    label: 'Click me',
    color: '#0066FF',
    size: 16,
  },
};

export function ComponentEditor({ componentId }: ComponentEditorProps) {
  const router = useRouter();
  const [component, setComponent] = useState<ComponentData>(mockComponent);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // In a real app, this would fetch the component data from an API
    setComponent(mockComponent);
  }, [componentId]);

  const handlePropertyChange = (property: string, value: string | number) => {
    setComponent((prev) => ({
      ...prev,
      properties: {
        ...prev.properties,
        [property]: value,
      },
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      console.log('Saving component:', component);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Error saving component:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderPreview = () => {
    switch (component.type) {
      case 'button':
        return (
          <button
            className="rounded-md px-4 py-2 text-white transition-all hover:opacity-90"
            style={{
              backgroundColor: component.properties.color,
              fontSize: `${component.properties.size}px`,
            }}
          >
            {component.properties.label}
          </button>
        );
      // Add cases for other component types
      default:
        return <div>Preview not available</div>;
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Button variant="ghost" className="mb-2" onClick={() => router.push('/components')}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">{component.name}</h1>
        </div>
        <Button onClick={handleSave} disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Live Preview */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-white p-8">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Live Preview</h2>
              <p className="text-sm text-gray-500">
                See how your component looks with the current settings.
              </p>
            </div>
            <div className="flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50">
              {renderPreview()}
            </div>
          </div>
        </div>

        {/* Properties Sidebar */}
        <div className="space-y-6 rounded-lg border bg-white p-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Properties</h2>
            <p className="text-sm text-gray-500">Customize your component&apos;s appearance.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="label">Label</Label>
              <Input
                id="label"
                value={component.properties.label}
                onChange={(e) => handlePropertyChange('label', e.target.value)}
                placeholder="Button text"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <div className="flex gap-2">
                <Input
                  id="color"
                  type="color"
                  value={component.properties.color}
                  onChange={(e) => handlePropertyChange('color', e.target.value)}
                  className="h-10 w-20"
                />
                <Input
                  value={component.properties.color}
                  onChange={(e) => handlePropertyChange('color', e.target.value)}
                  placeholder="#000000"
                  className="font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="size"
                  min={12}
                  max={32}
                  step={1}
                  value={[component.properties.size || 16]}
                  onValueChange={([value]) => handlePropertyChange('size', value)}
                  className="flex-1"
                />
                <span className="w-12 text-right font-mono">{component.properties.size}px</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
