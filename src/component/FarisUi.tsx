import { LucideEllipsisVertical } from "lucide-react";
import Image from "../assets/peakpx.jpg";

const FarisUi = () => {
  return (
    <div className="w-[450px] h-[450px] bg-red-300 mt-[120px]">
      {/* Komponenta */}
      <div className="max-w-md h-[100px] m-5 flex items-center bg-[#222222]">
        {/* Slika */}
        <div className="w-[130px] h-full mr-4">
          <img
            src={Image}
            alt="Song Image"
            className="w-full h-full object-cover "
          />
        </div>
        {/* Info */}
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-[85%] h-full flex flex-col text-left justify-center gap-1">
            <h1 className="text-white text-[23px]">Blaka Blaka</h1>
            <h1 className="text-[#898989] text-[16px]">
              Jala Brat, Buba Coreli
            </h1>
          </div>
          <div className="w-[10%] h-full flex items-center justify-center">
            <LucideEllipsisVertical
              className="text-[#898989] ml-[-10px]"
              size={34}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[70px] mt-10 px-5 bg-[#222222]">
        <hr className="w-full border-t-2 border-[#898989]" />
        <h1 className="text-right my-5 text-[17px] text-[#898989] ">SEE ALL</h1>
      </div>
    </div>
  );
};

export default FarisUi;
