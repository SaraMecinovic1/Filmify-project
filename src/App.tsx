import { Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./component/Navbar";
import Home from "./pages/Home/Home";
import Events from "./pages/EventsPage/Event";
import Footer from "./component/Footer";
import DetailsMovie from "./pages/DetailsPage/DetailsMovie";
import { useState } from "react";
import Movies from "./pages/Movies/Movies";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full font-inter">
      {!isLoading && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<Movies setIsLoading={setIsLoading} />}
        />
        <Route path="/events" element={<Events />} />
        <Route
          path="/movie/:id"
          element={<DetailsMovie setIsLoading={setIsLoading} />}
        />
      </Routes>
      {!isLoading && <Footer />}
    </div>
  );
}

export default App;
