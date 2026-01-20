import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const primaryBtnRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Background reveal (cinematic)
      tl.fromTo(
        overlayRef.current,
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.2,
          ease: "power4.inOut",
        }
      );

      // Text reveal (depth, not jumpy)
      tl.from(
        contentRef.current.children,
        {
          y: 28,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Button settle (authority feel)
      tl.from(
        primaryBtnRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Magnetic button (very subtle)
  const handleMouseMove = (e) => {
    const rect = primaryBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(primaryBtnRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(primaryBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        {/* Reveal mask */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black origin-top"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Find Your <br /> Dream Home?
          </h2>

          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Let Dwello guide you through every step of your real estate
            journey — from property discovery to confident ownership.
          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <button
              ref={primaryBtnRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="px-9 py-4 bg-primary text-white rounded-full font-semibold
                transition-shadow duration-300
                hover:shadow-2xl"
            >
              Get Started
            </button>

            <button
              className="px-9 py-4 border border-white rounded-full font-semibold
                transition-all duration-300
                hover:bg-white hover:text-black"
            >
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
