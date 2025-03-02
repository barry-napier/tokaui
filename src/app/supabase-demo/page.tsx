'use client';

import { useState } from 'react';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
import { TodoList } from '@/components/todos/TodoList';
import { Button } from '@/components/ui/button';

export default function SupabaseDemo() {
  const { user, loading, signOut } = useSupabaseAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

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

            {loading ? (
              <div className="p-8 text-center">
                <p>Loading...</p>
              </div>
            ) : user ? (
              <div className="space-y-4">
                <div className="bg-zinc-50 rounded-md p-4">
                  <p className="font-medium">Logged in as:</p>
                  <p className="mt-1 break-all text-sm">{user.email}</p>
                  <p className="text-zinc-500 mt-2 text-xs">User ID: {user.id}</p>
                </div>

                <Button onClick={() => signOut()} variant="outline" className="w-full">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-zinc-200 flex border-b">
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'login'
                        ? 'border-zinc-900 text-zinc-900 border-b-2'
                        : 'text-zinc-500'
                    }`}
                    onClick={() => setActiveTab('login')}
                  >
                    Login
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'signup'
                        ? 'border-zinc-900 text-zinc-900 border-b-2'
                        : 'text-zinc-500'
                    }`}
                    onClick={() => setActiveTab('signup')}
                  >
                    Sign Up
                  </button>
                </div>

                {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
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
