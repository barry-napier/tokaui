import { DesignSystemsList } from '@/components/dashboard/design-systems-list';
import { DashboardSections } from '@/components/dashboard/dashboard-sections';

export const metadata = {
  title: 'Dashboard - Toka UI',
  description: 'Manage your design systems',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-zinc-600 mt-2">Manage your design systems and their components</p>
      </div>

      <div className="space-y-12">
        <DesignSystemsList />
        <DashboardSections />
      </div>
    </div>
  );
}
