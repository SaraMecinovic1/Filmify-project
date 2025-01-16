import Loader from "@/component/loading";
import { SelectForMoviedate } from "@/component/SelectForMovieDate";
import Stepper from "@/component/Stepper";
import { Button } from "@/components/ui/button";
import { fetchMovieDetails, Movie } from "@/services/tmdb";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const BookTicket = () => {
  const { id } = useParams<{ id: string }>();
  const { control } = useForm();
  const { data, isLoading } = useQuery<Movie>({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(Number(id)),
  });

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-10">
      <Stepper />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-auto sm:h-[70vh] mb-5 sm:mb-20 p-5 sm:p-7 rounded-lg bg-[#2e2e2e] flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-[300px] max-w-sm mx-auto sm:mx-0 rounded-lg">
            {isLoading ? (
              <Loader />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w400/${data?.poster_path}`}
                alt={data?.title}
                className="w-full h-[350px] rounded-lg sm:h-[350px] sm:object-cover sm:w-[300px]   object-contain"
              />
            )}
          </div>

          <div className="flex flex-col w-full gap-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-accent">
              {data?.title?.toUpperCase()}
            </h1>
            <h1 className="text-base sm:text-lg font-semibold text-secondary">
              FILMIFY BELGRADE
            </h1>

            <div className="mt-2">
              <form>
                <Controller
                  name="movieDate"
                  control={control}
                  render={({ field }) => (
                    <SelectForMoviedate
                      {...field}
                      control={control}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  )}
                />
              </form>
            </div>

            <div className="w-full mt-4 text-accent">
              <hr className="w-full mb-3 border-gray-600" />

              <div className="flex justify-between items-center mb-3">
                <h1 className="text-sm sm:text-lg">Adults</h1>
                <div className="flex items-center gap-2">
                  <MinusCircleIcon width={24} className="text-secondary" />
                  6
                  <PlusCircleIcon width={24} className="text-secondary" />
                </div>
              </div>

              <hr className="w-full mb-3 border-gray-600" />

              <div className="flex justify-between items-center mb-3">
                <h1 className="text-sm sm:text-lg">Children</h1>
                <div className="flex items-center gap-2">
                  <MinusCircleIcon width={24} className="text-secondary" />
                  0
                  <PlusCircleIcon width={24} className="text-secondary" />
                </div>
              </div>

              <hr className="w-full mb-3 border-gray-600" />

              <p className="text-gray-400 text-xs sm:text-sm">
                You can book a maximum of 6 tickets/day
              </p>

              <div className="flex justify-center sm:justify-end mt-5">
                <Button
                  disabled
                  className="w-40 sm:w-48 rounded-3xl bg-secondary hover:bg-orange-600"
                >
                  NEXT STEP
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTicket;
