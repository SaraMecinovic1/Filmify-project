import Loader from "@/component/loading";
import SeatsBox from "@/component/Seats";
import Stepper from "@/component/Stepper";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Seats = (props: Props) => {
  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-10">
      <Stepper />

      <div className="w-full h-auto mb-5 sm:mb-20 p-3 sm:p-7 rounded-lg bg-[#2e2e2e] flex flex-col items-center gap-5">
        <div className="mb-">
          <h1 className="font-normal text-xl text-accent">SCREEN</h1>
        </div>

        <SeatsBox />
        <hr className=" border-gray-700 w-full  " />
        <div className="w-full flex flex-row justify-center">
          <div className="mx-3">
            <FontAwesomeIcon
              icon={faSquare}
              className="text-xl mx-2 text-accent"
            />
            <p className="text-sm text-textColor">FREE</p>
          </div>
          <div className="mx-3 text-center">
            <FontAwesomeIcon
              icon={faSquareXmark}
              className="text-xl mx-2 text-accent"
            />
            <p className="text-sm text-textColor">CHOSEN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seats;
