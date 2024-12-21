import Advertisement from "@/component/Advertisement";
import Loader from "@/component/loading";
import PopularMovies from "@/component/PopularMovies";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen px-5 mt-[90px]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full">
            <Advertisement />
          </div>
          <PopularMovies />
        </>
      )}
    </div>
  );
}
