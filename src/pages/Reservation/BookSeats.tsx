import SeatsBox from "@/component/Seats";
import Stepper from "@/component/Stepper";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const Seats = () => {
  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-8">
      <Stepper />

      <div className="w-full h-auto mb-5 p-3 sm:p-6 lg:p-8 rounded-lg bg-[#2e2e2e] flex flex-col items-center gap-2">
        <div className="mb-4">
          <h1 className="font-normal text-lg sm:text-xl text-accent">SCREEN</h1>
        </div>

        <SeatsBox />
        <hr className="border-gray-700 w-full" />
        <div className="w-full flex flex-row justify-center">
          <div className="mx-2 sm:mx-3">
            <FontAwesomeIcon
              icon={faSquare}
              className="text-lg sm:text-xl mx-2 text-accent"
            />
            <p className="text-xs sm:text-sm text-textColor">FREE</p>
          </div>
          <div className="mx-2 sm:mx-3 text-center">
            <FontAwesomeIcon
              icon={faSquareXmark}
              className="text-lg sm:text-xl mx-2 text-accent"
            />
            <p className="text-xs sm:text-sm text-textColor">CHOSEN</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-40 sm:w-40 lg:w-48 text-accent rounded-3xl bg-secondary hover:bg-orange-600"
        >
          NEXT STEP
        </Button>
      </div>
    </div>
  );
};

export default Seats;
