import React, { useEffect } from "react";
import "./Infobar.css";
import Scrollbar from "smooth-scrollbar";
import ProgressBar from "progressbar.js";
import { Link } from "react-router-dom";

const Infobar = () => {
  useEffect(() => {
    // Scrollbar.use(OverscrollPlugin);

    Scrollbar.init(document.querySelector("#scrollbar2"), {
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
      Scrollbar.init(document.querySelector("#scrollbar2"), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
      });
    });
  }, []);

  useEffect(() => {
    // progressbars
    var bar = new ProgressBar.Circle(circleprog1, {
      strokeWidth: 7,
      easing: "easeInOut",
      duration: 1400,
      delay: 2500,
      trailWidth: 7,
      step: function (state, circle) {
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText("");
        } else {
          circle.setText(value);
        }
      },
    });

    bar.animate(1);

    var bar = new ProgressBar.Circle(circleprog2, {
      strokeWidth: 7,
      easing: "easeInOut",
      duration: 1400,
      delay: 2600,
      trailWidth: 7,
      step: function (state, circle) {
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText("");
        } else {
          circle.setText(value);
        }
      },
    });

    bar.animate(0.9);

    var bar = new ProgressBar.Circle(circleprog3, {
      strokeWidth: 7,
      easing: "easeInOut",
      duration: 1400,
      delay: 2700,
      trailWidth: 7,
      step: function (state, circle) {
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText("");
        } else {
          circle.setText(value);
        }
      },
    });

    bar.animate(0.7);

    var bar = new ProgressBar.Line(lineprog1, {
      strokeWidth: 1.72,
      easing: "easeInOut",
      duration: 1400,
      delay: 2800,
      trailWidth: 1.72,
      svgStyle: {
        width: "100%",
        height: "100%",
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
      },
    });

    bar.animate(0.9);

    var bar = new ProgressBar.Line(lineprog2, {
      strokeWidth: 1.72,
      easing: "easeInOut",
      duration: 1400,
      delay: 2900,
      trailWidth: 1.72,
      svgStyle: {
        width: "100%",
        height: "100%",
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
      },
    });

    bar.animate(0.95);

    var bar = new ProgressBar.Line(lineprog3, {
      strokeWidth: 1.72,
      easing: "easeInOut",
      duration: 1400,
      delay: 3000,
      trailWidth: 1.72,
      svgStyle: {
        width: "100%",
        height: "100%",
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
      },
    });

    bar.animate(0.75);

    var bar = new ProgressBar.Line(lineprog4, {
      strokeWidth: 1.72,
      easing: "easeInOut",
      duration: 1400,
      delay: 3100,
      trailWidth: 1.72,
      svgStyle: {
        width: "100%",
        height: "100%",
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
      },
    });

    bar.animate(0.65);

    var bar = new ProgressBar.Line(lineprog5, {
      strokeWidth: 1.72,
      easing: "easeInOut",
      duration: 1400,
      delay: 3200,
      trailWidth: 1.72,
      svgStyle: {
        width: "100%",
        height: "100%",
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
      },
    });

    bar.animate(0.85);
  }, []);

  const toggleInfobar = () => {
    document.querySelector(".art-info-bar").classList.toggle("art-active");
    document
      .querySelector(".art-menu-bar-btn")
      .classList.toggle("art-disabled");
  };

  return (
    <div className="art-info-bar">
      {/* menu bar frame */}
      <div className="art-info-bar-frame">
        {/* info bar header */}
        <div className="art-info-bar-header">
          {/* info bar button */}
          <Link className="art-info-bar-btn" to="#" onClick={toggleInfobar}>
            {/* icon */}
            <i className="fas fa-ellipsis-v"></i>
          </Link>
          {/* info bar button end */}
        </div>
        {/* info bar header end */}

        {/* info bar header */}
        <div className="art-header">
          {/* avatar */}
          <div className="art-avatar">
            <a
              data-fancybox="avatar"
              href="img/face-1.jpg"
              className="art-avatar-curtain"
            >
              <img src="img/face-1.jpg" alt="avatar" />
              <i className="fas fa-expand"></i>
            </a>
            {/* available */}
            <div className="art-lamp-light">
              {/* add className 'art-not-available' if not available*/}
              <div className="art-available-lamp"></div>
            </div>
          </div>
          {/* avatar end */}
          {/* name */}
          <h5 className="art-name mb-10">
            <a href="/home.html">Artur Carter</a>
          </h5>
          {/* post */}
          <div className="art-sm-text">
            Front-end Deweloper <br />
            Ui/UX Designer,{" "}
          </div>
        </div>
        {/* info bar header end */}

        {/* scroll frame */}
        <div id="scrollbar2" className="art-scroll-frame" on>
          {/* info bar about */}
          <div className="art-table p-15-15">
            {/* about text */}
            <ul>
              {/* country */}
              <li>
                <h6>Residence:</h6>
                <span>Canada</span>
              </li>
              {/* city */}
              <li>
                <h6>City:</h6>
                <span>Toronto</span>
              </li>
              {/* age */}
              <li>
                <h6>Age:</h6>
                <span>26</span>
              </li>
            </ul>
          </div>
          {/* info bar about end */}

          {/* divider */}
          <div className="art-ls-divider"></div>

          {/* language skills */}
          <div className="art-lang-skills p-30-15">
            {/* skill */}
            <div className="art-lang-skills-item">
              <div id="circleprog1" className="art-cirkle-progress"></div>
              {/* title */}
              <h6>French</h6>
            </div>
            {/* skill end */}

            {/* skill */}
            <div className="art-lang-skills-item">
              <div id="circleprog2" className="art-cirkle-progress"></div>
              {/* title */}
              <h6>English</h6>
            </div>
            {/* skill end */}

            {/* skill */}
            <div className="art-lang-skills-item">
              <div id="circleprog3" className="art-cirkle-progress"></div>
              {/* title */}
              <h6>Spanish</h6>
            </div>
            {/* skill end */}
          </div>
          {/* language skills end */}

          {/* divider */}
          <div className="art-ls-divider"></div>

          {/* hard skills */}
          <div className="art-hard-skills p-30-15">
            {/* skill */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* title */}
                <h6>html</h6>
              </div>
              {/* progressbar frame */}
              <div className="art-line-progress">
                {/* progressbar */}
                <div id="lineprog1"></div>
              </div>
              {/* progressbar frame end */}
            </div>
            {/* skill end */}

            {/* skill */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* title */}
                <h6>CSS</h6>
              </div>
              {/* progressbar frame */}
              <div className="art-line-progress">
                {/* progressbar */}
                <div id="lineprog2"></div>
              </div>
              {/* progressbar frame end */}
            </div>
            {/* skill end */}

            {/* skill */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* title */}
                <h6>Js</h6>
              </div>
              {/* progressbar frame */}
              <div className="art-line-progress">
                {/* progressbar */}
                <div id="lineprog3"></div>
              </div>
              {/* progressbar frame end */}
            </div>
            {/* skill end */}

            {/* skill */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* title */}
                <h6>PHP</h6>
              </div>
              {/* progressbar frame */}
              <div className="art-line-progress">
                {/* progressbar */}
                <div id="lineprog4"></div>
              </div>
              {/* progressbar frame end */}
            </div>
            {/* skill end */}

            {/* skill */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* title */}
                <h6>Wordpress</h6>
              </div>
              {/* progressbar frame */}
              <div className="art-line-progress">
                {/* progressbar */}
                <div id="lineprog5"></div>
              </div>
              {/* progressbar frame end */}
            </div>
            {/* skill end */}
          </div>
          {/* language skills end */}

          {/* divider */}
          <div className="art-ls-divider"></div>

          {/* knowledge list */}
          <ul className="art-knowledge-list p-15-0">
            {/* list item */}
            <li>Bootstrap, Materialize</li>
            {/* list item */}
            <li>Stylus, Sass, Less</li>
            {/* list item */}
            <li>Gulp, Webpack, Grunt</li>
            {/* list item */}
            <li>GIT knowledge</li>
          </ul>
          {/* knowledge list end */}

          {/* divider */}
          <div className="art-ls-divider"></div>

          {/* links frame */}
          <div className="art-links-frame p-15-15">
            {/* download cv button */}
            <a href="files/cv.txt" className="art-link" download>
              Download cv <i className="fas fa-download"></i>
            </a>
          </div>
          {/* links frame end */}
        </div>
        {/* scroll frame end */}

        {/* sidebar social */}
        <div className="art-ls-social">
          {/* social link */}
          <a href="#." target="_blank">
            <i className="far fa-circle"></i>
          </a>
          {/* social link */}
          <a href="#." target="_blank">
            <i className="far fa-circle"></i>
          </a>
          {/* social link */}
          <a href="#." target="_blank">
            <i className="far fa-circle"></i>
          </a>
          {/* social link */}
          <a href="#." target="_blank">
            <i className="far fa-circle"></i>
          </a>
          {/* social link */}
          <a href="#." target="_blank">
            <i className="far fa-circle"></i>
          </a>
        </div>
        {/* sidebar social end */}
      </div>
      {/* menu bar frame end */}
    </div>
  );
};

export default Infobar;
