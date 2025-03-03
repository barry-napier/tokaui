import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { MobileMenu } from '@/components/mobile-menu';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-[900]">TOKA</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link href="/features" className="transition-colors hover:text-gray-300">
            Features
          </Link>
          <Link href="/how-it-works" className="transition-colors hover:text-gray-300">
            How It Works
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-gray-300">
            Pricing
          </Link>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/auth/login">
            <Button variant="ghost" className="text-white hover:text-gray-300">
              Log In
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="bg-white text-black hover:bg-gray-200">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </header>

      {/* Hero Section */}
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Logo className="mb-8 h-24 w-24" />
        <h1 className="mb-4 text-6xl font-[900] md:text-8xl">TOKA</h1>
        <h2 className="mb-6 text-4xl md:text-5xl">
          <span>Design Systems</span> <span className="font-light">Made Simple</span>
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-gray-300 md:text-xl">
          Bridge the designer-developer gap with one unified tool. Toka simplifies the creation and
          management of design systems for both designers and developers.
        </p>
        <div className="mb-16 flex flex-col gap-4 md:flex-row">
          <Link href="/auth/signup">
            <Button size="lg" className="min-w-[200px] bg-white text-black hover:bg-gray-200">
              Get Started
            </Button>
          </Link>
          <Link href="/demo">
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-white text-white hover:bg-white/10"
            >
              See Demo
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </main>
    </div>
  );
}
