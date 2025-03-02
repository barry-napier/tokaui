import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ComponentsDemo() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Toka UI Components</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Button size="sm">Small Button</Button>
          <Button>Default Size</Button>
          <Button size="lg">Large Button</Button>
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Button disabled>Disabled Button</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Inputs</h2>
        <div className="grid max-w-md gap-4">
          <div>
            <label htmlFor="default-input" className="mb-1 block text-sm font-medium">
              Default Input
            </label>
            <Input id="default-input" placeholder="Enter text here..." />
          </div>

          <div>
            <label htmlFor="disabled-input" className="mb-1 block text-sm font-medium">
              Disabled Input
            </label>
            <Input id="disabled-input" placeholder="Disabled input" disabled />
          </div>

          <div>
            <label htmlFor="email-input" className="mb-1 block text-sm font-medium">
              Email Input
            </label>
            <Input id="email-input" type="email" placeholder="example@email.com" />
          </div>

          <div>
            <label htmlFor="password-input" className="mb-1 block text-sm font-medium">
              Password Input
            </label>
            <Input id="password-input" type="password" placeholder="Enter password" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Form Example</h2>
        <form className="max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <Input id="name" placeholder="Enter your name" />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
}
