'use client';

import { useState } from 'react';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function SignupForm() {
  const { signUp } = useSupabaseAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const result = await signUp(email, password);

    if (result.success) {
      setMessage(result.message || 'Signed up successfully! Check your email for confirmation.');
      // Clear form on success
      setEmail('');
      setPassword('');
    } else {
      setError(result.message || 'Failed to sign up');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div className="bg-green-50 text-green-800 rounded-md p-3 text-sm">{message}</div>
      )}

      {error && <div className="bg-red-50 text-red-800 rounded-md p-3 text-sm">{error}</div>}

      <div>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <div>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
          minLength={6}
        />
        <p className="text-zinc-500 mt-1 text-xs">Password must be at least 6 characters</p>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Signing up...' : 'Sign Up'}
      </Button>
    </form>
  );
}
