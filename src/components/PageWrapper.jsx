import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageWrapper = ({ children }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return <div ref={pageRef}>{children}</div>;
};

export default PageWrapper;
