import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileTextIcon, BookOpenIcon, CodeIcon, UsersIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation & Guidelines | Toka',
  description: 'Write usage notes and best practices for your design system',
};

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative border-b border-gray-800 bg-black pb-8 pt-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-white">Documentation & Guidelines</h1>
          <p className="mb-6 max-w-3xl text-lg text-gray-400">
            Write usage notes and best practices to help your team use the design system
            effectively.
          </p>
          <div className="from-blue-500 to-purple-500 h-1 w-24 bg-gradient-to-r"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Tabs defaultValue="usage" className="space-y-8">
          <TabsList className="bg-gray-900">
            <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
            <TabsTrigger value="principles">Design Principles</TabsTrigger>
            <TabsTrigger value="code">Code Standards</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="space-y-8">
            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Usage Guidelines</h2>
              <p className="mb-8 text-gray-400">
                Learn how to use components and patterns correctly to maintain consistency across
                your products.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <FileTextIcon className="mr-2 h-5 w-5" />
                      Component Documentation
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Detailed usage instructions for each component
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Each component includes props, examples, and best practices to ensure proper
                      implementation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <BookOpenIcon className="mr-2 h-5 w-5" />
                      Pattern Guidelines
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      When and how to use specific patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Learn which patterns to use for specific user needs and how to implement them
                      correctly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="principles" className="space-y-8">
            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Design Principles</h2>
              <p className="mb-8 text-gray-400">
                Core principles that guide the design decisions in your design system.
              </p>

              <div className="space-y-6">
                <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                  <h3 className="mb-2 text-lg font-medium text-white">Consistency</h3>
                  <p className="text-gray-300">
                    Create familiar experiences by using consistent patterns and components across
                    products.
                  </p>
                </div>

                <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                  <h3 className="mb-2 text-lg font-medium text-white">Accessibility</h3>
                  <p className="text-gray-300">
                    Design for all users, regardless of their abilities or circumstances.
                  </p>
                </div>

                <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                  <h3 className="mb-2 text-lg font-medium text-white">Simplicity</h3>
                  <p className="text-gray-300">
                    Keep interfaces simple and intuitive, eliminating unnecessary complexity.
                  </p>
                </div>

                <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                  <h3 className="mb-2 text-lg font-medium text-white">Flexibility</h3>
                  <p className="text-gray-300">
                    Create components that can adapt to different contexts and requirements.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-8">
            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Code Standards</h2>
              <p className="mb-8 text-gray-400">
                Coding conventions and best practices for implementing the design system.
              </p>

              <div className="space-y-6">
                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <CodeIcon className="mr-2 h-5 w-5" />
                      Implementation Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="mb-1 font-medium text-white">Component Structure</h4>
                      <p className="text-sm text-gray-300">
                        Follow the established component structure to ensure consistency and
                        maintainability.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-white">Naming Conventions</h4>
                      <p className="text-sm text-gray-300">
                        Use consistent naming for components, props, and variables.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-white">Performance Considerations</h4>
                      <p className="text-sm text-gray-300">
                        Optimize components for performance by following recommended practices.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-8">
            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Accessibility Guidelines</h2>
              <p className="mb-8 text-gray-400">
                Ensure your design system is accessible to all users, including those with
                disabilities.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <UsersIcon className="mr-2 h-5 w-5" />
                      WCAG Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      All components are designed to meet WCAG 2.1 AA standards for accessibility.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <UsersIcon className="mr-2 h-5 w-5" />
                      Keyboard Navigation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Ensure all interactive elements are accessible via keyboard navigation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <UsersIcon className="mr-2 h-5 w-5" />
                      Screen Reader Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Components include appropriate ARIA attributes and semantic HTML for screen
                      reader compatibility.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <UsersIcon className="mr-2 h-5 w-5" />
                      Color Contrast
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Text and interactive elements maintain sufficient contrast ratios for
                      readability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
