import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import Events from "./pages/EventsPage/Event";

function App() {
  return (
    <div className="w-full ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
