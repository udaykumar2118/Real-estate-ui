import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const colsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        colsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div ref={(el) => (colsRef.current[0] = el)}>
            <h2
              className="text-2xl font-bold mb-4 cursor-pointer"
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  duration: 0.3,
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  scale: 1,
                  duration: 0.3,
                })
              }
            >
              Dwello
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Helping you find your dream home with confidence, clarity,
              and trusted real-estate expertise.
            </p>
          </div>

          {/* Navigation */}
          <div ref={(el) => (colsRef.current[1] = el)}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Home", "Services", "Agents", "Contact"].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer"
                  onMouseEnter={(e) =>
                    gsap.to(e.currentTarget, { x: 6, color: "#fff", duration: 0.2 })
                  }
                  onMouseLeave={(e) =>
                    gsap.to(e.currentTarget, { x: 0, color: "rgba(255,255,255,0.7)", duration: 0.2 })
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div ref={(el) => (colsRef.current[2] = el)}>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Help Center", "Terms of Service", "Privacy Policy"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer"
                    onMouseEnter={(e) =>
                      gsap.to(e.currentTarget, { x: 6, color: "#fff", duration: 0.2 })
                    }
                    onMouseLeave={(e) =>
                      gsap.to(e.currentTarget, { x: 0, color: "rgba(255,255,255,0.7)", duration: 0.2 })
                    }
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div ref={(el) => (colsRef.current[3] = el)}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📍 California, USA</li>
              <li>📞 +1 (234) 567-890</li>
              <li>✉️ support@dwello.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Dwello. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
