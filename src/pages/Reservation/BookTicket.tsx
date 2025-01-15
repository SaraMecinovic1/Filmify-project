import Loader from "@/component/loading";
import { SelectForMoviedate } from "@/component/SelectForMovieDate";
import { Button } from "@/components/ui/button";
import { fetchMovieDetails, Movie } from "@/services/tmdb";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
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
    <div className="w-full h-full px-10">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-[70vh] my-20 p-7 rounded-lg bg-[#2e2e2e] flex flex-row mt-[120px]">
          <div className="w-[400px] h-full bg-red-500">
            <img
              src={`https://image.tmdb.org/t/p/w400/${data?.poster_path}`}
              alt={data?.title}
              className="w-[400px] h-full object-cover"
            />
          </div>

          <div className="flex flex-col w-full gap-1 md:gap-1 md:items-start md:mx-5 sm:px-5 lg:px-5 sm:py-0 sm:items-center">
            <h1 className="text-[20px] md:text-left text-center sm:text-2xl lg:text-3xl font-bold text-accent">
              {data?.title.toUpperCase()}
            </h1>
            <h1 className="text-[20px] font-semibold text-secondary">
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
              <hr className="w-full mb-3" />
              {/* Adults section */}
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-xl">Adults</h1>
                <div className="flex items-center gap-2">
                  <MinusCircleIcon width={"30px"} className="text-secondary" />
                  6
                  <PlusCircleIcon width={"30px"} className="text-secondary" />
                </div>
              </div>
              <hr className="w-full mb-3" />

              {/* Children section */}
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-xl">Children</h1>
                <div className="flex items-center gap-2">
                  <MinusCircleIcon width={"30px"} className="text-secondary" />
                  0
                  <PlusCircleIcon width={"30px"} className="text-secondary" />
                </div>
              </div>
              <hr className="w-full mb-3" />

              <p className="text-gray-400 text-sm">
                You can book a maximum of 6 tickets/day
              </p>

              <div className="flex justify-end mt-5">
                <Button
                  disabled
                  className="w-[200px] rounded-3xl bg-secondary hover:bg-orange-600 "
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
