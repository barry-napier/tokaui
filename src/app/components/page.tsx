import { Metadata } from 'next';
import { SimpleComponentsList } from '@/components/components/simple-components-list';

export const metadata: Metadata = {
  title: 'Components | Toka',
  description: 'Manage and customize your design system components',
};

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SimpleComponentsList />
      </div>
    </main>
  );
}
