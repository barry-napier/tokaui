'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Palette, Type, Check } from 'lucide-react';

// Step types
type Step = 'basics' | 'styles' | 'confirmation';

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('basics');
  const [designSystemName, setDesignSystemName] = useState('');
  const [description, setDescription] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [primaryFont, setPrimaryFont] = useState('Inter');
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState('');

  // Step indicators
  const steps = [
    { id: 'basics', label: 'Basics', icon: <Palette className="h-5 w-5" /> },
    { id: 'styles', label: 'Styles', icon: <Type className="h-5 w-5" /> },
    { id: 'confirmation', label: 'Confirm', icon: <Check className="h-5 w-5" /> },
  ];

  const validateBasics = () => {
    if (!designSystemName.trim()) {
      setNameError('Design system name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleNext = () => {
    if (currentStep === 'basics') {
      if (!validateBasics()) return;
      setCurrentStep('styles');
    } else if (currentStep === 'styles') {
      setCurrentStep('confirmation');
    }
  };

  const handleBack = () => {
    if (currentStep === 'styles') {
      setCurrentStep('basics');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('styles');
    }
  };

  const handleCreateDesignSystem = async () => {
    setLoading(true);

    try {
      // Here we would normally save the design system to Supabase
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Error creating design system:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSkipTour = () => {
    router.push('/dashboard');
  };

  return (
    <div className="bg-zinc-50 flex min-h-screen items-center justify-center px-4 py-12">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="border-b pb-6">
          <div className="mb-4 flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Create Your Design System</CardTitle>
            <div className="text-zinc-500 text-sm">
              Step {currentStep === 'basics' ? '1' : currentStep === 'styles' ? '2' : '3'} of 3
            </div>
          </div>

          <div className="flex justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center space-y-1 ${
                  currentStep === step.id ? 'text-black' : 'text-zinc-400'
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    currentStep === step.id ? 'bg-black text-white' : 'bg-zinc-100'
                  }`}
                >
                  {step.icon}
                </div>
                <span className="text-xs font-medium">{step.label}</span>
              </div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {currentStep === 'basics' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="designSystemName">
                  Design System Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="designSystemName"
                  placeholder="Project Alpha Design System"
                  value={designSystemName}
                  onChange={(e) => setDesignSystemName(e.target.value)}
                  className={nameError ? 'border-red-500' : ''}
                  aria-invalid={!!nameError}
                  aria-describedby={nameError ? 'name-error' : undefined}
                />
                {nameError && (
                  <p id="name-error" className="text-red-500 mt-1 text-xs">
                    {nameError}
                  </p>
                )}
                <p className="text-zinc-500 text-xs">
                  Name your design system (e.g., &apos;Project Alpha Design System&apos;)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="A brief description of your design system..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          )}

          {currentStep === 'styles' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="flex space-x-3">
                  <div
                    className="h-10 w-10 rounded border"
                    style={{ backgroundColor: primaryColor }}
                    aria-hidden="true"
                  />
                  <Input
                    id="primaryColor"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-full"
                  />
                </div>
                <p className="text-zinc-500 text-xs">
                  Select your primary color to set the base style
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryFont">Primary Font</Label>
                <Select value={primaryFont} onValueChange={setPrimaryFont}>
                  <SelectTrigger id="primaryFont">
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Helvetica">Helvetica</SelectItem>
                    <SelectItem value="Arial">Arial</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-zinc-500 text-xs">Choose your primary font for text elements</p>
              </div>

              <div className="bg-zinc-50 mt-6 rounded-md border p-4">
                <h3 className="mb-2 font-medium">Live Preview</h3>
                <div className="rounded border bg-white p-4" style={{ fontFamily: primaryFont }}>
                  <div className="h-6 w-24 rounded" style={{ backgroundColor: primaryColor }}></div>
                  <p className="mt-2" style={{ color: primaryColor }}>
                    Sample text in {primaryFont}
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'confirmation' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Design System Summary</h3>

              <div className="bg-zinc-50 space-y-4 rounded-md border p-4">
                <div>
                  <span className="font-medium">Name:</span> {designSystemName}
                </div>

                {description && (
                  <div>
                    <span className="font-medium">Description:</span> {description}
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <span className="font-medium">Primary Color:</span>
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: primaryColor }}
                    aria-hidden="true"
                  />
                  <span>{primaryColor}</span>
                </div>

                <div>
                  <span className="font-medium">Primary Font:</span> {primaryFont}
                </div>
              </div>

              <p className="text-zinc-600">
                Your design system is ready to be created. You can always modify these settings
                later.
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          {currentStep !== 'basics' ? (
            <Button variant="outline" onClick={handleBack} disabled={loading}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          ) : (
            <Button variant="outline" onClick={handleSkipTour} disabled={loading}>
              Skip Tour
            </Button>
          )}

          {currentStep !== 'confirmation' ? (
            <Button onClick={handleNext}>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleCreateDesignSystem} disabled={loading}>
              {loading ? 'Creating...' : 'Create Design System'}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
