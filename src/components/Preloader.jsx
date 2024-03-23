import React, { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import ProgressBar from "progressbar.js";
import "./Preloader.css";

const Preloader = () => {
  useEffect(() => {
    anime({
      targets: ".art-preloader .art-preloader-content",
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: "linear",
      complete: function (anim) {},
    });
    anime({
      targets: ".art-preloader",
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: "linear",
      complete: function (anim) {
        document.querySelector(".art-preloader").style.display = "none";
      },
    });

    var bar = new ProgressBar.Line("#preloader", {
      strokeWidth: 1.7,
      easing: "easeInOut",
      duration: 1400,
      delay: 750,
      trailWidth: 1.7,
      svgStyle: {
        width: "100%",
        height: "100%",
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
      },
    });

    bar.animate(1);
  }, []);

  return (
    <div className="art-preloader">
      {/* preloader content */}
      <div className="art-preloader-content">
        {/* title */}
        <h4>Artur Carter</h4>
        {/* progressbar */}
        <div id="preloader" className="art-preloader-load"></div>
      </div>
      {/* preloader content end */}
    </div>
  );
};

export default Preloader;
