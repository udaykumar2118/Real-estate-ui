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
  title: "Beachfront Modern Bungalow",
  location: "Santa Monica, California",
  price: "$3,150,000",
  desc: "A stunning beachfront bungalow featuring open-plan living, floor-to-ceiling glass walls, and uninterrupted ocean views.",
  features: ["4 Beds", "4 Baths", "3800 sqft"],
  images: [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  ],
  imageSide: "left",
},
{
  title: "Elegant Countryside Estate",
  location: "Napa Valley, California",
  price: "$2,980,000",
  desc: "A peaceful countryside estate surrounded by vineyards, offering luxury interiors, private gardens, and timeless architecture.",
  features: ["6 Beds", "5 Baths", "5200 sqft"],
  images: [
    "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  ],
  imageSide: "right",
},

];

const PopularResidences = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      residences.forEach((item, index) => {
        const baseIndex = index * 3;

        const mainImage = imageRefs.current[baseIndex];
        const img2 = imageRefs.current[baseIndex + 1];
        const img3 = imageRefs.current[baseIndex + 2];

        const fromX = item.imageSide === "left" ? -120 : 120;
        const oppositeX = -fromX;

        // TIMELINE PER CARD
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainImage,
            start: "top 80%",
          },
        });

        // MAIN IMAGE (edge slide)
        tl.from(mainImage, {
          x: fromX,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        // SMALL IMAGES (opposite direction)
        tl.from(
          [img2, img3],
          {
            x: oppositeX,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

        // TEXT
        tl.from(
          textRefs.current[index].children,
          {
            y: 20,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5"
        );
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
        <div className="space-y-28">
          {residences.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Images */}
              <div
                className={`grid grid-cols-2 gap-4 ${
                  item.imageSide === "right" ? "lg:order-2" : ""
                }`}
              >
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    ref={(el) =>
                      (imageRefs.current[index * 3 + i] = el)
                    }
                    className={`overflow-hidden rounded-3xl shadow-xl ${
                      i === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Text */}
              <div
                ref={(el) => (textRefs.current[index] = el)}
                className={`${item.imageSide === "right" ? "lg:order-1" : ""}`}
              >
                <h3 className="text-3xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item.location}
                </p>
                <p className="mt-6 text-gray-600 max-w-md">
                  {item.desc}
                </p>

                <div className="mt-6 flex gap-4 text-sm">
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
                  <button className="px-7 py-3 bg-primary text-white rounded-full hover:scale-105 transition">
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
