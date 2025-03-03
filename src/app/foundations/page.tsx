import { Metadata } from 'next';
import { ColorSwatches } from '@/components/dashboard/color-swatches';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Foundations | Toka',
  description: 'Manage core design tokens like colors, typography, and spacing',
};

export default function FoundationsPage() {
  // Sample color palettes
  const primaryColors = [
    { name: 'Primary 50', hex: '#f0f9ff', description: 'Lightest shade' },
    { name: 'Primary 100', hex: '#e0f2fe' },
    { name: 'Primary 200', hex: '#bae6fd' },
    { name: 'Primary 300', hex: '#7dd3fc' },
    { name: 'Primary 400', hex: '#38bdf8' },
    { name: 'Primary 500', hex: '#0ea5e9', description: 'Base color' },
    { name: 'Primary 600', hex: '#0284c7' },
    { name: 'Primary 700', hex: '#0369a1' },
    { name: 'Primary 800', hex: '#075985' },
    { name: 'Primary 900', hex: '#0c4a6e', description: 'Darkest shade' },
  ];

  const neutralColors = [
    { name: 'Gray 50', hex: '#f9fafb' },
    { name: 'Gray 100', hex: '#f3f4f6' },
    { name: 'Gray 200', hex: '#e5e7eb' },
    { name: 'Gray 300', hex: '#d1d5db' },
    { name: 'Gray 400', hex: '#9ca3af' },
    { name: 'Gray 500', hex: '#6b7280', description: 'Base gray' },
    { name: 'Gray 600', hex: '#4b5563' },
    { name: 'Gray 700', hex: '#374151' },
    { name: 'Gray 800', hex: '#1f2937' },
    { name: 'Gray 900', hex: '#111827' },
  ];

  const accentColors = [
    { name: 'Success', hex: '#10b981', description: 'For success states' },
    { name: 'Warning', hex: '#f59e0b', description: 'For warning states' },
    { name: 'Error', hex: '#ef4444', description: 'For error states' },
    { name: 'Info', hex: '#3b82f6', description: 'For informational states' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative border-b border-gray-800 bg-black pb-8 pt-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-white">Foundations</h1>
          <p className="mb-6 max-w-3xl text-lg text-gray-400">
            Manage core tokens like colors, typography, and spacing that form the building blocks of
            your design system.
          </p>
          <div className="from-blue-500 to-purple-500 h-1 w-24 bg-gradient-to-r"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Tabs defaultValue="colors" className="space-y-8">
          <TabsList className="bg-gray-900">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-12">
            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Color Palette</h2>
              <p className="mb-8 text-gray-400">
                Colors are a fundamental aspect of your design system. They convey brand identity,
                establish hierarchy, and enhance usability. Click on any color or hex code to copy
                it to your clipboard.
              </p>

              <div className="space-y-12">
                <ColorSwatches
                  title="Primary Colors"
                  description="The primary color palette represents your brand's main identity."
                  colors={primaryColors}
                />

                <ColorSwatches
                  title="Neutral Colors"
                  description="Neutral colors provide balance and are used for text, backgrounds, and UI elements."
                  colors={neutralColors}
                />

                <ColorSwatches
                  title="Accent Colors"
                  description="Accent colors are used to highlight important elements and convey status."
                  colors={accentColors}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-8">
            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Typography</h2>
              <p className="mb-8 text-gray-400">
                Typography establishes hierarchy, improves readability, and reinforces your brand
                voice. Define font families, sizes, weights, and line heights for consistent text
                styling.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Font Family</h3>
                  <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                    <p className="mb-2 font-medium text-white">Geist</p>
                    <p className="text-sm text-gray-400">
                      A modern, clean sans-serif typeface designed for excellent readability across
                      all screen sizes.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Type Scale</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-5xl font-bold text-white">Display</p>
                      <p className="text-sm text-gray-400">48px / Bold / 1.1 line height</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-4xl font-bold text-white">Heading 1</p>
                      <p className="text-sm text-gray-400">36px / Bold / 1.2 line height</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl font-semibold text-white">Heading 2</p>
                      <p className="text-sm text-gray-400">30px / Semibold / 1.2 line height</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-semibold text-white">Heading 3</p>
                      <p className="text-sm text-gray-400">24px / Semibold / 1.3 line height</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl font-medium text-white">Heading 4</p>
                      <p className="text-sm text-gray-400">20px / Medium / 1.4 line height</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-base text-white">Body</p>
                      <p className="text-sm text-gray-400">16px / Regular / 1.5 line height</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-white">Small</p>
                      <p className="text-sm text-gray-400">14px / Regular / 1.5 line height</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-white">Caption</p>
                      <p className="text-sm text-gray-400">12px / Regular / 1.5 line height</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-8">
            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Spacing</h2>
              <p className="mb-8 text-gray-400">
                Consistent spacing creates rhythm and hierarchy in your layouts. Use this spacing
                scale for margins, padding, and positioning elements.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Spacing Scale</h3>
                  <div className="space-y-6">
                    {[
                      { name: '4xs', value: '0.125rem (2px)' },
                      { name: '3xs', value: '0.25rem (4px)' },
                      { name: '2xs', value: '0.5rem (8px)' },
                      { name: 'xs', value: '0.75rem (12px)' },
                      { name: 'sm', value: '1rem (16px)' },
                      { name: 'md', value: '1.5rem (24px)' },
                      { name: 'lg', value: '2rem (32px)' },
                      { name: 'xl', value: '2.5rem (40px)' },
                      { name: '2xl', value: '3rem (48px)' },
                      { name: '3xl', value: '4rem (64px)' },
                      { name: '4xl', value: '6rem (96px)' },
                    ].map((spacing, index) => (
                      <div key={spacing.name} className="flex items-center space-x-4">
                        <div
                          className="h-8 rounded border border-gray-800 bg-gray-900"
                          style={{ width: `${Math.min(100, (index + 1) * 8)}%` }}
                        />
                        <div>
                          <p className="font-medium text-white">{spacing.name}</p>
                          <p className="text-sm text-gray-400">{spacing.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
