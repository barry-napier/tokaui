import { Metadata } from 'next';
import Link from 'next/link';
import { Palette, Layers, Layout, FileText, Image } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Design System | Toka',
  description: 'Manage your design system',
};

interface SectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function SectionCard({ title, description, icon, href }: SectionCardProps) {
  return (
    <Link
      href={href}
      className="hover:border-blue-500 hover:shadow-blue-500/10 block rounded-lg border border-gray-800 bg-black p-6 transition-all hover:shadow-md"
    >
      <div className="text-blue-500 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}

export default function DesignSystemPage({ params }: { params: { id: string } }) {
  const designSystemId = params.id;
  // In a real app, you would fetch the design system details from an API
  const designSystemName = 'Corporate Brand System';

  const sections = [
    {
      title: 'Foundations',
      description: 'Core design tokens like colors, typography, spacing, and icons',
      icon: <Palette className="h-6 w-6" />,
      href: `/dashboard/${designSystemId}/foundations`,
    },
    {
      title: 'Components',
      description: 'Reusable UI components with variants and documentation',
      icon: <Layers className="h-6 w-6" />,
      href: `/dashboard/${designSystemId}/components`,
    },
    {
      title: 'Patterns & Layouts',
      description: 'Common UI patterns and page layouts',
      icon: <Layout className="h-6 w-6" />,
      href: `/dashboard/${designSystemId}/patterns`,
    },
    {
      title: 'Documentation & Guidelines',
      description: 'Usage guidelines, best practices, and implementation details',
      icon: <FileText className="h-6 w-6" />,
      href: `/dashboard/${designSystemId}/documentation`,
    },
    {
      title: 'Assets',
      description: 'Logos, icons, illustrations, and other design assets',
      icon: <Image className="h-6 w-6" />,
      href: `/dashboard/${designSystemId}/assets`,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold text-white">{designSystemName}</h1>
        <div className="from-blue-500 to-purple-500 mt-1 h-1 w-24 bg-gradient-to-r" />
        <p className="mt-4 text-gray-400">
          Manage all aspects of your design system, from foundations to components and patterns.
        </p>
      </div>

      <section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <SectionCard
              key={section.title}
              title={section.title}
              description={section.description}
              icon={section.icon}
              href={section.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
