import React from "react";
import "./TopBackground.css";

const TopBackground = () => {
  return (
    <div className="art-top-bg" style={{ backgroundImage: "url(/img/bg.jpg)" }}>
      {/* overlay */}
      <div className="art-top-bg-overlay"></div>
      {/* overlay end */}
    </div>
  );
};

export default TopBackground;
