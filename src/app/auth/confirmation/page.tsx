'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function ConfirmationPage() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get the user's name from localStorage if available
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
      // Clear the name from localStorage after retrieving it
      localStorage.removeItem('userName');
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-12">
      <Card className="w-full max-w-md border border-gray-800 bg-black text-white">
        <CardHeader className="pb-6 text-center">
          <div className="bg-green-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
            <CheckCircle className="text-green-500 h-6 w-6" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Your account has been successfully created!
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center text-gray-400">
          {userName ? (
            <p>
              Thank you for joining us, {userName}! Please check your email to verify your account.
            </p>
          ) : (
            <p>Thank you for joining us! Please check your email to verify your account.</p>
          )}
        </CardContent>

        <CardFooter className="flex flex-col space-y-3">
          <Button asChild className="w-full bg-white text-black hover:bg-gray-200">
            <Link href="/auth/onboarding">Continue to Onboarding</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full border-gray-700 text-white hover:bg-gray-900 hover:text-white"
          >
            <Link href="/auth/login">Log In</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
