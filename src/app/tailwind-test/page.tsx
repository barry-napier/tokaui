export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-black mb-4">Tailwind Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-black text-white rounded">Black</div>
        <div className="p-4 bg-white text-black border border-gray-200 rounded">
          White
        </div>
        <div className="p-4 bg-gray-500 text-white rounded">Gray 500</div>
      </div>

      <div className="space-y-4 mb-8">
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
          Primary Button
        </button>
        <div>
          <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            Secondary Button
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-16 h-16 bg-gray-300 rounded"></div>
        <div className="w-16 h-16 bg-gray-500 rounded-md"></div>
        <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
}
