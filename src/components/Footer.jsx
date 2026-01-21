import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const instaRef = useRef([]);
  const colsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Instagram images reveal
      gsap.from(instaRef.current, {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      // Footer columns reveal
      gsap.from(colsRef.current, {
        y: 40,
        opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
        },
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#F5F0E6] pt-20 overflow-hidden">

      {/* Instagram Strip */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-6 gap-2 mb-16">
          {[
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
          ].map((img, i) => (
            <div
              key={i}
              ref={(el) => (instaRef.current[i] = el)}
              className="h-28 rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt="Home"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 mb-12">
          Follow us on Instagram{" "}
          <span className="font-medium text-primary">@dwello.homes</span>
        </p>
      </div>

      {/* Main Footer */}
      <div className="bg-[#23413D] text-white rounded-t-[48px]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">

          {/* LEFT */}
          <div ref={(el) => (colsRef.current[0] = el)}>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {["About Us", "Properties", "Agents", "Blog", "Our Team"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:translate-x-1 transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>

            <div className="flex gap-4 mt-8">
              {["f", "in", "ig"].map((icon, i) => (
                <div
                  key={i}
                  className="
                    w-9 h-9 border border-white/30 rounded-full
                    flex items-center justify-center
                    cursor-pointer transition-all duration-300
                    hover:bg-white hover:text-[#23413D] hover:scale-110
                  "
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* CENTER */}
          <div
            ref={(el) => (colsRef.current[1] = el)}
            className="text-center border border-white/10 p-5"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Get Updates
            </h3>
            <p className="text-white/70 text-sm mb-8">
              Subscribe to our newsletter to receive latest listings and
              exclusive offers.
            </p>

            <div className="space-y-4 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="
                  w-full px-4 py-3 rounded-lg bg-transparent
                  border border-white/40
                  placeholder:text-white/60
                  focus:outline-none focus:border-white
                "
              />
              <input
                type="text"
                placeholder="First name"
                className="
                  w-full px-4 py-3 rounded-lg bg-transparent
                  border border-white/40
                  placeholder:text-white/60
                  focus:outline-none focus:border-white
                "
              />
              <button className="w-full bg-white text-[#23413D] py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Sign Up
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={(el) => (colsRef.current[2] = el)}
            className="text-right"
          >
            <h4 className="font-semibold mb-6">
              Send Us a Message →
            </h4>
            <p className="text-white/80 text-sm mb-2">
              +1 (845) 356-1234
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              285 Hungry Hollow Road <br />
              Chestnut Ridge, NY 10977
            </p>

            <div className="mt-10 inline-block px-5 py-2 border border-white/40 rounded-full text-xs bg-white/10 hover:bg-white/20 transition cursor-pointer">
              Trusted Real Estate Partner
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Dwello. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
