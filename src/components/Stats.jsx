import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 8000, label: "Happy Customers", suffix: "+" },
  { value: 6000, label: "Premium Properties", suffix: "+" },
  { value: 2000, label: "Trusted Agents", suffix: "+" },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, index) => {
        const stat = statsData[index];

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: stat.value,
            duration: 2,
            ease: "power3.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            onUpdate: function () {
              el.innerText =
                Math.floor(el.innerText) + stat.suffix;
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {statsData.map((item, index) => (
          <div key={index}>
            <h2
              ref={(el) => (numberRefs.current[index] = el)}
              className="text-5xl font-bold text-primary"
            >
              0{item.suffix}
            </h2>
            <p className="mt-2 text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
