import React from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";

const Menubar = () => {
  const toggleMenubar = () => {
    document.querySelector(".art-menu-bar").classList.toggle("art-active");
    document.querySelector(".art-menu-bar-btn").classList.toggle("art-active");
    document
      .querySelector(".art-info-bar-btn")
      .classList.toggle("art-disabled");
  };

  const openPortfolioDrawer = () => {
    document.querySelectorAll(".sub-menu")[0].classList.toggle("art-active");
  };

  const openBlogDrawer = () => {
    document.querySelectorAll(".sub-menu")[1].classList.toggle("art-active");
  };

  return (
    <div>
      <div className="art-menu-bar">
        {/* menu bar frame */}
        <div className="art-menu-bar-frame">
          {/* menu bar header */}
          <div className="art-menu-bar-header">
            {/* menu bar button */}
            <Link className="art-menu-bar-btn" to="#" onClick={toggleMenubar}>
              {/* icon */}
              <span></span>
            </Link>
            {/* menu bar button end */}
          </div>
          {/* menu bar header end */}

          {/* current page title */}
          <div className="art-current-page"></div>
          {/* current page title end */}

          {/* scroll frame */}
          <div className="art-scroll-frame">
            {/* menu */}
            <nav id="swupMenu">
              {/* menu list */}
              <ul className="main-menu">
                {/* menu item */}
                <li className="menu-item current-menu-item">
                  <Link to="/">Home</Link>
                </li>
                {/* menu item */}
                <li className="menu-item menu-item-has-children">
                  <Link to="#" onClick={openPortfolioDrawer}>
                    Portfolio
                  </Link>
                  {/* sub menu */}
                  <ul className="sub-menu">
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/portfolio-2-col">2 column</Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/portfolio-3-col">3 column</Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/portfolio-2-col-masonry">
                        2 column masonry
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/portfolio-3-col-masonry">
                        3 column masonry
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/portfolio-single">Single project</Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/portfolio-single-2">Single project 2</Link>
                    </li>
                  </ul>
                  {/* sub menu end */}
                </li>
                {/* menu item */}
                <li className="menu-item">
                  <Link to="/history">History</Link>
                </li>
                {/* menu item */}
                <li className="menu-item">
                  <Link to="/contact">Contact</Link>
                </li>
                {/* menu item */}
                <li className="menu-item menu-item-has-children">
                  <Link to="#" onClick={openBlogDrawer}>
                    Blog
                  </Link>
                  {/* sub menu */}
                  <ul className="sub-menu">
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/blog-2-col">2 column</Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/blog-3-col">3 column</Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="/blog-post">Publication</Link>
                    </li>
                  </ul>
                  {/* sub menu end */}
                </li>
                {/* menu item */}
                <li className="menu-item">
                  <Link to="onepage" target="_blank">
                    Onepage
                  </Link>
                </li>
              </ul>
              {/* menu list end */}
            </nav>
            {/* menu end */}

            {/* language change */}
            <ul className="art-language-change">
              {/* language item */}
              <li>
                <Link to="#">FR</Link>
              </li>
              {/* language item */}
              <li className="art-active-lang">
                <Link to="#">EN</Link>
              </li>
            </ul>
            {/* language change end */}
          </div>
          {/* scroll frame end */}
        </div>
        {/* menu bar frame */}
      </div>
    </div>
  );
};

export default Menubar;
