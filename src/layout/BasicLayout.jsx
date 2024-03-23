import React, { useEffect } from "react";
import Preloader from "../components/Preloader";
import Infobar from "../components/Infobar";
import Menubar from "../components/Menubar";
import TopBackground from "../components/TopBackground";
import Footer from "../components/Footer";
import Scrollbar from "smooth-scrollbar";

import "./BasicLayout.css";
import "./Basic.css";

const BasicLayout = ({ children }) => {
  return (
    <div className="art-app">
      <div className="art-mobile-top-bar"></div>

      <div className="art-app-wrapper">
        <div className="art-app-container">
          <Infobar />
          <div className="art-content">
            {/* curtain */}
            <div className="art-curtain"></div>

            {/* top background */}
            <TopBackground />
            {/* top background end */}

            {/* swup container */}
            {children}
            {/* swup container end */}
          </div>
          <Menubar />
        </div>
      </div>
      <Preloader />
    </div>
  );
};

export default BasicLayout;
