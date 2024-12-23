import { Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./component/Navbar";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import Events from "./pages/EventsPage/Event";
import Footer from "./component/Footer";
import DetailsMovie from "./pages/DetailsPage/DetailsMovie";

function App() {
  return (
    <div className="w-full font-inter">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Films />} />
        <Route path="/events" element={<Events />} />
        <Route path="/movie/:id" element={<DetailsMovie />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
