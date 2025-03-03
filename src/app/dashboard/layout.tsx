import { ReactNode } from 'react';
import Link from 'next/link';
import { Search, User, Settings, LogOut } from 'lucide-react';
import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-semibold text-white">Toka UI</span>
            </Link>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center md:px-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search Toka UI"
                className="focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border border-gray-800 bg-gray-900 py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <kbd className="rounded border border-gray-700 bg-gray-800 px-1.5 py-0.5 text-xs text-gray-400">
                  ⌘ K
                </kbd>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-gray-900 p-2 text-gray-400 hover:text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full bg-gray-900 p-1 text-gray-400 hover:text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
                    N
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-900 text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2 focus:bg-gray-800">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2 focus:bg-gray-800">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="text-red-400 flex cursor-pointer items-center gap-2 focus:bg-gray-800">
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
