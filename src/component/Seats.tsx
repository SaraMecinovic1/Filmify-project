import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons"; // Importujte faSquare

const SeatsBox = () => {
  return (
    <div className="w-[600px] h-auto flex flex-col px-10 ">
      <div className="flex flex-row justify-center mb-4"> 
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
        {[...Array(7)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2  text-accent"
            id={`seat-2-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        {[...Array(8)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2  text-accent"
            id={`seat-3-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        {[...Array(9)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2  text-accent"
            id={`seat-4-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        {[...Array(10)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2  text-accent"
            id={`seat-5-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        {[...Array(11)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2  text-accent"
            id={`seat-6-${index}`}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mb-4">
        {[...Array(12)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faSquare}
            className="text-2xl mx-2  text-accent"
            id={`seat-7-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SeatsBox;
