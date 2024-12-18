import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import {
  Bars4Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const NavBar = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav>
      <div className="bg-[#4527a0] fixed top-0 z-30 w-full h-[80px] py-4 px-6">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <h2 className="bg-primary text-2xl font-bold">Filmify</h2>
          {isAboveMediumScreen ? (
            <div className="flex items-center gap-8">
              <Link
                to="/films"
                className="text-white text-lg hover:text-accent"
              >
                Films
              </Link>
              <Link
                to="/events"
                className="text-white text-lg hover:text-accent"
              >
                Events
              </Link>
              <div className="flex items-center gap-4">
                <UserCircleIcon className="h-6 w-6 bg-primary" />
                
                {/* <p className="bg-primary text-lg hover:text-accent">SIGN IN</p> */}
              </div>
            </div>
          ) : (
            <button
              className="bg-secondary p-2 rounded-full"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars4Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary drop-shadow-xl">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex flex-col gap-10 text-2xl p-6">
            <Link to="/films" className="text-white hover:text-accent">
              Films
            </Link>
            <Link to="/events" className="text-white hover:text-accent">
              Events
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

// type Props = {};

// function NavBar() {
//   return (
//     <div className="text-red-700 w-full h-[70px] flex-row items-center justify-between ">
//       <div>hello</div>
//     </div>
//   );
// }

// export default NavBar;
