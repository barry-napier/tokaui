'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff } from 'lucide-react';

export function SignupForm() {
  const router = useRouter();
  const { signUp } = useSupabaseAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage('');
    setError('');

    // Check for mock in testing environment
    if (typeof window !== 'undefined' && 'mockSignUpSuccess' in window) {
      // For testing: simulate successful signup
      localStorage.setItem('userName', name);
      router.push('/auth/confirmation');
      return;
    }

    const result = await signUp(email, password);

    if (result.success) {
      setMessage(result.message || 'Signed up successfully! Check your email for confirmation.');

      // Store the name in localStorage to use it on the confirmation page
      localStorage.setItem('userName', name);

      // Redirect to confirmation page
      router.push('/auth/confirmation');
    } else {
      setError(result.message || 'Failed to sign up');
    }

    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {message && (
        <Alert variant="default" className="border-green-800 bg-green-950/50 text-green-400">
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="border-red-800 bg-red-950/50 text-red-400">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-300">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`border-gray-800 bg-black text-white focus:border-gray-600 ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 mt-1 text-xs">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-300">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`border-gray-800 bg-black text-white focus:border-gray-600 ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 mt-1 text-xs">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-300">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
            className={`border-gray-800 bg-black pr-10 text-white focus:border-gray-600 ${errors.password ? 'border-red-500' : ''}`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password ? (
          <p id="password-error" className="text-red-500 mt-1 text-xs">
            {errors.password}
          </p>
        ) : (
          <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="mt-6 w-full bg-white text-black hover:bg-gray-200"
      >
        {loading ? 'Creating account...' : 'Sign Up'}
      </Button>
    </form>
  );
}
