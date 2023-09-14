import { Link } from "react-router-dom";

export default function Options({
  setOrder,
  order,
}: {
  order: "asc" | "desc";
  setOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
}) {
  return (
    <div className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
      <button
        onClick={() => setOrder("desc")}
        className={`inline-block px-4 py-2 text-sm font-medium text-gray-700 ${
          order === "desc" ? "bg-blue-100" : "hover:bg-blue-100"
        } focus:relative`}
      >
        Note le plus élevé
      </button>

      <button
        onClick={() => setOrder("asc")}
        className={`inline-block px-4 py-2 text-sm font-medium text-gray-700 ${
          order === "asc" ? "bg-pink-100" : "hover:bg-pink-100"
        } focus:relative`}
      >
        Note le moins élevé
      </button>

      <Link
        to={"/cats"}
        className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:relative"
      >
        Retour
      </Link>
    </div>
  );
}
