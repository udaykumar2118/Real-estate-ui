import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const whyChooseData = [
  {
    title: "Verified Properties",
    desc: "Legally verified homes ensuring secure and transparent investments.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    title: "Expert Guidance",
    desc: "Professional advisors helping you choose the right home confidently.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "End-to-End Support",
    desc: "From site visits to registration, we manage everything smoothly.",
    image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.16,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      {/* OUTER PADDING (BOTH SIDES) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 w-full overflow-hidden">

          {/* LEFT PANEL */}
          <div
            className="
              bg-[#233C3B] text-white flex items-center
              px-10 py-20
              rounded-tl-[56px] rounded-bl-[56px]
            "
          >
            <div>
              <h2 className="text-4xl font-bold leading-tight">
                Why <br /> Choose Us?
              </h2>
              <p className="mt-5 text-white/80 max-w-xs text-sm leading-relaxed">
                Trusted real estate solutions crafted around your lifestyle
                and long-term value.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white flex items-center px-10 py-20
            rounded-tr-[56px] rounded-br-[56px]"
          >
            <div className="w-full space-y-12">
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="flex items-start gap-6"
                >
                  {/* IMAGE CIRCLE */}
                  <div
                    className="
                      w-16 h-16 rounded-full overflow-hidden shadow-md
                      transition-transform duration-500 hover:scale-105
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 max-w-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
