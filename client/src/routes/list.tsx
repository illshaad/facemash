import { useQuery } from "@tanstack/react-query";
import Cat from "../components/cat";
import { getCats } from "../services/list-service";
import { CatType } from "../types/cat";

export default function List() {
  const { data, isLoading } = useQuery({
    queryKey: ["getCat"],
    queryFn: getCats,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Les plus beaux chats
        </h2>
      </header>
      <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((cat: CatType) => (
          <Cat key={cat._id} cat={cat} />
        ))}
      </div>
    </div>
  );
}
