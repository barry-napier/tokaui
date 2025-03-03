import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, PuzzleIcon, LayoutGrid, FileText, Image } from 'lucide-react';

export const metadata = {
  title: 'Dashboard - Toka UI',
  description: 'Manage your design systems',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Your Design System</h1>
        <p className="text-zinc-600 mt-2">Manage and customize your design system components</p>
      </div>

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

      <div className="mt-12 text-center">
        <p className="text-zinc-600 mb-4">This is a placeholder dashboard for the Toka UI MVP.</p>
        <Button asChild variant="outline">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}

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
