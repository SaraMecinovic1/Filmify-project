import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link, useNavigate } from "react-router-dom";
import {
  Bars4Icon,
  XMarkIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../../components/ui/button";
import { toast } from "react-toastify";
import { logOut } from "@/services/supabaseServices";
import { FaHeart } from "react-icons/fa";

const NavBar = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      toast.success(`Welcome back to Filmify 👋`);
    }
  }, []);

  const handleLogout = async () => {
    const isLoggedOut = await logOut();
    if (isLoggedOut) {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      toast.info("You have been logged out.");
    }
  };

  return (
    <nav>
      <div className="bg-[#2e2e2e] fixed top-0 z-30 mb-8 w-full h-[70px] py-4 px-10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <Link to="/" className="text-secondary text-4xl font-bebas  mr-10">
              FILMIFY
            </Link>

            {/* Menu for larger screens */}
            {isAboveMediumScreen && (
              <div className="flex items-center gap-8">
                <Link
                  to="/movies"
                  className="text-textColor text-lg hover:text-accent"
                >
                  Movies
                </Link>
                <Link
                  to="/upcoming"
                  className="text-textColor text-lg hover:text-accent"
                >
                  Upcoming
                </Link>
              </div>
            )}
          </div>

          {isAboveMediumScreen && (
            <div className="flex items-center gap-4 ml-auto">
              <FaHeart
                onClick={() => navigate("/mylistforwatching")}
                fontSize={23}
                width={24}
                height={24}
                className="text-accent mr-"
              />
              {isLoggedIn ? (
                <div className="flex flex-row">
                  <Button
                    onClick={handleLogout}
                    className="bg-secondary hover:bg-[#e95325]  text-accent"
                  >
                    <ArrowRightStartOnRectangleIcon className="h-10 w-10 " />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => navigate("/signup")}
                  className="bg-secondary hover:bg-[#e95325] text-accent"
                >
                  <UserCircleIcon className="h-10 w-10" />
                  Sign In
                </Button>
              )}
            </div>
          )}

          {/* Hamburger menu for smaller screens */}
          {!isAboveMediumScreen && (
            <button
              className="bg-[#e67b5b] p-2 rounded-full"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars4Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-[#2e2e2e] drop-shadow-xl">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-7 w-7 text-white" />
            </button>
          </div>

          <div className="flex w-full flex-col gap-10 text-xl p-6 pl-12">
            <Link to="/movies" className="text-white hover:text-accent">
              Movies
            </Link>
            <Link to="/upcoming" className="text-white hover:text-accent">
              Upcoming
            </Link>
            <Link
              to="/mylistforwatching"
              className="text-white hover:text-accent flex flex-row"
            >
              My list
              <FaHeart
                onClick={() => navigate("/mylistforwatching")}
                fontSize={18}
                width={24}
                height={24}
                className="text-accent ml-2 mt-1"
              />
            </Link>
          </div>

          <div className="mt-auto p-6 flex items-center gap-4 pl-12">
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                className="bg-secondary hover:bg-[#e95325] text-accent"
              >
                <ArrowRightStartOnRectangleIcon className="h-10 w-10" />
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/signup")}
                className="bg-secondary hover:bg-[#e95325] text-accent"
              >
                <UserCircleIcon className="h-10 w-10" />
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
