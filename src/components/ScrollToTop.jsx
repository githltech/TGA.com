import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // React Router ka hook to get current route

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, [location.pathname]); // Trigger effect on route change

  return null; // This component doesn't render anything
};

export default ScrollToTop;
