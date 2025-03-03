import Link from 'next/link';
import { LoginForm } from '@/components/auth/login-form';

export const metadata = {
  title: 'Log In - Toka UI',
  description: 'Log in to your Toka UI account',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-black">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome back</h1>
          <p className="mt-2 text-gray-400">Log in to continue to your design system</p>
        </div>

        <div className="rounded-lg border border-gray-800 bg-black p-8">
          <LoginForm />

          <div className="mt-8 text-center text-sm">
            <p className="text-gray-400">
              Don&apos;t have an account?{' '}
              <Link href="/auth/signup" className="font-medium text-white hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-300">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
