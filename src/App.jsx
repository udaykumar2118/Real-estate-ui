import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import ScrollToTop from "./utils/ScrollToTop";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
