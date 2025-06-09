// app/components/Pagination.tsx

export default function Pagination() {
  return (
    <div className="flex justify-center mt-8 space-x-2 text-sm text-white">
      <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition duration-200">Prev</button>
      <button className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 transition duration-200">1</button>
      <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition duration-200">2</button>
      <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition duration-200">3</button>
      <span className="px-3 py-1">...</span>
      <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition duration-200">10</button>
      <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition duration-200">Next</button>
    </div>
  );
}
