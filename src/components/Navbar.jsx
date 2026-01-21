import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-light/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">Dwello</h1>

        {/* Menu */}
        <nav className="md:flex gap-8 text-sm font-medium text-dark hidden ">
          <a className="cursor-pointer hover:text-secondary">Home</a>
          <a className="cursor-pointer hover:text-secondary">Service</a>
          <a className="cursor-pointer hover:text-secondary">Agents</a>
          <a className="cursor-pointer hover:text-secondary">Contact</a>
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
