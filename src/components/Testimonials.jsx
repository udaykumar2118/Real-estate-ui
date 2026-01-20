import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Buyer",
    quote:
      "Dwello made finding our dream home effortless. The team was professional, transparent, and supportive throughout the process.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    role: "Property Investor",
    quote:
      "Their market knowledge and attention to detail helped me secure high-value properties with confidence.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Davis",
    role: "First-Time Buyer",
    quote:
      "As a first-time buyer, I felt guided and informed at every step. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Daniel Brown",
    role: "Villa Owner",
    quote:
      "From site visits to final paperwork, Dwello handled everything smoothly and professionally.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const Testimonials = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 25,
      ease: "linear",
      repeat: -1,
    });

    // Pause on hover
    track.addEventListener("mouseenter", () => tween.pause());
    track.addEventListener("mouseleave", () => tween.resume());

    return () => tween.kill();
  }, []);

  return (
    <section className="py-24 bg-light overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-primary">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Real stories from people who trusted Dwello to find their perfect home.
        </p>
      </div>

      {/* Auto Scroll Track */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 w-max"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="
                w-[360px] bg-white p-8 rounded-2xl shadow-lg
                flex-shrink-0
                transition-transform duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{item.quote}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
