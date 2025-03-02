export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="mb-4 text-4xl font-bold text-black">Tailwind Test Page</h1>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded bg-black p-4 text-white">Black</div>
        <div className="rounded border border-gray-200 bg-white p-4 text-black">White</div>
        <div className="rounded bg-gray-500 p-4 text-white">Gray 500</div>
      </div>

      <div className="mb-8 space-y-4">
        <button className="rounded bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800">
          Primary Button
        </button>
        <div>
          <button className="rounded border border-gray-300 bg-white px-4 py-2 text-black transition-colors hover:bg-gray-100">
            Secondary Button
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="h-16 w-16 rounded bg-gray-300"></div>
        <div className="h-16 w-16 rounded-md bg-gray-500"></div>
        <div className="h-16 w-16 rounded-lg bg-gray-700"></div>
      </div>
    </div>
  );
}
