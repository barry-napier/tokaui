'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Session } from '@supabase/supabase-js';
import { TodoList } from '@/components/todos/TodoList';

export default function SupabaseDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if user was redirected after email confirmation
    const confirmed = searchParams.get('confirmed');
    if (confirmed === 'true') {
      setMessage('Email confirmed! You can now sign in.');
    }

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [searchParams]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Check your email for the confirmation link!');
      }
    } catch (error) {
      setMessage('An unexpected error occurred');
      console.error('Sign up error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Signed in successfully!');
      }
    } catch (error) {
      setMessage('An unexpected error occurred');
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);

    try {
      await supabase.auth.signOut();
      setMessage('Signed out successfully!');
    } catch (error) {
      setMessage('An unexpected error occurred');
      console.error('Sign out error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold">Supabase Integration Demo</h1>
          <p className="text-zinc-500 mt-2">
            Demonstrating authentication and database operations with Supabase
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Auth Section */}
          <div className="border-zinc-200 rounded-lg border p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Authentication</h2>

            {message && <div className="bg-zinc-100 mb-6 rounded-md p-4">{message}</div>}

            {session ? (
              <div>
                <p className="mb-4">Logged in as: {session.user.email}</p>
                <Button onClick={handleSignOut}>Sign Out</Button>
              </div>
            ) : (
              <div className="space-y-8">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <h2 className="text-xl font-semibold">Sign Up</h2>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button type="submit" disabled={loading}>
                    Sign Up
                  </Button>
                </form>

                <form onSubmit={handleSignIn} className="space-y-4">
                  <h2 className="text-xl font-semibold">Sign In</h2>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button type="submit" disabled={loading}>
                    Sign In
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Todo List Section */}
          <div className="border-zinc-200 rounded-lg border p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Todo List</h2>
            <TodoList />
          </div>
        </div>

        <div className="border-zinc-200 bg-zinc-50 mt-12 rounded-lg border p-6">
          <h2 className="mb-2 text-xl font-semibold">Setup Instructions</h2>
          <p className="mb-4">To use this demo, you need to:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Create a Supabase project at{' '}
              <a
                href="https://supabase.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                supabase.com
              </a>
            </li>
            <li>
              Create a <code className="bg-zinc-200 rounded px-1">todos</code> table with the
              following schema:
              <pre className="bg-zinc-800 text-zinc-100 mt-2 overflow-x-auto rounded p-3 text-sm">
                {`CREATE TABLE todos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Set up Row Level Security
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- Create policy for users to only see their own todos
CREATE POLICY "Users can only see their own todos" 
  ON todos FOR SELECT USING (auth.uid() = user_id);

-- Create policy for users to insert their own todos
CREATE POLICY "Users can insert their own todos" 
  ON todos FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy for users to update their own todos
CREATE POLICY "Users can update their own todos" 
  ON todos FOR UPDATE USING (auth.uid() = user_id);

-- Create policy for users to delete their own todos
CREATE POLICY "Users can delete their own todos" 
  ON todos FOR DELETE USING (auth.uid() = user_id);`}
              </pre>
            </li>
            <li>
              Add your Supabase URL and anon key to{' '}
              <code className="bg-zinc-200 rounded px-1">.env.local</code> file
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
