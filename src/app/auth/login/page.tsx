import Link from 'next/link';
import { LoginForm } from '@/components/auth/login-form';

export const metadata = {
  title: 'Log In - Toka UI',
  description: 'Log in to your Toka UI account',
};

export default function LoginPage() {
  return (
    <div className="bg-zinc-50 flex min-h-screen">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-zinc-600 mt-2">Log in to continue to your design system</p>
        </div>

        <div className="rounded-lg border bg-white p-8 shadow-sm">
          <LoginForm />

          <div className="mt-8 text-center text-sm">
            <p className="text-zinc-600">
              Don&apos;t have an account?{' '}
              <Link href="/auth/signup" className="font-medium text-black hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-zinc-600 text-sm hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
