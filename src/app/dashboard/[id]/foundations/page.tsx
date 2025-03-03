import { Metadata } from 'next';
import { ColorSwatches } from '@/components/dashboard/color-swatches';
import { IconGrid } from '@/components/dashboard/icon-grid';

export const metadata: Metadata = {
  title: 'Foundations | Toka',
  description: 'Manage the foundational elements of your design system',
};

export default function FoundationsPage({ params }: { params: { id: string } }) {
  const designSystemId = params.id;

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold text-white">Foundations</h1>
        <div className="from-blue-500 to-purple-500 mt-1 h-1 w-24 bg-gradient-to-r" />
        <p className="mt-4 text-gray-400">
          Manage the core building blocks of your design system, including colors, typography,
          spacing, and icons.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Colors</h2>
          <p className="mt-1 text-gray-400">
            The color palette for your design system. Click on any color to copy its value.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-medium text-white">Primary</h3>
            <ColorSwatches
              colors={[
                { name: 'primary', value: '#0070f3', label: 'Primary' },
                { name: 'primary-dark', value: '#0050d0', label: 'Primary Dark' },
                { name: 'primary-light', value: '#3390ff', label: 'Primary Light' },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium text-white">Neutrals</h3>
            <ColorSwatches
              colors={[
                { name: 'black', value: '#000000', label: 'Black' },
                { name: 'gray-900', value: '#111111', label: 'Gray 900' },
                { name: 'gray-800', value: '#222222', label: 'Gray 800' },
                { name: 'gray-700', value: '#333333', label: 'Gray 700' },
                { name: 'gray-600', value: '#444444', label: 'Gray 600' },
                { name: 'gray-500', value: '#666666', label: 'Gray 500' },
                { name: 'gray-400', value: '#888888', label: 'Gray 400' },
                { name: 'gray-300', value: '#aaaaaa', label: 'Gray 300' },
                { name: 'gray-200', value: '#cccccc', label: 'Gray 200' },
                { name: 'gray-100', value: '#eeeeee', label: 'Gray 100' },
                { name: 'white', value: '#ffffff', label: 'White' },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium text-white">Feedback</h3>
            <ColorSwatches
              colors={[
                { name: 'success', value: '#10b981', label: 'Success' },
                { name: 'warning', value: '#f59e0b', label: 'Warning' },
                { name: 'error', value: '#ef4444', label: 'Error' },
                { name: 'info', value: '#3b82f6', label: 'Info' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Typography</h2>
          <p className="mt-1 text-gray-400">
            The type scale and font families used throughout your design system.
          </p>
        </div>

        <div className="space-y-6 rounded-lg border border-gray-800 bg-black p-6">
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Headings</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Display</p>
                <p className="text-5xl font-bold text-white">The quick brown fox</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">H1</p>
                <p className="text-4xl font-bold text-white">The quick brown fox</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">H2</p>
                <p className="text-3xl font-bold text-white">The quick brown fox</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">H3</p>
                <p className="text-2xl font-bold text-white">The quick brown fox</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">H4</p>
                <p className="text-xl font-bold text-white">The quick brown fox</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">H5</p>
                <p className="text-lg font-bold text-white">The quick brown fox</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">H6</p>
                <p className="text-base font-bold text-white">The quick brown fox</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Body</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Large</p>
                <p className="text-lg text-white">The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Base</p>
                <p className="text-base text-white">The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Small</p>
                <p className="text-sm text-white">The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">XS</p>
                <p className="text-xs text-white">The quick brown fox jumps over the lazy dog.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Spacing</h2>
          <p className="mt-1 text-gray-400">
            The spacing scale used for margins, padding, and layout throughout your design system.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((size) => (
            <div key={size} className="space-y-2">
              <div
                className="flex h-12 items-center justify-center rounded-md border border-gray-800 bg-gray-900"
                style={{ width: size === 0 ? 16 : size * 4 }}
              >
                <span className="text-xs text-gray-400">{size}</span>
              </div>
              <p className="text-center text-xs text-gray-400">
                {size === 0 ? '0' : `${size * 0.25}rem`}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Icons</h2>
          <p className="mt-1 text-gray-400">
            The icon set used throughout your design system. Click on any icon to copy its name.
          </p>
        </div>

        <IconGrid
          title="System Icons"
          description="Core icons used throughout the interface"
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
      </section>
    </div>
  );
}
