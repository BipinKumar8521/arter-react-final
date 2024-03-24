import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import Footer from "../components/Footer";
import { useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import Recommendations from "../components/Recommendations";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = (props) => {
  //fetching api data

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const data = await response.json();
      setData(data.user);

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    anime({
      targets: ".art-counter-frame",
      opacity: [0, 1],
      duration: 800,
      delay: 2300,
      easing: "linear",
    });

    anime({
      targets: ".art-counter",
      delay: 1300,
      opacity: [1, 1],
      complete: function (anim) {
        document.querySelectorAll(".art-counter").forEach((counter) => {
          anime({
            targets: counter,
            innerText: [0, counter.innerText],
            round: 1,
            duration: 2000,
            easing: "linear",
          });
          counter.innerText = "0";
        });
      },
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="transition-fade" id="swup">
      {/* scroll frame */}
      <div id="scrollbar" className="art-scroll-frame">
        {/* container */}
        <div className="container-fluid">
          {/* row */}
          <div className="row p-60-0 p-lg-30-0 p-md-15-0">
            {/* col */}
            <div className="col-lg-12">
              {/* banner */}
              <div
                className="art-a art-banner"
                style={{ backgroundImage: "url(img/bg.jpg)" }}
              >
                {/* banner back */}
                <div className="art-banner-back"></div>
                {/* banner dec */}
                <div className="art-banner-dec"></div>
                {/* banner overlay */}
                <div className="art-banner-overlay">
                  {/* main title */}
                  <div className="art-banner-title">
                    {/* title */}
                    <h1 className="mb-15">
                      Discover my Amazing <br />
                      Art Space!
                    </h1>
                    {/* suptitle */}
                    <div className="art-lg-text art-code mb-25">
                      &lt;<i>code</i>&gt; I build{" "}
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          "web interfaces.",
                          2000, // wait 1s before replacing "Mice" with "Hamsters"
                          "ios and android applications.",
                          2000,
                          "design mocups.",
                          2000,
                          "automation tools.",
                          2000,
                        ]}
                        wrapper="span"
                        speed={25}
                        repeat={Infinity}
                      />
                      &lt;/<i>code</i>&gt;
                    </div>
                    <div className="art-buttons-frame">
                      {/* button */}
                      <Link to="/history" className="art-btn art-btn-md">
                        <span>Explore now</span>
                      </Link>
                    </div>
                  </div>
                  {/* main title end */}
                  {/* photo */}
                  <img
                    src="img/face-2.png"
                    className="art-banner-photo"
                    alt="Your Name"
                  />
                </div>
                {/* banner overlay end */}
              </div>
              {/* banner end */}
            </div>
            {/* col end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
        {/* container */}
        <div className="container-fluid">
          {/* row */}
          <div className="row p-30-0">
            {/* col */}
            <div className="col-md-3 col-6">
              {/* couner frame */}
              <div className="art-counter-frame">
                {/* counter */}
                <div className="art-counter-box">
                  {/* counter number */}
                  <span className="art-counter">10</span>
                  <span className="art-counter-plus">+</span>
                </div>
                {/* counter end */}
                {/* title */}
                <h6>Years Experience</h6>
              </div>
              {/* couner frame end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-md-3 col-6">
              {/* couner frame */}
              <div className="art-counter-frame">
                {/* counter */}
                <div className="art-counter-box">
                  {/* counter number */}
                  <span className="art-counter">143</span>
                </div>
                {/* counter end */}
                {/* title */}
                <h6>Completed Projects</h6>
              </div>
              {/* couner frame end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-md-3 col-6">
              {/* couner frame */}
              <div className="art-counter-frame">
                {/* counter */}
                <div className="art-counter-box">
                  {/* counter number */}
                  <span className="art-counter">114</span>
                </div>
                {/* counter end */}
                {/* title */}
                <h6>Happy Customers</h6>
              </div>
              {/* couner frame end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-md-3 col-6">
              {/* couner frame */}
              <div className="art-counter-frame">
                {/* counter */}
                <div className="art-counter-box">
                  {/* counter number */}
                  <span className="art-counter">20</span>
                  <span className="art-counter-plus">+</span>
                </div>
                {/* counter end */}
                {/* title */}
                <h6>Honors and Awards</h6>
              </div>
              {/* couner frame end */}
            </div>
            {/* col end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
        {/* container */}
        <div className="container-fluid">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-lg-12">
              {/* section title */}
              <div className="art-section-title">
                {/* title frame */}
                <div className="art-title-frame">
                  {/* title */}
                  <h4>My Services</h4>
                </div>
                {/* title frame end */}
              </div>
              {/* section title end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-lg-4 col-md-6">
              {/* service */}
              <div className="art-a art-service-icon-box">
                {/* service content */}
                <div className="art-service-ib-content">
                  {/* title */}
                  <h5 className="mb-15">Web Development</h5>
                  {/* text */}
                  <div className="mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </div>
                  {/* button */}
                  <div className="art-buttons-frame">
                    <a
                      href="/contact.html"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Order now
                    </a>
                  </div>
                </div>
                {/* service content end */}
              </div>
              {/* service end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-lg-4 col-md-6">
              {/* service */}
              <div className="art-a art-service-icon-box">
                {/* service content */}
                <div className="art-service-ib-content">
                  {/* title */}
                  <h5 className="mb-15">UI/UX Design</h5>
                  {/* text */}
                  <div className="mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </div>
                  {/* button */}
                  <div className="art-buttons-frame">
                    <a
                      href="/contact.html"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Order now
                    </a>
                  </div>
                </div>
                {/* service content end */}
              </div>
              {/* service end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-lg-4 col-md-6">
              {/* service */}
              <div className="art-a art-service-icon-box">
                {/* service content */}
                <div className="art-service-ib-content">
                  {/* title */}
                  <h5 className="mb-15">Sound Design</h5>
                  {/* text */}
                  <div className="mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </div>
                  {/* button */}
                  <div className="art-buttons-frame">
                    <a
                      href="/contact.html"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Order now
                    </a>
                  </div>
                </div>
                {/* service content end */}
              </div>
              {/* service end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-lg-4 col-md-6">
              {/* service */}
              <div className="art-a art-service-icon-box">
                {/* service content */}
                <div className="art-service-ib-content">
                  {/* title */}
                  <h5 className="mb-15">Game Design</h5>
                  {/* text */}
                  <div className="mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </div>
                  {/* button */}
                  <div className="art-buttons-frame">
                    <a
                      href="/contact.html"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Order now
                    </a>
                  </div>
                </div>
                {/* service content end */}
              </div>
              {/* service end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-lg-4 col-md-6">
              {/* service */}
              <div className="art-a art-service-icon-box">
                {/* service content */}
                <div className="art-service-ib-content">
                  {/* title */}
                  <h5 className="mb-15">Advertising</h5>
                  {/* text */}
                  <div className="mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </div>
                  {/* button */}
                  <div className="art-buttons-frame">
                    <a
                      href="/contact.html"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Order now
                    </a>
                  </div>
                </div>
                {/* service content end */}
              </div>
              {/* service end */}
            </div>
            {/* col end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
        {/* container */}
        <div className="container-fluid">
          {/* row */}
          <div className="row p-0-0">
            {/* col */}
            <div className="col-lg-12">
              {/* section title */}
              <div className="art-section-title">
                {/* title frame */}
                <div className="art-title-frame">
                  {/* title */}
                  <h4>Price Plans</h4>
                </div>
                {/* title frame end */}
              </div>
              {/* section title end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-lg-4">
              {/* price */}
              <div className="art-a art-price">
                {/* price body */}
                <div className="art-price-body">
                  <h5 className="mb-30">Starter Price</h5>
                  {/* price cost */}
                  <div className="art-price-cost">
                    <div className="art-number">
                      FREE<sup>*</sup>
                    </div>
                  </div>
                  {/* price cost end */}
                  {/* price list */}
                  <ul className="art-price-list">
                    {/* list item */}
                    <li>Ui Design</li>
                    {/* list item */}
                    <li>Web Development</li>
                    {/* list item */}
                    <li className="art-empty-item">Logo design</li>
                    {/* list item */}
                    <li className="art-empty-item">SEO optimization</li>
                    {/* list item */}
                    <li className="art-empty-item">Wordpress integration</li>
                  </ul>
                  {/* price list end */}
                  {/* button */}
                  <a
                    href="/contact.html"
                    className="art-link art-color-link art-w-chevron"
                  >
                    Order now
                  </a>
                  <div className="art-asterisk">
                    <sup>*</sup>Free only when ordering paid services
                  </div>
                </div>
                {/* price body end */}
              </div>
              {/* price end */}
            </div>
            {/* grid */}

            {/* col */}
            <div className="col-lg-4">
              {/* price */}
              <div className="art-a art-price art-popular-price">
                {/* price body */}
                <div className="art-price-body">
                  <h5 className="mb-30">Hourly payment</h5>
                  {/* price cost */}
                  <div className="art-price-cost">
                    <div className="art-number">
                      <span>$</span>29<span>h</span>
                    </div>
                  </div>
                  {/* price cost end */}
                  {/* price list */}
                  <ul className="art-price-list">
                    {/* list item */}
                    <li>Ui Design</li>
                    {/* list item */}
                    <li>Web Development</li>
                    {/* list item */}
                    <li>Logo design</li>
                    {/* list item */}
                    <li className="art-empty-item">SEO optimization</li>
                    {/* list item */}
                    <li className="art-empty-item">Wordpress integration</li>
                  </ul>
                  {/* price list end */}
                  {/* button */}
                  <a
                    href="/contact.html"
                    className="art-link art-color-link art-w-chevron"
                  >
                    Order now
                  </a>
                </div>
                {/* price body end */}
              </div>
              {/* price end */}
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-lg-4">
              {/* price */}
              <div className="art-a art-price">
                {/* price body */}
                <div className="art-price-body">
                  <h5 className="mb-30"> Full time</h5>
                  {/* price cost */}
                  <div className="art-price-cost">
                    <div className="art-number">
                      <span>$</span>2999<span>m</span>
                    </div>
                  </div>
                  {/* price cost end */}
                  {/* price list */}
                  <ul className="art-price-list">
                    {/* list item */}
                    <li>Ui Design</li>
                    {/* list item */}
                    <li>Web Development</li>
                    {/* list item */}
                    <li>Logo design</li>
                    {/* list item */}
                    <li>SEO optimization</li>
                    {/* list item */}
                    <li>Wordpress integration</li>
                  </ul>
                  {/* price list end */}
                  {/* button */}
                  <a
                    href="/contact.html"
                    className="art-link art-color-link art-w-chevron"
                  >
                    Order now
                  </a>
                </div>
                {/* price body end */}
              </div>
              {/* price end */}
            </div>
            {/* col end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
        {/* container */}
        <Recommendations />
        {/* container end */}
        {/* container */}
        <div className="container-fluid">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-6 col-lg-3">
              {/* brand */}
              <img className="art-brand" src="img/brands/1.png" alt="brand" />
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-6 col-lg-3">
              {/* brand */}
              <img className="art-brand" src="img/brands/2.png" alt="brand" />
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-6 col-lg-3">
              {/* brand */}
              <img className="art-brand" src="img/brands/3.png" alt="brand" />
            </div>
            {/* col end */}

            {/* col */}
            <div className="col-6 col-lg-3">
              {/* brand */}
              <img className="art-brand" src="img/brands/1.png" alt="brand" />
            </div>
            {/* col end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}

        {/* container */}
        <Footer />
        {/* container end */}
      </div>
      {/* scroll frame end */}
    </div>
  );
};

export default Home;
