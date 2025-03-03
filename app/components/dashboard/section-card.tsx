import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
}

export function SectionCard({ title, icon: Icon, href }: SectionCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-sm"
    >
      <Icon className="mb-3 h-8 w-8 text-gray-700 group-hover:text-gray-900" />
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    </Link>
  );
}
