import React from "react";

const Onepage = () => {
  useEffect(() => {
    // Scrollbar.use(OverscrollPlugin);

    Scrollbar.init(document.querySelector("#scrollbar"), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
      plugins: {
        overscroll: {
          effect: "bounce",
          damping: 0.2,
          maxOverscroll: 150,
          glowColor: "#f1f1f1",
        },
      },
    });

    document.addEventListener("swup:contentReplaced", function () {
      Scrollbar.init(document.querySelector("#scrollbar"), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
      });
    });
  }, []);
  return (
    <div className="transition-fade" id="swup">
      {/* scroll frame */}
      <div id="scrollbar" className="art-scroll-frame">
        {/* container */}
        One Page
        {/* container */}
        <Footer />
        {/* container end */}
      </div>
      {/* scroll frame end */}
    </div>
  );
};

export default Onepage;
