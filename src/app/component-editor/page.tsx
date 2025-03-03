import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Component Editor | Toka',
  description: 'Edit and customize your design system component',
};

export default function ComponentEditorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Component Editor</h1>
        <p>Please select a component from the components page.</p>
      </div>
    </main>
  );
}
