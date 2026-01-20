import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Stats from "../components/Stats";
import PropertySupport from "../components/PropertySupport";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularResidences from "../components/PopularResidences";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Stats />
      <WhyChooseUs />
      <PropertySupport />
      <PopularResidences />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Home;
