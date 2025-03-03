import { DashboardSections } from '@/components/dashboard/dashboard-sections';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Project Alpha Design System</h1>
        <DashboardSections />
      </div>
    </main>
  );
}
