import { CatType } from "../types/cat";

export default function Cat({ cat }: { cat: CatType }) {
  return (
    <div className="block overflow-hidden group">
      <img
        src={cat.url}
        alt="cat picture"
        className="rounded-bl-3xl rounded-tr-3xl object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
      />

      <div className="relative pt-3 bg-white">
        <h3 className="text-xs font-bold text-gray-700">Note</h3>
        <p className="mt-2">
          <span className="tracking-wider text-gray-900">
            {cat.vote} &#9733;
          </span>
        </p>
      </div>
    </div>
  );
}
