import Loader from "@/component/loading";
import { Button } from "@/components/ui/button";
import { fetchMovieDetails } from "@/services/tmdb";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function DetailsMovie() {
  const { id } = useParams<{ id: string }>();
  const [isInWatchList, setIsInWatchList] = useState(true);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
  });

  const toggleWatchList = () => {
    setIsInWatchList((prev) => !prev);
    console.log("Watchlist status:", isInWatchList);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">
          Failed to load movie details. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-auto text-accent">
      <div className="w-full h-auto mt-20 lg:p-10 sm:p-5">
        <div className="items-center flex flex-col gap-5 pt-5 sm:p-5 sm:mt-5 md:flex-row md:gap-2 md:items-start md:mt-10 lg:mt-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt={data?.title}
            className="rounded-lg border w-[330px] h-[440px] sm:w-[400px] sm:h-[550px] sm:ml-[37px] md:w-[400px] md:h-[550px] lg:w-[400px] lg:h-[550px] object-cover"
          />

          <div className="flex flex-col justify-center gap-1 md:gap-1 md:items-start md:mx-5 sm:px-5 lg:px-5 sm:py-0 lg:py-0 items-center sm:items-center">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">
              {data?.title.toUpperCase()}
            </h1>
            <h2 className="text-xl sm:text-xl lg:text-2xl font-normal text-accent">
              2h 30m
            </h2>

            <p className="flex mt-2 text-md sm:text-[15px]">
              {isInWatchList ? (
                <FiHeart
                  onClick={toggleWatchList}
                  fontSize={20}
                  width={24}
                  height={24}
                  className="text-secondary mr-1"
                />
              ) : (
                <FaHeart
                  onClick={toggleWatchList}
                  fontSize={20}
                  width={24}
                  height={24}
                  className="text-secondary mr-1"
                />
              )}
              ADD TO WATCH LIST
            </p>

            <div className="px-5 mb-5 text-lg w-full sm:w-full lg:w-[500px] md:w-full h-auto mt-4 sm:mt-3 md:mt-3 text-center md:text-left md:px-0">
              {data?.overview}
            </div>
            <div className="mb-10">
              <Button variant="secondary">
                MAKE RESERVATION
                <CalendarDaysIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
