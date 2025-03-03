'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Trash2, Layout, Layers, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PatternEditorProps {
  designSystemId: string;
  patternId: string;
}

interface Pattern {
  id: string;
  name: string;
  description: string;
  category: string;
  html: string;
  css: string;
  thumbnail?: string;
}

// Sample pattern data - in a real app, this would be fetched from an API
const patternData: Record<string, Pattern> = {
  'hero-section': {
    id: 'hero-section',
    name: 'Hero Section',
    description: 'Prominent section at the top of a page that introduces the main content',
    category: 'sections',
    html: '<div class="hero-container">\n  <h1 class="hero-title">Welcome to Our Platform</h1>\n  <p class="hero-subtitle">The best solution for your needs</p>\n  <div class="hero-cta">\n    <button class="primary-button">Get Started</button>\n    <button class="secondary-button">Learn More</button>\n  </div>\n</div>',
    css: '.hero-container {\n  padding: 4rem 2rem;\n  text-align: center;\n  background: linear-gradient(to right, #1a1a1a, #2a2a2a);\n}\n\n.hero-title {\n  font-size: 3rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n.hero-subtitle {\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  opacity: 0.8;\n}\n\n.hero-cta {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n\n.primary-button {\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  color: black;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: 500;\n}\n\n.secondary-button {\n  padding: 0.75rem 1.5rem;\n  background-color: transparent;\n  color: white;\n  border: 1px solid white;\n  border-radius: 0.25rem;\n  font-weight: 500;\n}',
    thumbnail: '/thumbnails/hero-section.png',
  },
  'feature-grid': {
    id: 'feature-grid',
    name: 'Feature Grid',
    description: 'Grid layout for displaying multiple features or benefits',
    category: 'sections',
    html: '<div class="features-container">\n  <div class="feature-card">\n    <div class="feature-icon">🚀</div>\n    <h3 class="feature-title">Fast Performance</h3>\n    <p class="feature-description">Lightning quick load times and smooth interactions</p>\n  </div>\n  <div class="feature-card">\n    <div class="feature-icon">🛡️</div>\n    <h3 class="feature-title">Secure Platform</h3>\n    <p class="feature-description">Enterprise-grade security for your peace of mind</p>\n  </div>\n  <div class="feature-card">\n    <div class="feature-icon">📱</div>\n    <h3 class="feature-title">Responsive Design</h3>\n    <p class="feature-description">Works perfectly on any device or screen size</p>\n  </div>\n</div>',
    css: '.features-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  padding: 2rem;\n}\n\n.feature-card {\n  padding: 2rem;\n  border-radius: 0.5rem;\n  background-color: #1a1a1a;\n  text-align: center;\n  transition: transform 0.2s ease;\n}\n\n.feature-card:hover {\n  transform: translateY(-5px);\n}\n\n.feature-icon {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.feature-title {\n  font-size: 1.25rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.feature-description {\n  font-size: 0.875rem;\n  opacity: 0.8;\n}',
    thumbnail: '/thumbnails/feature-grid.png',
  },
  'pricing-table': {
    id: 'pricing-table',
    name: 'Pricing Table',
    description: 'Comparison table for displaying different pricing tiers',
    category: 'sections',
    html: '<div class="pricing-container">\n  <div class="pricing-plan">\n    <h3 class="plan-name">Basic</h3>\n    <div class="plan-price">$9<span>/month</span></div>\n    <ul class="plan-features">\n      <li>Feature One</li>\n      <li>Feature Two</li>\n      <li class="disabled">Feature Three</li>\n      <li class="disabled">Feature Four</li>\n    </ul>\n    <button class="plan-button">Choose Plan</button>\n  </div>\n  <div class="pricing-plan featured">\n    <div class="plan-badge">Popular</div>\n    <h3 class="plan-name">Pro</h3>\n    <div class="plan-price">$19<span>/month</span></div>\n    <ul class="plan-features">\n      <li>Feature One</li>\n      <li>Feature Two</li>\n      <li>Feature Three</li>\n      <li class="disabled">Feature Four</li>\n    </ul>\n    <button class="plan-button">Choose Plan</button>\n  </div>\n  <div class="pricing-plan">\n    <h3 class="plan-name">Enterprise</h3>\n    <div class="plan-price">$49<span>/month</span></div>\n    <ul class="plan-features">\n      <li>Feature One</li>\n      <li>Feature Two</li>\n      <li>Feature Three</li>\n      <li>Feature Four</li>\n    </ul>\n    <button class="plan-button">Choose Plan</button>\n  </div>\n</div>',
    css: '.pricing-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n  padding: 2rem;\n}\n\n.pricing-plan {\n  flex: 1;\n  min-width: 250px;\n  max-width: 350px;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  background-color: #1a1a1a;\n  position: relative;\n}\n\n.pricing-plan.featured {\n  border: 1px solid white;\n  transform: scale(1.05);\n}\n\n.plan-badge {\n  position: absolute;\n  top: -10px;\n  right: 20px;\n  background-color: white;\n  color: black;\n  padding: 0.25rem 1rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n\n.plan-name {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n.plan-price {\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n}\n\n.plan-price span {\n  font-size: 1rem;\n  opacity: 0.7;\n}\n\n.plan-features {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 2rem;\n}\n\n.plan-features li {\n  padding: 0.5rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.plan-features li.disabled {\n  opacity: 0.5;\n  text-decoration: line-through;\n}\n\n.plan-button {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: white;\n  color: black;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.pricing-plan.featured .plan-button {\n  background-color: black;\n  color: white;\n  border: 1px solid white;\n}',
    thumbnail: '/thumbnails/pricing-table.png',
  },
  'dashboard-layout': {
    id: 'dashboard-layout',
    name: 'Dashboard Layout',
    description: 'Layout template for admin dashboards with sidebar navigation',
    category: 'layouts',
    html: '<div class="dashboard-container">\n  <aside class="dashboard-sidebar">\n    <div class="sidebar-header">\n      <div class="logo">Toka UI</div>\n    </div>\n    <nav class="sidebar-nav">\n      <a href="#" class="nav-item active">\n        <span class="nav-icon">📊</span>\n        <span class="nav-text">Dashboard</span>\n      </a>\n      <a href="#" class="nav-item">\n        <span class="nav-icon">👤</span>\n        <span class="nav-text">Users</span>\n      </a>\n      <a href="#" class="nav-item">\n        <span class="nav-icon">📝</span>\n        <span class="nav-text">Content</span>\n      </a>\n      <a href="#" class="nav-item">\n        <span class="nav-icon">⚙️</span>\n        <span class="nav-text">Settings</span>\n      </a>\n    </nav>\n  </aside>\n  <main class="dashboard-main">\n    <header class="main-header">\n      <h1>Dashboard Overview</h1>\n      <div class="user-menu">John Doe</div>\n    </header>\n    <div class="main-content">\n      <div class="stats-grid">\n        <div class="stat-card">\n          <div class="stat-value">1,234</div>\n          <div class="stat-label">Total Users</div>\n        </div>\n        <div class="stat-card">\n          <div class="stat-value">$12,345</div>\n          <div class="stat-label">Revenue</div>\n        </div>\n        <div class="stat-card">\n          <div class="stat-value">56</div>\n          <div class="stat-label">New Orders</div>\n        </div>\n        <div class="stat-card">\n          <div class="stat-value">98%</div>\n          <div class="stat-label">Satisfaction</div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>',
    css: '.dashboard-container {\n  display: flex;\n  min-height: 100vh;\n}\n\n.dashboard-sidebar {\n  width: 250px;\n  background-color: #111;\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.logo {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.sidebar-nav {\n  padding: 1rem 0;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  transition: background-color 0.2s;\n}\n\n.nav-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.nav-item.active {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n  border-left: 3px solid white;\n}\n\n.nav-icon {\n  margin-right: 0.75rem;\n}\n\n.dashboard-main {\n  flex: 1;\n  background-color: #1a1a1a;\n}\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.main-content {\n  padding: 2rem;\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n\n.stat-card {\n  background-color: #222;\n  padding: 1.5rem;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\n.stat-value {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.stat-label {\n  font-size: 0.875rem;\n  opacity: 0.7;\n}',
    thumbnail: '/thumbnails/dashboard-layout.png',
  },
  'authentication-flow': {
    id: 'authentication-flow',
    name: 'Authentication Flow',
    description: 'Multi-step authentication process including login, signup, and password reset',
    category: 'flows',
    html: '<div class="auth-container">\n  <div class="auth-card">\n    <div class="auth-header">\n      <h2>Sign In</h2>\n      <p>Welcome back! Please sign in to continue.</p>\n    </div>\n    <form class="auth-form">\n      <div class="form-group">\n        <label for="email">Email</label>\n        <input type="email" id="email" placeholder="your@email.com" />\n      </div>\n      <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" id="password" placeholder="••••••••" />\n      </div>\n      <div class="form-actions">\n        <div class="remember-me">\n          <input type="checkbox" id="remember" />\n          <label for="remember">Remember me</label>\n        </div>\n        <a href="#" class="forgot-password">Forgot password?</a>\n      </div>\n      <button type="submit" class="submit-button">Sign In</button>\n    </form>\n    <div class="auth-footer">\n      <p>Don\'t have an account? <a href="#">Sign Up</a></p>\n    </div>\n  </div>\n</div>',
    css: '.auth-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #111;\n  padding: 2rem;\n}\n\n.auth-card {\n  width: 100%;\n  max-width: 400px;\n  background-color: #1a1a1a;\n  border-radius: 0.5rem;\n  padding: 2rem;\n}\n\n.auth-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.auth-header h2 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.auth-header p {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.875rem;\n}\n\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.form-group label {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.form-group input {\n  padding: 0.75rem;\n  background-color: #222;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 0.25rem;\n  color: white;\n}\n\n.form-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n}\n\n.remember-me {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.forgot-password {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n}\n\n.forgot-password:hover {\n  text-decoration: underline;\n}\n\n.submit-button {\n  padding: 0.75rem;\n  background-color: white;\n  color: black;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: 500;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.auth-footer {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.auth-footer a {\n  color: white;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.auth-footer a:hover {\n  text-decoration: underline;\n}',
    thumbnail: '/thumbnails/auth-flow.png',
  },
};

