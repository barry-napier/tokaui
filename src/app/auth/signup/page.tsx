import Link from 'next/link';
import { SignupForm } from '@/components/auth/signup-form';
import { BenefitsPanel } from '@/components/auth/benefits-panel';

export const metadata = {
  title: 'Sign Up - Toka UI',
  description: 'Create your account to get started with Toka UI',
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Benefits Panel (Left Side) */}
      <div className="hidden bg-black text-white md:flex md:w-1/2">
        <BenefitsPanel />
      </div>

      {/* Sign Up Form (Right Side) */}
      <div className="flex w-full flex-col justify-center border-l border-gray-800 px-4 py-12 sm:px-6 md:w-1/2 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white">Create your account</h1>
            <p className="mt-2 text-gray-400">Join Toka UI to start building your design system</p>
          </div>

          <SignupForm />

          <div className="mt-8 text-center text-sm">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/auth/login" className="font-medium text-white hover:underline">
                Log in
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-300">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
