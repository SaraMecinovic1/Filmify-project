import { useQuery } from "@tanstack/react-query";
import { fetchReservationById } from "@/services/supabaseServices";
import { useParams } from "react-router-dom";

const ReservationInfo = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["reservationById", id],
    queryFn: () => fetchReservationById(id as string),
  });

  if (isLoading) {
    return <p className="mt-[100px]">Loading...</p>;
  }

  if (error) {
    return <p className="mt-[100px]">Error fetching reservation</p>;
  }

  if (!data) {
    return <p className="mt-[100px]">No reservation found</p>;
  }

  return (
    <div className="w-full  h-auto px-6 flex flex-col items-center justify-center text-textColor">
      <div className="w-full max-w-xl sm:max-w-lg h-auto text-center mb-7 ">
        <h1 className="font-semibold text-3xl mb-4 text-secondary mt-[100px]">
          Hi {data.email}!
        </h1>
        <p className="font-normal text-xl">
          Congratulations on creating a movie reservation! Your reservation ID
          is
          <span className="font-bold"> {data.id}</span>. If you need help, write
          to
          <span className="font-semibold"> info@filmify.com</span>.
        </p>
      </div>
      <div className="w-full max-w-xl sm:max-w-lg p-8 bg-[#2e2e2e] rounded-lg shadow-lg flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold mb-3">RESERVATION DETAILS</h2>
        <div className="w-full flex justify-center text-center space-y-2">
          <div className="text-left space-y-2">
            <p className="text-lg text-textColor">
              Movie:
              <span className="font-semibold ml-2 text-lg italic text-white">
                {data.movie_title}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Adult tickets:
              <span className="font-semibold ml-2 italic text-lg text-white">
                {data.adults}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Children tickets:
              <span className="font-semibold ml-2 italic text-lg text-white">
                {data.kids}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Date:
              <span className="font-semibold ml-2 italic text-lg text-white">
                {data.date}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Time:
              <span className="font-semibold ml-2 italic text-lg text-white">
                {data.time}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Seats:
              <span className="font-semibold ml-2 italic text-lg text-white">
                {data?.seats}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
