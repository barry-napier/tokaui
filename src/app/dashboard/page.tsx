import { Palette, Puzzle, LayoutGrid, FileText, Image } from 'lucide-react';
import { SectionCard } from '@/components/dashboard/section-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Toka',
  description: 'Manage your design system components and settings',
};

export default function DashboardPage() {
  const sections = [
    {
      title: 'Foundations',
      icon: Palette,
      href: '/dashboard/foundations',
    },
    {
      title: 'Components',
      icon: Puzzle,
      href: '/dashboard/components',
    },
    {
      title: 'Patterns & Layouts',
      icon: LayoutGrid,
      href: '/dashboard/patterns',
    },
    {
      title: 'Documentation & Guidelines',
      icon: FileText,
      href: '/dashboard/documentation',
    },
    {
      title: 'Assets',
      icon: Image,
      href: '/dashboard/assets',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <SectionCard
            key={section.title}
            title={section.title}
            icon={section.icon}
            href={section.href}
          />
        ))}
      </div>
    </main>
  );
}