export function PatternEditor({ designSystemId, patternId }: PatternEditorProps) {
  const router = useRouter();
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  // Fetch pattern data
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPattern = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Get pattern data from our mock data
        const data = patternData[patternId];
        if (data) {
          setPattern(data);
        } else {
          // If pattern not found, create a new empty pattern
          setPattern({
            id: patternId,
            name: 'New Pattern',
            description: '',
            category: 'sections',
            html: '<div>\n  <!-- Your pattern HTML here -->\n</div>',
            css: '/* Your pattern CSS here */',
          });
        }
      } catch (error) {
        console.error('Error fetching pattern:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPattern();
  }, [patternId]);

  // Handle pattern updates
  const handleUpdatePattern = (field: keyof Pattern, value: string) => {
    if (pattern) {
      setPattern({ ...pattern, [field]: value });
    }
  };

  // Handle save
  const handleSave = async () => {
    if (!pattern) return;

    setIsSaving(true);
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Success message or notification would go here
      console.log('Pattern saved:', pattern);
    } catch (error) {
      console.error('Error saving pattern:', error);
    } finally {
      setIsSaving(false);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    setIsSaving(true);
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Navigate back to patterns list
      router.push(`/dashboard/${designSystemId}/patterns`);
    } catch (error) {
      console.error('Error deleting pattern:', error);
    } finally {
      setIsSaving(false);
      setIsDeleteDialogOpen(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-gray-400">Loading pattern...</div>
      </div>
    );
  }

  if (!pattern) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-gray-400">Pattern not found</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push(`/dashboard/${designSystemId}/patterns`)}
            className="border-gray-800 hover:bg-gray-900"
          >
            <ArrowLeft className="h-4 w-4 text-gray-400" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-white">{pattern.name}</h1>
            <p className="text-sm text-gray-400">{pattern.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setIsDeleteDialogOpen(true)}
            className="border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-white text-black hover:bg-gray-200"
          >
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      {/* Pattern Editor */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column - Pattern Details */}
        <div className="space-y-4">
          <div className="rounded-md border border-gray-800 bg-black p-4">
            <h2 className="mb-4 text-lg font-medium text-white">Pattern Details</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-400">
                  Name
                </Label>
                <Input
                  id="name"
                  value={pattern.name}
                  onChange={(e) => handleUpdatePattern('name', e.target.value)}
                  className="border-gray-800 bg-gray-900 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-400">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={pattern.description}
                  onChange={(e) => handleUpdatePattern('description', e.target.value)}
                  className="min-h-[100px] border-gray-800 bg-gray-900 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category" className="text-gray-400">
                  Category
                </Label>
                <Select
                  value={pattern.category}
                  onValueChange={(value) => handleUpdatePattern('category', value)}
                >
                  <SelectTrigger className="border-gray-800 bg-gray-900 text-white">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-800 bg-gray-900 text-white">
                    <SelectItem value="sections">Sections</SelectItem>
                    <SelectItem value="layouts">Layouts</SelectItem>
                    <SelectItem value="flows">Flows</SelectItem>
                    <SelectItem value="cards">Cards</SelectItem>
                    <SelectItem value="forms">Forms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Pattern Preview and Code */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900">
              <TabsTrigger value="preview" className="data-[state=active]:bg-gray-800">
                <Layout className="mr-2 h-4 w-4" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="html" className="data-[state=active]:bg-gray-800">
                <Code className="mr-2 h-4 w-4" />
                HTML
              </TabsTrigger>
              <TabsTrigger value="css" className="data-[state=active]:bg-gray-800">
                <Layers className="mr-2 h-4 w-4" />
                CSS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="border-none p-0">
              <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-400">Live Preview</h3>
                </div>
                <div className="overflow-hidden rounded-md border border-gray-800 bg-white p-4">
                  <div
                    className="preview-container"
                    dangerouslySetInnerHTML={{
                      __html: `<style>${pattern.css}</style>${pattern.html}`,
                    }}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="html" className="border-none p-0">
              <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-400">HTML</h3>
                </div>
                <Textarea
                  value={pattern.html}
                  onChange={(e) => handleUpdatePattern('html', e.target.value)}
                  className="min-h-[400px] border-gray-800 bg-black font-mono text-sm text-white"
                />
              </div>
            </TabsContent>
            <TabsContent value="css" className="border-none p-0">
              <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-400">CSS</h3>
                </div>
                <Textarea
                  value={pattern.css}
                  onChange={(e) => handleUpdatePattern('css', e.target.value)}
                  className="min-h-[400px] border-gray-800 bg-black font-mono text-sm text-white"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="border-gray-800 bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>Delete Pattern</DialogTitle>
            <DialogDescription className="text-gray-400">
              Are you sure you want to delete this pattern? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isSaving}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isSaving ? 'Deleting...' : 'Delete Pattern'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
