import Loader from "@/component/loading";
import SeatsBox from "@/component/Seats";
import Stepper from "@/component/Stepper";
import React from "react";

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
      </div>
    </div>
  );
};

export default Seats;
