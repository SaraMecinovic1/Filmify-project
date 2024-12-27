import { useNavigate } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
  voteAverage: number;
}

const MovieCard = ({ id, title, posterPath, voteAverage }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="shadow-lg rounded-md overflow-hidden flex flex-col cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="w-full h-auto"
      />
      <div className="p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h3 className="text-sm font-medium text-[#c9c7c7] mr-4 line-clamp-2">
          {title.toUpperCase()}
        </h3>
        <p className="flex items-center text-sm mt-2 sm:mt-0 text-[#c9c7c7]">
          <StarIcon width={17} className="text-yellow-600 mb-0.5 mr-1" />
          {voteAverage.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
