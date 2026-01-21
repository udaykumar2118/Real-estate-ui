import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // LEFT PANEL
    gsap.fromTo(
      leftRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      }
    );

    // FORM PANEL
    gsap.fromTo(
      formRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F0E6] flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 rounded-[36px] overflow-hidden shadow-2xl">

          {/* LEFT PANEL */}
          <div
            ref={leftRef}
            className="bg-[#233C3B] text-white p-12 flex flex-col justify-between"
          >
            <div>
              <p className="uppercase tracking-widest text-xs text-white/70 mb-3">
                Contact
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Let’s Talk <br /> About Your <br /> Dream Home
              </h1>

              <p className="mt-5 text-white/80 max-w-sm">
                Reach out to our experts for personalized real estate
                guidance and premium property solutions.
              </p>
            </div>

            <div className="space-y-3 text-sm text-white/80 mt-8">
              <p>📍 71 Pilgrim Avenue, Chevy Chase, MD</p>
              <p>📞 +1 (713) 621-7636</p>
              <p>✉️ support@dwello.com</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            ref={formRef}
            className="bg-white p-12 flex items-center"
          >
            <form className="w-full space-y-5">
              <h2 className="text-2xl font-semibold text-primary mb-5">
                Send a Message
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First name"
                  className="border-b py-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border-b py-2 outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email address"
                className="w-full border-b py-2 outline-none"
              />

              <textarea
                placeholder="Tell us about your requirement"
                rows="4"
                className="w-full border-b py-2 outline-none resize-none"
              />

              <button
                type="submit"
                className="mt-6 px-10 py-3 bg-primary text-white rounded-full
                hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
