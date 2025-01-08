import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/HomePage/Home";
import Movies from "./pages/MoviesPage/Movies";
import Upcoming from "./pages/UpcomingPage/Upcoming";
import DetailsMovie from "./pages/DetailsPage/DetailsMovie";
import SignUp from "./pages/SignUpPage";
import Login from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="custom-toast"
      />
    </QueryClientProvider>
  );
}

export default App;
