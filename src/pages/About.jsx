import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* HERO TEXT */
      gsap.from(".hero-text > *", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });

      /* HERO IMAGE PARALLAX */
      gsap.to(".hero-img", {
        scale: 1.1,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* WHO SECTION */
      gsap.from(".who-img", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".who-section",
          start: "top 75%",
        },
      });

      gsap.from(".who-text > *", {
        x: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".who-section",
          start: "top 75%",
        },
      });

      /* GALLERY */
      gsap.from(".gallery-img", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-section",
          start: "top 80%",
        },
      });

      /* VALUES */
      gsap.from(".value-card", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
        },
      });

      /* COUNTERS */
      gsap.utils.toArray(".stat-number").forEach((el) => {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: el.dataset.value,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main ref={mainRef} className="bg-[#F5F0E6]">

        {/* HERO */}
        <section className="hero-section relative min-h-[80vh] flex items-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            className="hero-img absolute inset-0 w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="hero-text relative max-w-7xl mx-auto px-6 text-white">
            <p className="uppercase tracking-widest text-sm mb-4">
              About Dwello
            </p>
            <h1 className="text-5xl md:text-6xl font-bold max-w-2xl">
              We Design Experiences Around Living
            </h1>
            <p className="mt-6 text-white/80 max-w-xl">
              A modern real estate platform helping people discover homes.
            </p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="who-section py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="who-img rounded-3xl shadow-xl"
            alt=""
          />

          <div className="who-text">
            <p className="uppercase tracking-widest text-sm text-gray-500">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-primary mt-4">
              A Modern Real Estate Collective
            </h2>
            <p className="mt-6 text-gray-600 max-w-md">
              We help people find homes aligned with their lifestyle.
            </p>
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="gallery-section py-28 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
              "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            ].map((img, i) => (
              <div key={i} className="gallery-img rounded-3xl overflow-hidden shadow-xl">
                <img src={img} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "2500", label: "Homes Sold" },
              { value: "1800", label: "Happy Clients" },
              { value: "15", label: "Cities" },
              { value: "10", label: "Years" },
            ].map((item, i) => (
              <div key={i}>
                <h3
                  className="stat-number text-4xl font-bold text-primary"
                  data-value={item.value}
                >
                  0
                </h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
};

export default About;
