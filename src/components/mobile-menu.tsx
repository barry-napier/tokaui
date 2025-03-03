'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button className="p-2" aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={toggleMenu}>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full border-t border-gray-800 bg-black p-6"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/features"
                className="text-lg transition-colors hover:text-gray-300"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="/how-it-works"
                className="text-lg transition-colors hover:text-gray-300"
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-lg transition-colors hover:text-gray-300"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/auth/login" onClick={toggleMenu}>
                  <Button variant="ghost" className="w-full text-white hover:text-gray-300">
                    Log In
                  </Button>
                </Link>
                <Link href="/auth/signup" onClick={toggleMenu}>
                  <Button className="w-full bg-white text-black hover:bg-gray-200">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
