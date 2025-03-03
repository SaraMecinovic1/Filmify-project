import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/HomePage/Home";
import Movies from "./pages/MoviesPage/Movies";
import Upcoming from "./pages/UpcomingPage/Upcoming";
import DetailsMovie from "./pages/DetailsPage/DetailsMovie";
import Login from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import MyWatchingList from "./pages/MyListPage";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import BookTicket from "./pages/Reservation/BookTicket";
import Seats from "./pages/Reservation/BookSeats";
import Book from "./pages/Reservation/Book";
import SignUpToApp from "./pages/SignUpPage";
import ReservationInfo from "./pages/InfoPage/ReservationInfo";

const queryClient = new QueryClient();

function App() {
  const { fetchUser, subscribeAuth } = useAuthStore();

  useEffect(() => {
    fetchUser();
    subscribeAuth();
  }, [fetchUser, subscribeAuth]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full font-inter">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:id" element={<DetailsMovie />} />
          <Route path="/signup" element={<SignUpToApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watchlist" element={<MyWatchingList />} />
          <Route path="/tickets/:id" element={<BookTicket />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/book" element={<Book />} />
          <Route path="/your-qr/:id" element={<ReservationInfo />} />
        </Routes>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
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
