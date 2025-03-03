import { Metadata } from 'next';
import Link from 'next/link';
import { DesignSystemsList } from '@/components/dashboard/design-systems-list';

export const metadata: Metadata = {
  title: 'Design Systems Dashboard | Toka',
  description: 'Manage multiple design systems for your clients and projects',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="mb-3 text-4xl font-bold text-white">Design Systems Dashboard</h1>
            <p className="mb-6 max-w-3xl text-lg text-gray-400">
              Create and manage design systems for all your clients and projects in one central
              location.
            </p>
            <div className="from-blue-500 to-purple-500 h-1 w-24 bg-gradient-to-r"></div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h2 className="mb-6 text-2xl font-bold text-white">Your Design Systems</h2>
            <DesignSystemsList />
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Getting Started</h2>
            <p className="mb-6 text-gray-400">
              New to Toka? Here are some resources to help you get started with creating and
              managing your design systems.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <h3 className="mb-2 text-lg font-medium text-white">
                  Create Your First Design System
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  Learn how to set up a new design system and define your core foundations.
                </p>
                <Link
                  href="/docs/getting-started"
                  className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                >
                  Read the guide →
                </Link>
              </div>

              <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <h3 className="mb-2 text-lg font-medium text-white">Building Components</h3>
                <p className="mb-4 text-sm text-gray-400">
                  Discover how to create, document, and organize your UI components.
                </p>
                <Link
                  href="/docs/components"
                  className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                >
                  Read the guide →
                </Link>
              </div>

              <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <h3 className="mb-2 text-lg font-medium text-white">Team Collaboration</h3>
                <p className="mb-4 text-sm text-gray-400">
                  Learn how to collaborate with your team and manage permissions.
                </p>
                <Link
                  href="/docs/collaboration"
                  className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                >
                  Read the guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
