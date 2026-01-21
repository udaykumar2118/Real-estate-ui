import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#F5F0E6]">

        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="About Dwello"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative max-w-7xl mx-auto px-6 text-white">
            <p className="uppercase tracking-widest text-sm mb-4">
              About Dwello
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
              We Design Experiences <br /> Around Living
            </h1>
            <p className="mt-6 text-white/80 max-w-xl">
              A modern real estate platform helping people discover homes
              that match their lifestyle, values, and future aspirations.
            </p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="rounded-3xl shadow-xl"
            alt="Who we are"
          />

          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-primary mt-4">
              A Modern Real Estate Collective
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
              Dwello is a premium real estate platform focused on helping
              individuals and families find homes that align with their
              lifestyle, values, and long-term goals.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
              Every property we showcase is carefully curated, verified,
              and evaluated to ensure quality, transparency, and trust.
            </p>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To simplify real estate by delivering transparent,
                reliable, and human-centric property solutions that help
                people make confident life decisions.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted real estate platform by redefining
                how people experience buying, selling, and investing in homes.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-primary mb-16">
              Our Core Values
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { title: "Trust", desc: "Verified properties and honest communication." },
                { title: "Transparency", desc: "No hidden charges or surprises." },
                { title: "Excellence", desc: "Premium service at every step." },
                { title: "Customer First", desc: "Your goals drive our solutions." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY / TIMELINE */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-primary text-center mb-20">
              Our Journey
            </h2>

            <div className="grid md:grid-cols-4 gap-10 text-center">
              {[
                { year: "2015", text: "Company founded" },
                { year: "2018", text: "Expanded to 5 cities" },
                { year: "2021", text: "1,000+ happy clients" },
                { year: "2024", text: "Premium real estate platform" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-bold text-primary">
                    {item.year}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Homes Sold", value: "2,500+" },
              { label: "Happy Clients", value: "1,800+" },
              { label: "Cities Covered", value: "15+" },
              { label: "Years Experience", value: "10+" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-4xl font-bold text-primary">
                  {item.value}
                </h3>
                <p className="mt-2 text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* FINAL CTA */}
        <section className="py-28 bg-white text-center">
          <h2 className="text-4xl font-bold text-primary">
            Let’s Build Your Future Together
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Whether you are buying your first home or investing in premium
            properties, our experts are here to guide you.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 px-12 py-4 bg-primary text-white rounded-full
            hover:scale-105 transition-all"
          >
            Contact Our Experts
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default About;
