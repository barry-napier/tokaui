import React from "react";
import Link from "next/link";

const ThemeDemo = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">
          Toka UI Theme Demo
        </h1>
        <p className="text-gray-600">
          A demonstration of our black-and-white minimal design system
        </p>
        <Link
          href="/"
          className="text-gray-500 hover:text-black mt-2 inline-block"
        >
          ← Back to Home
        </Link>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-4">Color Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-black text-white rounded">Black</div>
          <div className="p-4 bg-white text-black border border-gray-200 rounded">
            White
          </div>
          <div className="p-4 bg-gray-50 text-black border border-gray-200 rounded">
            Gray 50
          </div>
          <div className="p-4 bg-gray-100 text-black border border-gray-200 rounded">
            Gray 100
          </div>
          <div className="p-4 bg-gray-200 text-black border border-gray-200 rounded">
            Gray 200
          </div>
          <div className="p-4 bg-gray-300 text-black border border-gray-200 rounded">
            Gray 300
          </div>
          <div className="p-4 bg-gray-400 text-black border border-gray-200 rounded">
            Gray 400
          </div>
          <div className="p-4 bg-gray-500 text-white border border-gray-200 rounded">
            Gray 500
          </div>
          <div className="p-4 bg-gray-600 text-white border border-gray-200 rounded">
            Gray 600
          </div>
          <div className="p-4 bg-gray-700 text-white border border-gray-200 rounded">
            Gray 700
          </div>
          <div className="p-4 bg-gray-800 text-white border border-gray-200 rounded">
            Gray 800
          </div>
          <div className="p-4 bg-gray-900 text-white border border-gray-200 rounded">
            Gray 900
          </div>
          <div className="p-4 bg-gray-950 text-white border border-gray-200 rounded">
            Gray 950
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-4">Typography</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-5xl font-bold text-black">Heading 1</h1>
            <p className="text-gray-500">5xl - 3rem</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black">Heading 2</h2>
            <p className="text-gray-500">4xl - 2.25rem</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-black">Heading 3</h3>
            <p className="text-gray-500">3xl - 1.875rem</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-black">Heading 4</h4>
            <p className="text-gray-500">2xl - 1.5rem</p>
          </div>
          <div>
            <h5 className="text-xl font-bold text-black">Heading 5</h5>
            <p className="text-gray-500">xl - 1.25rem</p>
          </div>
          <div>
            <h6 className="text-lg font-bold text-black">Heading 6</h6>
            <p className="text-gray-500">lg - 1.125rem</p>
          </div>
          <div>
            <p className="text-base text-black">Body Text (Base)</p>
            <p className="text-gray-500">base - 1rem</p>
          </div>
          <div>
            <p className="text-sm text-black">Small Text</p>
            <p className="text-gray-500">sm - 0.875rem</p>
          </div>
          <div>
            <p className="text-xs text-black">Extra Small Text</p>
            <p className="text-gray-500">xs - 0.75rem</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-4">Spacing</h2>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-4">
            <div className="w-4 h-4 bg-gray-300"></div>
            <div className="w-8 h-8 bg-gray-400"></div>
            <div className="w-12 h-12 bg-gray-500"></div>
            <div className="w-16 h-16 bg-gray-600"></div>
            <div className="w-20 h-20 bg-gray-700"></div>
            <div className="w-24 h-24 bg-gray-800"></div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 mr-2"></div>
              <span>1rem (4)</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-400 mr-2"></div>
              <span>2rem (8)</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-500 mr-2"></div>
              <span>3rem (12)</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-600 mr-2"></div>
              <span>4rem (16)</span>
            </div>
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-700 mr-2"></div>
              <span>5rem (20)</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 h-24 bg-gray-800 mr-2"></div>
              <span>6rem (24)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-4">UI Elements</h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                Secondary Button
              </button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors">
                Tertiary Button
              </button>
              <button className="px-4 py-2 bg-white text-gray-400 border border-gray-300 rounded cursor-not-allowed">
                Disabled Button
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">Form Elements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="text-input"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Text Input
                </label>
                <input
                  type="text"
                  id="text-input"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter text"
                />
              </div>
              <div>
                <label
                  htmlFor="select-input"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Input
                </label>
                <select
                  id="select-input"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="textarea"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Textarea
                </label>
                <textarea
                  id="textarea"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter text"
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="h-4 w-4 text-black focus:ring-gray-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Checkbox
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-4">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="w-16 h-16 bg-gray-300 rounded-none mb-2"></div>
            <p className="text-sm text-gray-600">None</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-gray-400 rounded-sm mb-2"></div>
            <p className="text-sm text-gray-600">Small (0.125rem)</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-gray-500 rounded mb-2"></div>
            <p className="text-sm text-gray-600">Default (0.25rem)</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-gray-600 rounded-md mb-2"></div>
            <p className="text-sm text-gray-600">Medium (0.375rem)</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-gray-700 rounded-lg mb-2"></div>
            <p className="text-sm text-gray-600">Large (0.5rem)</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-gray-800 rounded-xl mb-2"></div>
            <p className="text-sm text-gray-600">XL (0.75rem)</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-gray-900 rounded-2xl mb-2"></div>
            <p className="text-sm text-gray-600">2XL (1rem)</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-black rounded-full mb-2"></div>
            <p className="text-sm text-gray-600">Full</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemeDemo;
