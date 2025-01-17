import Stepper from "@/component/Stepper";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/store/dataStore";

const Book = () => {
  const { userData } = useDataStore();
  const totalTickets =
    (userData?.adultsCount || 0) + (userData?.childrenCount || 0);

  return (
    <div className="w-full h-full px-6 flex flex-col items-center justify-center  text-accent">
      <Stepper />
      <div className="w-full max-w-md sm:max-w-lg p-8 bg-[#2e2e2e] rounded-lg shadow-lg flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold mb-3">-BOOKING DETAILS-</h2>
        <div className="w-full flex justify-center text-center space-y-2">
          <div className="text-left space-y-2">
            <p className="text-lg text-textColor">
              Movie:{" "}
              <span className="font-semibold ml-2 text-lg italic  text-white">
                {userData?.movieTitle}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Tickets:{" "}
              <span className="font-semibold ml-2 italic text-lg text-white">
                {totalTickets}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Date:{" "}
              <span className="font-semibold ml-2 italic text-lg  text-white ">
                {userData?.date}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Time:{" "}
              <span className="font-semibold ml-2 italic text-lg  text-white">
                20:00 PM
              </span>
            </p>
            <p className="text-lg text-textColor">
              Seats:{" "}
              <span className="font-semibold ml-2 italic text-lg  text-white">
                {userData?.seats?.join(", ")}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 w-full flex justify-center">
          <Button className="w-60 bg-secondary  hover:bg-orange-600 text-white py-2 rounded-lg">
            MAKE FINAL RESERVATION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Book;