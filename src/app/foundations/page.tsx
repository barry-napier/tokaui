import { Metadata } from 'next';
import { FoundationsEditor } from '@/components/foundations/foundations-editor';

export const metadata: Metadata = {
  title: 'Foundations | Toka',
  description: 'Manage your design system foundations including colors, typography, and spacing.',
};

export default function FoundationsPage() {
  return (
    <main className="min-h-screen bg-black py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Foundations</h1>
          <p className="mt-2 text-gray-400">
            Manage your design system&apos;s foundational elements including colors, typography, and
            spacing.
          </p>
        </div>

        <FoundationsEditor />
      </div>
    </main>
  );
}
