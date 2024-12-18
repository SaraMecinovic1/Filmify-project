import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import {
  Bars4Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const NavBar = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // Flex-based centriranje
  const flexBetween = "flex items-center justify-between";
  const flexCenter = "flex items-center justify-center";

  return (
    <nav>
      {/* Main navbar container */}
      <div
        className={`${flexBetween} bg-primary fixed top-0 z-30 w-full h-[80px] py-4 px-6`}
      >
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
          {/* LEFT SIDE */}
          <h2 className="text-textPrimary text-2xl font-bold">FILMIFY</h2>

          {/* RIGHT SIDE */}
          {isAboveMediumScreen ? (
            <div className="flex items-center gap-8">
              <Link
                to="/films"
                className="text-textPrimary text-lg hover:text-accent"
              >
                Films
              </Link>
              <Link
                to="/events"
                className="text-textPrimary text-lg hover:text-accent"
              >
                Events
              </Link>

              <div className={`${flexCenter} gap-4`}>
                <UserCircleIcon className="h-6 w-6 text-textPrimary" />
                <p className="text-textPrimary text-lg hover:text-accent">
                  SIGN IN
                </p>
              </div>
            </div>
          ) : (
            <button
              className="bg-secondary p-2 rounded-full"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars4Icon className="h-6 w-6 text-textPrimary" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary drop-shadow-xl">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="flex flex-col gap-10 text-2xl p-6">
            <Link to="/films" className="text-textPrimary hover:text-accent">
              Films
            </Link>
            <Link to="/events" className="text-textPrimary hover:text-accent">
              Events
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
