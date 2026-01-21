import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const VIDEO_URL =
  "https://resource.flexclip.com/templates/video/720p/modern-minimal-clear-icon-real-estate-sale-promo.mp4?v=1.1.3.2.4";

const POSTER_URL =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c";

const Hero = () => {
  const videoWrapRef = useRef(null);
  const textRef = useRef(null);
  const hasAnimated = useRef(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // 🔒 Prevent React 18 double animation
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Video entrance animation (ONCE)
    gsap.fromTo(
      videoWrapRef.current,
      { scale: 1.08, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        clearProps: "transform",
      }
    );

    // Text animation (ONCE)
    gsap.fromTo(
      textRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="min-h-[90vh] bg-light overflow-hidden flex items-center pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.6fr] gap-24 items-center w-full">

        {/* LEFT CONTENT */}
        <div ref={textRef}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            Find Your <br /> Dream Home
          </h1>

          <p className="mt-6 text-gray-600 max-w-md text-lg">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>

          <button
            className="
              mt-10 px-10 py-4 bg-primary text-white rounded-full text-sm font-medium
              transition-all duration-300 hover:scale-105 hover:shadow-2xl
              active:scale-95
            "
          >
            Sign up
          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div
          ref={videoWrapRef}
          className="
            relative overflow-hidden shadow-2xl
            rounded-[3rem]
            h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh]
          "
        >
          {/* Poster fallback */}
          {!videoLoaded && (
            <img
              src={POSTER_URL}
              alt="Luxury Home"
              className="absolute bg-POSTER_URL inset-0 w-full h-full object-cover"
            />
          )}

          {/* Soft luxury overlay */}
          <div className="absolute inset-0 bg-black/10 z-10" />

          <video
            className="w-full h-full object-cover"
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            poster={POSTER_URL}
            onLoadedData={() => setVideoLoaded(true)}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
