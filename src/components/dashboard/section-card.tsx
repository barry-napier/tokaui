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
      className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black p-6 transition-all hover:border-gray-700 hover:bg-gray-900"
    >
      <Icon className="mb-3 h-8 w-8 text-gray-300 group-hover:text-white" />
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </Link>
  );
}
