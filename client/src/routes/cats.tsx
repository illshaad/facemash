import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addVote, getRandomCats } from "../services/cats-service";

import { Link } from "react-router-dom";

import LoadingSvg from "../components/loadingSvg";

export default function Cats() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["getRandomCats"],
    queryFn: getRandomCats,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return addVote(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRandomCats"] });
    },
  });

  if (isLoading) return <LoadingSvg />;

  const dataVerify = data && data?.length > 0 ? data : [];

  return (
    <div className="grid lg:grid-cols-2 lg:gap-2 relative ">
      <div className="grid h-screen rounded-lg bg-blue-100 place-items-center">
        <div className="">
          <img
            alt="cats"
            src={dataVerify[0]?.url}
            className=" h-56 w-[350px] shadow-xl  rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium">Chat</strong>
            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-pink-400 "></span>
            <button
              onClick={() => mutation.mutate(dataVerify[0]?._id)}
              className=" border-2 border-pink-400  rounded mt-0.5 px-4 opacity-50 sm:mt-0 transition hover:scale-110"
            >
              Votes
            </button>
          </div>
          <div className="text-pink-400 font-medium italic mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 ">
            {dataVerify[0]?.vote
              ? `Note - ${dataVerify[0]?.vote} `
              : "Pas encore de vote"}
          </div>
        </div>
      </div>

      <div className="grid h-screen rounded-lg bg-pink-100 place-items-center">
        <div>
          <img
            alt="cats"
            src={dataVerify[1]?.url}
            className=" h-56 w-[350px] shadow-xl rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium">Chat</strong>
            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-blue-400"></span>
            <button
              onClick={() => mutation.mutate(dataVerify[1]._id)}
              className=" border-2 border-blue-400  rounded mt-0.5 px-4 opacity-50 sm:mt-0 transition hover:scale-110"
            >
              Votes
            </button>
          </div>
          <div className="text-blue-400 font-medium italic mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 ">
            {dataVerify[1]?.vote
              ? `Note - ${dataVerify[1]?.vote}`
              : "Pas encore de vote"}
          </div>
        </div>
        <div className="absolute bottom-10 transform -translate-x-1/2  left-2/4">
          <Link
            to={"/list"}
            className="inline-block bg-gradient-to-r from-pink-200 via-pink-400 to-blue-500 rounded  px-2 py-3 text-xs font-bold text-white transition hover:scale-110"
          >
            Voir les plus beaux chats
          </Link>
        </div>
      </div>
    </div>
  );
}
