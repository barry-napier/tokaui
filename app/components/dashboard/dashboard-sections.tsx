import { PaletteIcon, PuzzleIcon, LayoutGridIcon, FileTextIcon, ImageIcon } from 'lucide-react';
import { SectionCard } from './section-card';

export function DashboardSections() {
  const sections = [
    {
      title: 'Foundations',
      icon: PaletteIcon,
      href: '/foundations',
    },
    {
      title: 'Components',
      icon: PuzzleIcon,
      href: '/components',
    },
    {
      title: 'Patterns & Layouts',
      icon: LayoutGridIcon,
      href: '/patterns',
    },
    {
      title: 'Documentation & Guidelines',
      icon: FileTextIcon,
      href: '/documentation',
    },
    {
      title: 'Assets',
      icon: ImageIcon,
      href: '/assets',
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <SectionCard
            key={section.title}
            title={section.title}
            icon={section.icon}
            href={section.href}
          />
        ))}
      </div>
    </div>
  );
}
