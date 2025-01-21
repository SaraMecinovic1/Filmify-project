/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/component/loading";
import { SelectForMoviedate } from "@/component/SelectForMovieDate";
import Stepper from "@/component/Stepper";
import { Button } from "@/components/ui/button";
import { fetchMovieDetails, Movie } from "@/services/tmdb";
import { useDataStore } from "@/store/dataStore";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BookTicket = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery<Movie>({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(Number(id)),
  });

  const { newData, addTicket, removeTicket, userData } = useDataStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      movieDate: "",
      adultsCount: 0,
      childrenCount: 0,
    },
    mode: "onBlur",
  });

  const onSubmit = (formData: any) => {
    const { adultsCount, childrenCount, seats } = userData || {
      adultsCount: 0,
      childrenCount: 0,
      seats: [],
    };

    if (adultsCount === 0 && childrenCount === 0) {
      toast.error("Please select at least one ticket!");
      return;
    }

    if (!formData.movieDate) {
      toast.error("Please select a movie date!");
      return;
    }

    newData(
      data?.title || "",
      data?.id || 0,
      formData.movieDate,
      adultsCount,
      childrenCount,
      seats
    );
    navigate("/seats");
  };

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-10">
      <Stepper />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-auto sm:h-auto lg:[70vh] mb-5 sm:mb-20 p-5 sm:p-7 rounded-lg bg-[#2e2e2e] flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-[300px] max-w-sm mx-auto sm:mx-0 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w400/${data?.poster_path}`}
              alt={data?.title}
              className="w-full h-[350px] rounded-lg sm:h-[350px] sm:object-cover sm:w-[300px] object-contain"
            />
          </div>

          <div className="flex flex-col w-full gap-4 text-center sm:text-left">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-accent">
                {data?.title?.toUpperCase()}
              </h1>
              <h1 className="text-base sm:text-lg font-semibold text-secondary">
                FILMIFY BELGRADE
              </h1>

              <div className="mt-2">
                <Controller
                  name="movieDate"
                  control={control}
                  rules={{ required: "Please select a movie date" }}
                  render={({ field }) => (
                    <SelectForMoviedate
                      {...field}
                      control={control}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  )}
                />
              </div>
              {errors.movieDate && (
                <p className="text-red-500 text-center text-xs mt-2 ">
                  Please select a movie date.
                </p>
              )}

              <div className="w-full mt-4 text-accent">
                <hr className="w-full mb-3 border-gray-600" />

                <div className="flex justify-between items-center mb-3">
                  <h1 className="text-sm sm:text-lg">Adults</h1>
                  <div className="flex items-center text-2xl gap-2">
                    <MinusCircleIcon
                      width={24}
                      className="text-secondary"
                      onClick={() => removeTicket("adults")}
                    />
                    {userData?.adultsCount || 0}{" "}
                    <PlusCircleIcon
                      width={24}
                      className="text-secondary"
                      onClick={() => addTicket("adults")}
                    />
                  </div>
                </div>

                <hr className="w-full mb-3 border-gray-600" />

                <div className="flex justify-between items-center mb-3">
                  <h1 className="text-sm sm:text-lg">Children</h1>
                  <div className="flex items-center text-2xl gap-2">
                    <MinusCircleIcon
                      width={24}
                      className="text-secondary"
                      onClick={() => removeTicket("children")}
                    />
                    {userData?.childrenCount || 0}{" "}
                    <PlusCircleIcon
                      width={24}
                      className="text-secondary"
                      onClick={() => addTicket("children")}
                    />
                  </div>
                </div>

                <hr className="w-full mb-3 border-gray-600" />

                <p className="text-gray-400 text-xs sm:text-sm">
                  You can book a maximum of 6 tickets/day
                </p>

                <div className="flex justify-center sm:justify-end mt-5">
                  <Button
                    type="submit"
                    className="w-40 sm:w-48 rounded-3xl bg-secondary hover:bg-orange-600"
                  >
                    NEXT STEP
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTicket;
