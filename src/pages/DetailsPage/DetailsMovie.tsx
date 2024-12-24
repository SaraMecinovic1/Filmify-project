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
      <div className="w-full h-auto  mt-20 lg:p-10 sm:p-5">
        <div
          className="
           items-center
        flex flex-col gap-5 pt-5
        sm:p-5 
        sm:mt-5
        md:flex-row md:gap-2 md:items-start md:mt-10
        lg:mt-0"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="
         
          w-[330px] h-[440px]
          sm:w-[400px] sm:h-[550px]  sm:ml-[37px]
          md:w-[400px] md:h-[550px] 
          lg:w-[400px] lg:h-[550px]
          object-cover"
            alt={movie.title}
          />

          <div
            className="
          ml-10
          flex flex-col justify-start gap-1
          md:gap-1
          md:items-start
          sm:px-5 lg:px-5 
          sm:py-0 lg:py-0 
          sm:items-center
        "
          >
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">
              {movie.title.toUpperCase()}
            </h1>
            <h2 className="text-xl sm:text-xl lg:text-2xl font-normal text-accent">
              2h 30m
            </h2>

            <p className="flex mt-2 text-md sm:text-[15px]">
              <HeartIcon
                fontSize={20}
                width={24}
                height={24}
                className="text-secondary mr-1"
              />
              ADD TO WATCH LIST
            </p>

            <div
              className="
            text-lg w-full pr-5
            sm:w-full lg:w-[500px] 
            md:w-full md:text-left md:ml-0 md:mt-5
            h-auto mt-4 sm:mt-3 sm:text-center sm:ml-5"
            >
              {movie.overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMovie;
