import { Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./component/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./component/Footer";
import DetailsMovie from "./pages/DetailsPage/DetailsMovie";
import { useState } from "react";
import Movies from "./pages/MoviesPage/Movies";
import Upcoming from "./pages/UpcomingPage/Upcoming";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full font-inter">
        {!isLoading && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={<Movies setIsLoading={setIsLoading} />}
          />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route
            path="/movie/:id"
            element={<DetailsMovie setIsLoading={setIsLoading} />}
          />
        </Routes>
        {!isLoading && <Footer />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
