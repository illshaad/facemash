export default function Filter({ setOrder }) {
  return (
    <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
      <button
        onClick={() => setOrder("desc")}
        className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 focus:relative"
      >
        Note le plus élevé
      </button>

      <button
        onClick={() => setOrder("asc")}
        className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-pink-100 focus:relative"
      >
        Note le moins élevé
      </button>
    </span>
  );
}
