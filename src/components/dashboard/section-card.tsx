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
      className="group flex flex-col items-center justify-center rounded-lg border border-white/10 bg-black p-6 transition-all hover:border-white/20 hover:bg-white/5"
    >
      <Icon className="mb-4 h-8 w-8 text-white/70 transition-colors group-hover:text-white" />
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </Link>
  );
}
