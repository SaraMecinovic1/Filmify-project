import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/HomePage/Home";
import Movies from "./pages/MoviesPage/Movies";
import Upcoming from "./pages/UpcomingPage/Upcoming";
import DetailsMovie from "./pages/DetailsPage/DetailsMovie";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full font-inter">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:id" element={<DetailsMovie />} />
        </Routes>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
