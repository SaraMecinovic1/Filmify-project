import { useLocation } from "react-router-dom";

const Stepper = () => {
  const location = useLocation();

  const getStepClass = (path: string) =>
    location.pathname.startsWith(path) ? "text-secondary" : "text-textColor";

  return (
    <div className="w-full h-[60px] mt-[90px] flex flex-col items-start">
      <div className="w-full flex items-center justify-start">
        <ul className="flex space-x-2">
          <li className={`text-lg ${getStepClass("/reservation")}`}>Tickets</li>
          <li className="text-lg text-textColor">&gt;</li>
          <li className={`text-lg ${getStepClass("/seats")}`}>Seats</li>
          <li className="text-lg text-textColor">&gt;</li>
          <li className={`text-lg ${getStepClass("/book")}`}>Book</li>
        </ul>
      </div>
      <hr className="w-full border-t border-gray-600 mt-2" />
    </div>
  );
};

export default Stepper;
