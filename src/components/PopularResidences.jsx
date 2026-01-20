import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const residences = [
  {
    title: "Luxury Villa with Ocean View",
    location: "Malibu, California",
    price: "$2,450,000",
    desc: "A premium oceanfront villa featuring modern architecture, spacious interiors, and breathtaking sea views.",
    features: ["5 Beds", "4 Baths", "4200 sqft"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    ],
    imageSide: "left",
  },
  {
    title: "Modern City Apartment",
    location: "New York, USA",
    price: "$1,780,000",
    desc: "A stylish apartment located in the heart of the city, offering luxury living with world-class amenities.",
    features: ["3 Beds", "2 Baths", "2100 sqft"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    ],
    imageSide: "right",
  },
  {
    title: "Spacious Family Home",
    location: "Austin, Texas",
    price: "$1,250,000",
    desc: "A warm and spacious family home in a peaceful neighborhood, perfect for modern family living.",
    features: ["4 Beds", "3 Baths", "3200 sqft"],
    images: [
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    ],
    imageSide: "left",
  },
];

const PopularResidences = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((item, index) => {
        const images = item.querySelectorAll(".res-image");
        const content = item.querySelector(".res-content");

        const isLeft = residences[index].imageSide === "left";

        // 🔥 TIMELINE PER RESIDENCE
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
          },
        });

        // Main image (edge slide)
        tl.from(images[0], {
          x: isLeft ? -320 : 320,
          opacity: 0,
          scale: 0.92,
          duration: 1.2,
          ease: "power3.out",
        });

        // Secondary images (opposite vertical offsets)
        tl.from(
          images[1],
          {
            y: 220,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.9"
        );

        tl.from(
          images[2],
          {
            y: -220,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );

        // Content stagger
        tl.from(
          content.children,
          {
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

        // 🔄 HORIZONTAL PARALLAX (opposite direction)
        images.forEach((img, i) => {
          const strength = i === 0 ? 40 : 25;
          const direction =
            i % 2 === 0
              ? isLeft
                ? -strength
                : strength
              : isLeft
              ? strength
              : -strength;

          gsap.to(img, {
            x: direction,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Our Popular Residences
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after properties, carefully selected for
            luxury, comfort, and long-term value.
          </p>
        </div>

        {/* Residences */}
        <div className="space-y-36">
          {residences.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="grid lg:grid-cols-2 gap-20 items-center"
            >
              {/* Images */}
              <div
                className={`grid grid-cols-2 gap-4 ${
                  item.imageSide === "right" ? "lg:order-2" : ""
                }`}
              >
                <div className="res-image col-span-2 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="res-image rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={item.images[1]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="res-image rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={item.images[2]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`res-content ${
                  item.imageSide === "right" ? "lg:order-1" : ""
                }`}
              >
                <h3 className="text-3xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item.location}
                </p>

                <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
                  {item.desc}
                </p>

                <div className="mt-6 flex gap-6 text-sm text-gray-600">
                  {item.features.map((f, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white rounded-full shadow"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-8">
                  <span className="text-2xl font-semibold text-primary">
                    {item.price}
                  </span>

                  <button
                    className="px-7 py-3 bg-primary text-white rounded-full
                    transition-all duration-300
                    hover:scale-105 hover:shadow-xl
                    active:scale-95"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularResidences;
