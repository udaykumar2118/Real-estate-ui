import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SearchBar = () => {
  const barRef = useRef(null);

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
    location: "",
    type: "",
    price: "",
  });

  // ✅ GSAP ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // ✅ INPUT CHANGE HANDLER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SUBMIT HANDLER (WORKING)
  const handleSubmit = () => {
    if (!formData.location || !formData.type || !formData.price) {
      alert("Please fill all fields");
      return;
    }

    // 🔹 For now: log (MVP)
    console.log("Search Data:", formData);

    // 🔹 Later: API call / filter properties
    // navigate(`/properties?location=${formData.location}`)
  };

  return (
    <div ref={barRef} className="-mt-8 relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#E7D3C4] rounded-2xl p-6 shadow-xl">
          <div className="grid md:grid-cols-4 gap-4 items-center">

            {/* Location */}
            <div className="bg-white rounded-xl px-4 py-3 focus-within:shadow-lg">
              <label className="text-xs text-gray-500">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleChange}
                className="w-full text-sm outline-none"
              />
            </div>

            {/* Type */}
            <div className="bg-white rounded-xl px-4 py-3 focus-within:shadow-lg">
              <label className="text-xs text-gray-500">Type</label>
              <input
                type="text"
                name="type"
                placeholder="House, Villa"
                value={formData.type}
                onChange={handleChange}
                className="w-full text-sm outline-none"
              />
            </div>

            {/* Price */}
            <div className="bg-white rounded-xl px-4 py-3 focus-within:shadow-lg">
              <label className="text-xs text-gray-500">Price Range</label>
              <input
                type="text"
                name="price"
                placeholder="$2000 - $5000"
                value={formData.price}
                onChange={handleChange}
                className="w-full text-sm outline-none"
              />
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              className="
                bg-primary text-white rounded-xl py-4 text-sm font-medium
                transition-all duration-300
                hover:scale-[1.05] hover:shadow-2xl
                active:scale-95
              "
            >
              Sign up
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
