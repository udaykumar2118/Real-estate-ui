import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const supportItems = [
  { text: "Verified & legally approved properties", active: true },
  { text: "Trusted real estate advisors", active: true },
  { text: "Transparent pricing with no hidden charges", active: true },
  { text: "Personalized property recommendations", active: true },
  { text: "Complete documentation & registration support", active: true },
  { text: "Site visits & appointment coordination", active: true },
];

const PropertySupport = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const iconRefs = useRef([]);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Checklist animation
      itemsRef.current.forEach((item, index) => {
        const fromX = index % 2 === 0 ? -80 : 80;

        gsap.fromTo(
          item,
          { x: fromX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );

        gsap.to(item, {
          y: -6,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Info text animation
      gsap.fromTo(
        infoRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Image parallax
      gsap.fromTo(
        imageRef1.current,
        { y: 60 },
        {
          y: -20,
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        imageRef2.current,
        { y: -40 },
        {
          y: 30,
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – Support List */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-16">
            Reliable Property Support
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {supportItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="group flex items-center gap-5 px-6 py-5 rounded-2xl bg-white shadow-lg cursor-pointer"
                onMouseEnter={() => {
                  gsap.to(itemsRef.current[index], {
                    y: -10,
                    rotate: 0.5,
                    duration: 0.3,
                  });
                  gsap.to(iconRefs.current[index], {
                    rotate: 360,
                    scale: 1.1,
                    duration: 0.6,
                  });
                }}
                onMouseLeave={() => {
                  gsap.to(itemsRef.current[index], {
                    y: 0,
                    rotate: 0,
                    duration: 0.3,
                  });
                  gsap.to(iconRefs.current[index], {
                    rotate: 0,
                    scale: 1,
                    duration: 0.4,
                  });
                }}
              >
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-dark text-dark"
                >
                  <Check size={18} />
                </div>

                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – Info + Images */}
        <div className="relative">
          <div ref={infoRef} className="mb-10">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              End-to-End Real Estate Assistance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From property discovery to legal verification and final
              registration, Dwello ensures a seamless, transparent, and
              stress-free experience for every buyer and investor.
            </p>
          </div>

          <div className="relative flex gap-6">
            <img
              ref={imageRef1}
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury home"
              className="w-1/2 rounded-2xl shadow-xl"
            />
            <img
              ref={imageRef2}
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="Modern villa"
              className="w-1/2 mt-20 rounded-2xl shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertySupport;
