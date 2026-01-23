import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Check } from "lucide-react";

const BookingSuccess = () => {
  const circleRef = useRef(null);
  const tickRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      circleRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    )
      .fromTo(
        tickRef.current,
        { scale: 0, rotate: -45 },
        { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(2)" }
      )
      .fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "opacity",
        }
      );
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F0E6] flex items-center justify-center">
      <div className="text-center">

        {/* SUCCESS ICON */}
        <div
          ref={circleRef}
          className="mx-auto w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-2xl"
        >
          <Check
            ref={tickRef}
            size={48}
            className="text-white"
          />
        </div>

        {/* TEXT */}
        <div
          ref={textRef}
          className="mt-10 space-y-4 opacity-100"
        >
          <h1 className="text-4xl font-bold text-primary">
            Booking Confirmed!
          </h1>

          <p className="text-gray-700 max-w-md mx-auto text-lg">
            Your booking has been successfully completed.
            Our team will contact you shortly.
          </p>

          <a
            href="/"
            className="inline-block mt-6 px-10 py-4 bg-primary text-white rounded-full hover:scale-105 transition"
          >
            Back to Home
          </a>
        </div>

      </div>
    </main>
  );
};

export default BookingSuccess;
