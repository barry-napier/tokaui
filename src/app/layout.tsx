import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Toka - Design Systems Made Simple',
  description:
    'Bridge the designer-developer gap with one unified tool. Toka simplifies the creation and management of design systems for both designers and developers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  );
}
