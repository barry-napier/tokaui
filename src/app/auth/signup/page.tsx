import Link from 'next/link';
import { SignupForm } from '@/components/auth/signup-form';
import { BenefitsPanel } from '@/components/auth/benefits-panel';

export const metadata = {
  title: 'Sign Up - Toka UI',
  description: 'Create your account to get started with Toka UI',
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Benefits Panel (Left Side) */}
      <div className="hidden bg-black text-white md:flex md:w-1/2">
        <BenefitsPanel />
      </div>

      {/* Sign Up Form (Right Side) */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 md:w-1/2 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-zinc-600 mt-2">Join Toka UI to start building your design system</p>
          </div>

          <SignupForm />

          <div className="mt-8 text-center text-sm">
            <p className="text-zinc-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="font-medium text-black hover:underline">
                Log in
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/" className="text-zinc-600 text-sm hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
