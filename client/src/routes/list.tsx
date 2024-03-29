import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getCats } from "../services/list-service";

import { CatDisplay } from "../components/catsDisplay";
import Options from "../components/options";

import { nextCats, prevCats, slide } from "../utils/cat-utils";

import LoadingSvg from "../components/loadingSvg";

export default function List() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [displayAllCats, setDisplayAllCats] = React.useState<boolean>(false);
  const [order, setOrder] = React.useState<"asc" | "desc">("desc");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCats", order],
    queryFn: () => getCats(order),
  });

  if (isLoading) return <LoadingSvg />;
  if (isError) return <div>Error</div>;

  const catsList = slide(data);

  return (
    <div className="max-w-screen-xl  sm:grid-cols-2 lg:grid-cols-2 px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header className="flex justify-around">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Les plus beaux chats
        </h2>
        <Options setOrder={setOrder} order={order} />
      </header>

      <div className="flex items-center gap-10">
        {!displayAllCats && (
          <div
            className="cursor-pointer border border-pink-100 border-4 rounded-full shaddow py-6 px-8 transition hover:scale-110"
            onClick={() => prevCats(currentIndex, setCurrentIndex, catsList)}
          >
            ←
          </div>
        )}

        {displayAllCats && data ? (
          <CatDisplay
            cats={data}
            buttonLabel="Voir moins de chats"
            onClick={() => setDisplayAllCats(!displayAllCats)}
          />
        ) : (
          <CatDisplay
            cats={catsList && catsList[currentIndex]}
            buttonLabel="Voir tous les chats"
            onClick={() => setDisplayAllCats(!displayAllCats)}
          />
        )}

        {!displayAllCats && (
          <div
            className="cursor-pointer border border-blue-100 border-4 rounded-full shaddow py-6 px-8 transition hover:scale-110"
            onClick={() => nextCats(currentIndex, setCurrentIndex, catsList)}
          >
            →
          </div>
        )}
      </div>
    </div>
  );
}
