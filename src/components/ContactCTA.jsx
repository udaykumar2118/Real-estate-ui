import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bgImages = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
];

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  const [index, setIndex] = useState(0);

  /* 🔁 Background image rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* 🌫️ Image cross-fade */
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.4, ease: "power2.out" }
    );
  }, [index]);

  /* 🎥 Animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(imgRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Left text reveal
      gsap.from(leftRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Form card animation
      gsap.from(formRef.current, {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={bgImages[index]}
          alt="Home background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div
            ref={leftRef}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Let’s Find Your <br /> Perfect Home
            </h2>

            <div className="space-y-4 text-white/90">
              <p>📍 71 Pilgrim Avenue, Chevy Chase, MD</p>
              <p>📞 +1 (713) 621-7636</p>
              <p>✉️ support@dwello.com</p>
            </div>

            <p className="text-sm text-white/70">
              Trusted by 2,500+ homeowners
            </p>
          </div>

          {/* RIGHT FORM */}
          <div
            ref={formRef}
            className="bg-white rounded-2xl shadow-2xl p-10"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Leave Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b py-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b py-2 outline-none"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full border-b py-2 outline-none resize-none"
              />

              <button
                className="w-full mt-6 py-3 bg-primary text-white rounded-lg
                hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
