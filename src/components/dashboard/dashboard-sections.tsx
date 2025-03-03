import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, PuzzleIcon, LayoutGrid, FileText, Image } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function DashboardCard({ title, description, icon, href }: DashboardCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-zinc-100 rounded-md p-2">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="w-full">
          <Link href={href}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function DashboardSections() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Design System Sections</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Foundations"
          description="Colors, typography, spacing, and other design tokens"
          icon={<Palette className="h-6 w-6" />}
          href="/dashboard/foundations"
        />

        <DashboardCard
          title="Components"
          description="Buttons, inputs, cards, and other UI components"
          icon={<PuzzleIcon className="h-6 w-6" />}
          href="/dashboard/components"
        />

        <DashboardCard
          title="Patterns & Layouts"
          description="Common UI patterns and layout structures"
          icon={<LayoutGrid className="h-6 w-6" />}
          href="/dashboard/patterns"
        />

        <DashboardCard
          title="Documentation & Guidelines"
          description="Usage guidelines and documentation"
          icon={<FileText className="h-6 w-6" />}
          href="/dashboard/docs"
        />

        <DashboardCard
          title="Assets"
          description="Logos, icons, and other design assets"
          icon={<Image className="h-6 w-6" />}
          href="/dashboard/assets"
        />
      </div>
    </div>
  );
}
