export interface Movie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTIzZTg2YTJiMDk3OGU2ZmE4YjVlZWIzZWZlYzY3ZCIsIm5iZiI6MTczNDY5NTk0Mi42MzYsInN1YiI6IjY3NjU1YzA2YjY3ZTQ1NDcyNTVkZjQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJUGwtAa7g44jaY-Ojezh7bBQFT-TVddfWfgEksczb0",
  },
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! FetchPopularMovies status: ${response.status}`
      );
    }
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId: number): Promise<Movie> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTIzZTg2YTJiMDk3OGU2ZmE4YjVlZWIzZWZlYzY3ZCIsIm5iZiI6MTczNDY5NTk0Mi42MzYsInN1YiI6IjY3NjU1YzA2YjY3ZTQ1NDcyNTVkZjQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJUGwtAa7g44jaY-Ojezh7bBQFT-TVddfWfgEksczb0",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! FetchMovieDetails status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! FetchPopularMovies status: ${response.status}`
      );
    }
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! FetchPopularMovies status: ${response.status}`
      );
    }
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};
