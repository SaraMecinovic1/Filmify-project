import { InboxIcon } from "@heroicons/react/24/solid";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full mt-10 mb-8 p-10 bg-[#2e2e2e] grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-6">
      <div className="w-full h-full flex items-center ml-5">
        <Link to="/" className="text-secondary text-5xl font-bebas">
          FILMIFY
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-y-2">
        <h1 className="text-accent font-bold text-xl">CINEMA</h1>
        <Link
          to="/"
          className="text-textColor block  hover:text-secondary cursor-pointer"
        >
          Recommend
        </Link>
        <Link
          to="/movies"
          className="text-textColor block  hover:text-secondary cursor-pointer"
        >
          Movies
        </Link>
        <Link
          to="/upcoming"
          className="text-textColor block  hover:text-secondary cursor-pointer"
        >
          Upcoming
        </Link>
        <Link
          to="#"
          className="text-textColor block  hover:text-secondary cursor-pointer"
        >
          About Us
        </Link>
      </div>

      <div className="space-y-2 ml-5 sm:ml-5">
        <h1 className="text-accent font-bold text-xl">FOLLOW US</h1>
        <p className="text-textColor hover:text-secondary cursor-pointer">
          Instagram
        </p>
        <p className="text-textColor  hover:text-secondary cursor-pointer">
          Facebook
        </p>
        <p className="text-textColor  hover:text-secondary cursor-pointer">
          YouTube
        </p>
      </div>

      <div className="space-y-2">
        <h1 className="text-accent font-bold text-xl">CONTACT</h1>
        <p className="text-textColor flex items-center gap-2 cursor-pointer  hover:text-secondary">
          <InboxIcon className="w-5 h-4.5 text-textColor " />
          info@filmify.com
        </p>
        <p className="text-textColor flex items-center gap-2 cursor-pointer  hover:text-secondary">
          <Phone className="w-5 h-4.2 text-textColor" />
          +123 456 7890
        </p>
      </div>
    </div>
  );
}

export default Footer;
