import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealProvider = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom", // Animation origin
      distance: "10px", // Shorter distance for smoother animations
      duration: 800, // Faster animation for better UX
      delay: 100, // Default delay before animation starts
      reset: false, // Avoid repetitive animations for a more polished feel
      easing: "ease-out", // Smooth easing effect
      scale: 1.1, // No scaling effect
      viewFactor: 0.2, // Trigger animation when 30% of the element is visible
    });

    sr.reveal(".reveal", { interval: 100 }); // Adjust interval for staggered animations

    return () => {
      sr.destroy(); // Cleanup to prevent conflicts
    };
  }, []);

  return <>{children}</>;
};

export default ScrollRevealProvider;
