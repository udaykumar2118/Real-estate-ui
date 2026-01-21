import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-light/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Dwello
        </Link>

        {/* Menu */}
        <nav className="md:flex gap-8 text-sm font-medium text-dark hidden">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/about" className="hover:text-secondary">About</Link>
          <Link to="/contact" className="hover:text-secondary">Contact</Link>
        </nav>

        {/* Button */}
         <button className="px-5 py-2 bg-primary text-white rounded-full text-sm">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
