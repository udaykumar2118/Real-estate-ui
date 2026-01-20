import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Expert Guidance",
    desc: "Our experienced agents provide expert guidance at every step to ensure a smooth and successful property journey.",
  },
  {
    title: "Personalized Service",
    desc: "We tailor our services to match your needs, preferences, and lifestyle for the perfect home match.",
  },
  {
    title: "Trusted by Thousands",
    desc: "Thousands of happy customers trust us for transparent deals and premium real-estate solutions.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of clients trust us to find their
            perfect home with confidence and ease.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white p-8 rounded-2xl shadow-md transition-transform"
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  y: -10,
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.12)",
                  duration: 0.3,
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  y: 0,
                  boxShadow:
                    "0 10px 20px rgba(0,0,0,0.08)",
                  duration: 0.3,
                })
              }
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
