import { fetchMovieDetails, Movie } from "@/services/tmdb";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsMovie() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const detailsMovie = await fetchMovieDetails(Number(id));
      setMovie(detailsMovie);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-auto text-accent">
      <div className="w-full  h-auto p-5 mt-10 lg:p-10 sm:p-5">
        <div className="flex flex-col p-5 sm:p-5 mt-10 lg:flex-row gap-5  lg:mt-30 items-center md:items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="w-[380px] h-[550px] lg:w-[370px] lg:h-[450px] sm:w-[400px] sm:h-[550px] object-cover"
            alt={movie.title}
          />

          <div className="flex flex-col justify-normal mt-3 sm:p-10 lg:p-10">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">
              {movie.title.toUpperCase()}
            </h1>
            <h2 className="text-xl sm:text-xl lg:text-2xl font-normal text-accent">
              2h 30m
            </h2>

            <p className="flex mt-2 text-md sm:text-[15px] md:justify-start">
              <HeartIcon
                fontSize={20}
                width={24}
                height={24}
                className="text-secondary mr-1"
              />
              ADD TO WATCH LIST
            </p>

            <div className="w-full text-lg  sm:w-[400px] lg:w-[500px] h-auto mt-5 sm:mt-7">
              {movie.overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMovie;
