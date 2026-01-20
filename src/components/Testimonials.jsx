import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".testimonial-card");

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + trackRef.current.offsetWidth,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-light py-24 overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-primary text-center">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          Real stories from people who trusted Dwello to find their perfect home.
        </p>
      </div>

      {/* Horizontal Track */}
      <div ref={trackRef} className="flex gap-10 px-10 w-max">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="testimonial-card w-[380px] bg-white p-8 rounded-2xl shadow-lg flex-shrink-0 cursor-pointer"
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, {
                y: -10,
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                duration: 0.3,
              })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, {
                y: 0,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                duration: 0.3,
              })
            }
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
    </section>
  );
};

export default Testimonials;
