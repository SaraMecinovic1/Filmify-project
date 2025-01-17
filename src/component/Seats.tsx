import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const SeatsBox = () => {
  return (
    <div className="w-[600px] mr-10 h-auto flex flex-col px-10 ">
      <div className="flex flex-row justify-center mb-4">
        <span className="mr-2 text-lg text-accent font-medium px-5">1.</span>
        {[...Array(6)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2 text-accent"
            id={`seat-1-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        <span className="mr-2 text-lg font-medium  text-accent px-5 ">2.</span>
        {[...Array(7)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2 text-accent"
            id={`seat-2-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        <span className="mr-2 text-lg font-medium  text-accent px-5">3.</span>
        {[...Array(8)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2 text-accent"
            id={`seat-3-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        <span className="mr-2 text-lg font-medium  text-accent px-5">4.</span>
        {[...Array(9)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2 text-accent"
            id={`seat-4-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        <span className="mr-2 text-lg font-medium  text-accent px-5">5.</span>
        {[...Array(10)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2 text-accent"
            id={`seat-5-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        <span className="mr-2 text-lg font-medium  text-accent px-5">6.</span>
        {[...Array(11)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2 text-accent"
            id={`seat-6-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        <span className="mr-2 text-lg font-medium  text-accent px-5">7.</span>
        {[...Array(12)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2 text-accent"
            id={`seat-7-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SeatsBox;
