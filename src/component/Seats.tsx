import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const SeatsBox = () => {
  return (
    <div className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] mx-auto h-auto flex flex-col px-5 sm:px-6 lg:px-8">
      {[...Array(7)].map((_, rowIndex) => {
        // Array(7) je mojih 7 redova
        const seatCount = rowIndex + 6; //seatCount-broj sedišta u svakom redu,1.red 0+6,i za svaki ostali index+6 ,tj za pojedno mesto vise u svakom sl redu
        return (
          <div key={rowIndex} className="flex flex-row justify-center mb-4">
            <span className="mr-2 text-sm sm:text-lg font-medium text-accent px-3">
              {rowIndex + 1}.
            </span>
            {[...Array(seatCount)].map((_, seatIndex) => (
              <FontAwesomeIcon
                key={seatIndex}
                icon={faSquare}
                className="text-lg sm:text-2xl mx-1 sm:mx-2 text-accent"
                id={`seat-${rowIndex + 1}-${seatIndex}`}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SeatsBox;
