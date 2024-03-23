import React, { useRef, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollbar = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      damping: 0.07, // Adjust damping for desired smoothness
    };

    Scrollbar.init(containerRef.current, options);

    return () => {
      if (Scrollbar) {
        Scrollbar.destroy(containerRef.current);
      }
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default SmoothScrollbar;
