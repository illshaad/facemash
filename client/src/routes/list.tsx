import React from "react";
import { useQuery } from "@tanstack/react-query";
import Cat from "../components/cat";
import { getCats } from "../services/list-service";
import { CatType } from "../types/cat";

export default function List() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const { data: catsList, isLoading } = useQuery(["getCats"], () => getCats(), {
    keepPreviousData: true,
    select: (data) => {
      const chunks = [];
      for (let i = 0; i < data.length; i += 4) {
        chunks.push(data.slice(i, i + 4));
      }
      return chunks;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  const nextCats: () => void = () => {
    const newIndex = currentIndex + 1;
    if (catsList && newIndex >= catsList.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const prevCats = () => {
    const newIndex = currentIndex - 1;
    if (catsList && newIndex < 0) {
      setCurrentIndex(catsList.length - 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Les plus beaux chats
        </h2>
      </header>

      <div className="flex items-center gap-10">
        <div className="arrow" onClick={() => prevCats()}>
          prev
        </div>

        <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {catsList &&
            catsList[currentIndex].map((cat: CatType) => (
              <Cat key={cat._id} cat={cat} />
            ))}
        </div>

        <div className="arrow" onClick={() => nextCats()}>
          next
        </div>
      </div>
    </div>
  );
}
