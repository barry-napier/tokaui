import { ReactNode } from 'react';
import Link from 'next/link';
import { Home, Palette, Layers, Layout, FileText, Image, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/logo';

interface DesignSystemLayoutProps {
  children: ReactNode;
  params: {
    id: string;
  };
}

export default function DesignSystemLayout({ children, params }: DesignSystemLayoutProps) {
  const designSystemId = params.id;

  const navItems = [
    {
      title: 'Overview',
      href: `/dashboard/${designSystemId}`,
      icon: <Home className="h-4 w-4" />,
    },
    {
      title: 'Foundations',
      href: `/dashboard/${designSystemId}/foundations`,
      icon: <Palette className="h-4 w-4" />,
    },
    {
      title: 'Components',
      href: `/dashboard/${designSystemId}/components`,
      icon: <Layers className="h-4 w-4" />,
    },
    {
      title: 'Patterns & Layouts',
      href: `/dashboard/${designSystemId}/patterns`,
      icon: <Layout className="h-4 w-4" />,
    },
    {
      title: 'Documentation & Guidelines',
      href: `/dashboard/${designSystemId}/documentation`,
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: 'Assets',
      href: `/dashboard/${designSystemId}/assets`,
      icon: <Image className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 bg-black">
        <div className="flex h-16 items-center border-b border-gray-800 px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <span className="font-medium text-white">Toka UI</span>
          </Link>
          <ChevronRight className="mx-1 h-4 w-4 text-gray-600" />
          <span className="truncate text-sm text-gray-400">Design System</span>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-400 transition-colors hover:bg-gray-900 hover:text-white"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-7xl px-6 py-8">{children}</div>
      </div>
    </div>
  );
}
