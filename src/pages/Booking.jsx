import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    title: "Luxury Super Deluxe",
    price: "$299 / night",
    desc: "Elegant luxury home with premium interiors and modern amenities.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    title: "Simple Family Room",
    price: "$399 / night",
    desc: "Perfect family residence with spacious living and comfort.",
    image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
  },
  {
    title: "Luxury Family Deluxe",
    price: "$499 / night",
    desc: "High-end family home with luxury finishes and open spaces.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Single Super Deluxe",
    price: "$599 / night",
    desc: "Premium single residence ideal for modern lifestyle.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
];

const Booking = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* HERO PARALLAX */
      gsap.to(".hero-bg", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* HERO TEXT */
      gsap.from(".hero-text > *", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });

      /* FILTER BAR */
      gsap.from(".filter-bar > *", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".filter-bar",
          start: "top 85%",
        },
      });

      /* ROOM SECTIONS */
      gsap.utils.toArray(".room-section").forEach((section, i) => {
        const img = section.querySelector(".room-image");
        const text = section.querySelector(".room-text");

        gsap.from(img, {
          x: i % 2 === 0 ? -150 : 150,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });

        gsap.from(text.children, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });

        gsap.to(img, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-[#F5F0E6] overflow-hidden">

        {/* HERO */}
        <section className="hero relative min-h-[65vh] flex items-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            className="hero-bg absolute inset-0 w-full h-full object-cover"
            alt="Booking"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="hero-text relative z-10 max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold mb-4">Rooms</h1>
            <p className="text-white/80 max-w-lg">
              Discover premium homes designed for comfort & elegance.
            </p>

            {/* FILTER BAR */}
            <div className="filter-bar mt-10 bg-white rounded-xl p-4 grid md:grid-cols-4 gap-4 text-dark shadow-2xl">
              <input type="date" className="border px-4 py-3 rounded-md" />
              <input type="date" className="border px-4 py-3 rounded-md" />
              <select className="border px-4 py-3 rounded-md">
                <option>Guests</option>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>Family</option>
              </select>
              <button className="bg-primary text-white rounded-md font-medium hover:scale-105 transition">
                Check Availability
              </button>
            </div>
          </div>
        </section>

        {/* ROOMS */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 space-y-24">

            {rooms.map((room, index) => (
              <div
                key={index}
                className={`room-section grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="room-image w-full h-[360px] object-cover transition-transform duration-[3500ms] hover:scale-110"
                  />
                </div>

                {/* TEXT */}
                <div className="room-text">
                  <h3 className="text-3xl font-bold text-primary">
                    {room.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{room.desc}</p>

                  <p className="mt-6 text-xl font-semibold text-primary">
                    {room.price}
                  </p>

                  <div className="mt-8 flex gap-4">
                    <button
  onClick={() => window.location.href = "/booking-success"}
  className="px-7 py-3 bg-primary text-white rounded-full hover:scale-105 transition"
>
  Book Now
</button>

                    <button className="px-7 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Booking;
