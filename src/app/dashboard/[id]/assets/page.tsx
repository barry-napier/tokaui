import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IconGrid } from '@/components/dashboard/icon-grid';

export const metadata: Metadata = {
  title: 'Assets | Toka',
  description: 'Manage the assets of your design system',
};

export default function AssetsPage({ params }: { params: { id: string } }) {
  const designSystemId = params.id;

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold text-white">Assets</h1>
        <div className="from-blue-500 to-purple-500 mt-1 h-1 w-24 bg-gradient-to-r" />
        <p className="mt-4 text-gray-400">
          Manage the visual assets used in your design system, including icons, illustrations, and
          images.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Asset Library</h2>
            <p className="mt-1 text-gray-400">
              All assets in your design system, organized by type.
            </p>
          </div>
          <Link
            href={`/dashboard/${designSystemId}/assets/upload`}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Upload Asset
          </Link>
        </div>

        <Tabs defaultValue="icons" className="space-y-6">
          <TabsList className="bg-gray-900">
            <TabsTrigger value="icons">Icons</TabsTrigger>
            <TabsTrigger value="illustrations">Illustrations</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          <TabsContent value="icons" className="space-y-6">
            <IconGrid
              title="Icon Library"
              description="Common icons used throughout your design system. Click on any icon to copy its name."
              icons={[
                {
                  name: 'Home',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Home',
                },
                {
                  name: 'Settings',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Settings',
                },
                {
                  name: 'User',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'User',
                },
                {
                  name: 'Search',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Search',
                },
                {
                  name: 'Notification',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Notification',
                },
                {
                  name: 'Calendar',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Calendar',
                },
                {
                  name: 'Mail',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Mail',
                },
                {
                  name: 'Chat',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Chat',
                },
                {
                  name: 'Heart',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Heart',
                },
                {
                  name: 'Star',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Star',
                },
                {
                  name: 'Plus',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Plus',
                },
                {
                  name: 'Minus',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Minus',
                },
                {
                  name: 'Check',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'Check',
                },
                {
                  name: 'X',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'X',
                },
                {
                  name: 'ArrowRight',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'ArrowRight',
                },
                {
                  name: 'ArrowLeft',
                  component: <div className="h-6 w-6 rounded-md bg-gray-700" />,
                  reference: 'ArrowLeft',
                },
              ]}
            />
          </TabsContent>

          <TabsContent value="illustrations" className="space-y-6">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-md border border-gray-800 bg-gray-900"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-sm text-gray-400">Illustration {i}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-800"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos" className="space-y-6">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="group relative aspect-video overflow-hidden rounded-md border border-gray-800 bg-gray-900"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-sm text-gray-400">Photo {i}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-800"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Asset Guidelines</h2>
          <p className="mt-1 text-gray-400">
            Best practices for creating and using assets in your design system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h3 className="mb-3 text-lg font-medium text-white">File Formats</h3>
            <p className="text-gray-400">
              Use SVG for icons and illustrations when possible. For photos, use WebP or optimized
              JPG/PNG formats.
            </p>
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h3 className="mb-3 text-lg font-medium text-white">Naming Conventions</h3>
            <p className="text-gray-400">
              Use kebab-case for all asset filenames (e.g., user-avatar.svg, hero-background.jpg).
            </p>
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h3 className="mb-3 text-lg font-medium text-white">Optimization</h3>
            <p className="text-gray-400">
              Optimize all assets for web use. Compress images, minify SVGs, and use appropriate
              dimensions.
            </p>
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h3 className="mb-3 text-lg font-medium text-white">Accessibility</h3>
            <p className="text-gray-400">
              Ensure all assets have appropriate alt text and are accessible to all users, including
              those with disabilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
