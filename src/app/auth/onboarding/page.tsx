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
      // In a real app, you would save the design system to your backend here
      // For now, we'll just simulate a delay and redirect to the dashboard
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
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-12">
      <Card className="w-full max-w-2xl border border-gray-800 bg-black text-white">
        <CardHeader className="border-b border-gray-800 pb-6">
          <div className="mb-4 flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-white">
              Create Your Design System
            </CardTitle>
            <div className="text-sm text-gray-400">
              Step {currentStep === 'basics' ? '1' : currentStep === 'styles' ? '2' : '3'} of 3
            </div>
          </div>

          <div className="flex justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center space-y-1 ${
                  currentStep === step.id ? 'text-white' : 'text-gray-500'
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    currentStep === step.id ? 'bg-white text-black' : 'bg-gray-900'
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
                <Label htmlFor="designSystemName" className="text-gray-300">
                  Design System Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="designSystemName"
                  placeholder="Project Alpha Design System"
                  value={designSystemName}
                  onChange={(e) => setDesignSystemName(e.target.value)}
                  className={`border-gray-800 bg-black text-white focus:border-gray-600 ${nameError ? 'border-red-500' : ''}`}
                  aria-invalid={!!nameError}
                  aria-describedby={nameError ? 'name-error' : undefined}
                />
                {nameError && (
                  <p id="name-error" className="text-red-500 mt-1 text-xs">
                    {nameError}
                  </p>
                )}
                <p className="text-xs text-gray-500">
                  Name your design system (e.g., &apos;Project Alpha Design System&apos;)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-300">
                  Description (Optional)
                </Label>
                <Textarea
                  id="description"
                  placeholder="A brief description of your design system..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[100px] border-gray-800 bg-black text-white focus:border-gray-600"
                />
              </div>
            </div>
          )}

          {currentStep === 'styles' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primaryColor" className="text-gray-300">
                  Primary Color
                </Label>
                <div className="flex items-center space-x-3">
                  <div
                    className="h-10 w-10 rounded-md border border-gray-800"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  <Input
                    id="primaryColor"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-10 w-20 border-gray-800 bg-black"
                  />
                  <Input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="border-gray-800 bg-black text-white focus:border-gray-600"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Select your primary color to set the base style
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryFont" className="text-gray-300">
                  Primary Font
                </Label>
                <Select value={primaryFont} onValueChange={setPrimaryFont}>
                  <SelectTrigger
                    id="primaryFont"
                    className="border-gray-800 bg-black text-white focus:border-gray-600"
                  >
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-800 bg-black text-white">
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Helvetica">Helvetica</SelectItem>
                    <SelectItem value="Arial">Arial</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Choose your primary font family</p>
              </div>
            </div>
          )}

          {currentStep === 'confirmation' && (
            <div className="space-y-6">
              <div className="rounded-md border border-gray-800 bg-gray-900/30 p-4">
                <h3 className="mb-2 text-lg font-medium text-white">Design System Summary</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Name:</span>{' '}
                    <span className="font-medium text-white">{designSystemName}</span>
                  </div>
                  {description && (
                    <div>
                      <span className="text-gray-400">Description:</span>{' '}
                      <span className="text-gray-300">{description}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Primary Color:</span>{' '}
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    ></div>
                    <span className="text-gray-300">{primaryColor}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Primary Font:</span>{' '}
                    <span className="text-gray-300">{primaryFont}</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-400">
                Ready to create your design system? Click the button below to get started.
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t border-gray-800 pt-6">
          {currentStep !== 'basics' ? (
            <Button
              variant="outline"
              onClick={handleBack}
              className="border-gray-700 text-white hover:bg-gray-900 hover:text-white"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={handleSkipTour}
              className="border-gray-700 text-white hover:bg-gray-900 hover:text-white"
            >
              Skip Tour
            </Button>
          )}

          {currentStep !== 'confirmation' ? (
            <Button onClick={handleNext} className="bg-white text-black hover:bg-gray-200">
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleCreateDesignSystem}
              disabled={loading}
              className="bg-white text-black hover:bg-gray-200"
            >
              {loading ? 'Creating...' : 'Create Design System'}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
