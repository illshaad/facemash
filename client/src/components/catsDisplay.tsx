import { CatType } from "../types/cat";
import Cat from "./cat";

export const CatDisplay = ({
  cats,
  buttonLabel,
  onClick,
}: {
  cats: CatType[];
  buttonLabel: string;
  onClick: () => void;
}) => (
  <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
    {cats.map((cat) => (
      <Cat key={cat.id} cat={cat} />
    ))}

    <button
      className="inline-block bg-gradient-to-r from-pink-200 via-pink-400 to-blue-500 rounded  px-2 py-1 text-xs font-bold text-white transition hover:scale-110"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  </div>
);
