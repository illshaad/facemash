import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Cats
            <strong className="font-extrabold text-blue-400 sm:block">
              Facemasch
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Bienvenue dans le monde des plus beaux chats du monde
          </p>

          <div className="mt-8 flex flex-wrap justify-center">
            <Link
              to={"/cats"}
              className=" block w-full rounded border-2 border-pink-400 px-12 py-3 text-sm font-medium text-grey-900 shadow  sm:w-auto"
            >
              Voir les chats
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
