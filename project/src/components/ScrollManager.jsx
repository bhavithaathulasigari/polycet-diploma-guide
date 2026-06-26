import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH") {
      // Normal link click → scroll to top
      window.scrollTo(0, 0);
    }
    // If navigationType === "POP"
    // That means browser back/forward → let browser restore scroll
  }, [location, navigationType]);

  return null;
};

export default ScrollManager;