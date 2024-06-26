import React from "react";
import Footer from "../components/Footer";
import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

const History = () => {
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
        <div className="container-fluid">
          {/* row */}
          <div className="row p-30-0">
            {/* col */}
            <div className="col-lg-6">
              {/* section title */}
              <div className="art-section-title">
                {/* title frame */}
                <div className="art-title-frame">
                  {/* title */}
                  <h4>Education</h4>
                </div>
                {/* title frame end */}
              </div>
              {/* section title end */}

              {/* timeline */}
              <div className="art-timeline art-gallery">
                <div className="art-timeline-item">
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>University of toronto</h5>
                        <div className="art-el-suptitle mb-15">Student</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">jan 2018 - may 2020</span>
                      </div>
                    </div>

                    <p>
                      Dolor sit amet, consectetur adipisicing elit. Iusto,
                      optio, dolorum provident rerum aut hic quasi placeat iure
                      tempora laudantium ipsa ad debitis unde? Iste voluptatibus
                      minus veritatis qui ut.
                    </p>
                    <a
                      data-fancybox="diplome"
                      href="files/certificate.jpg"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Diplome
                    </a>
                  </div>
                </div>

                <div className="art-timeline-item">
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>Arter design school</h5>
                        <div className="art-el-suptitle mb-15">Student</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">jan 2018 - may 2020</span>
                      </div>
                    </div>
                    <div>
                      Consectetur adipisicing elit. Iusto, optio, dolorum
                      provident rerum aut hic quasi placeat iure tempora
                      laudantium ipsa ad debitis unde?
                    </div>
                  </div>
                </div>

                <div className="art-timeline-item">
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>Web developer courses</h5>
                        <div className="art-el-suptitle mb-15">Student</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">jan 2018 - may 2020</span>
                      </div>
                    </div>
                    <p>
                      Dolorum provident rerum aut hic quasi placeat iure tempora
                      laudantium ipsa ad debitis unde? Iste voluptatibus minus
                      veritatis qui ut.
                    </p>
                    <a
                      data-fancybox="diplome"
                      href="files/certificate.jpg"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Licence
                    </a>
                  </div>
                </div>

                <div className="art-timeline-item">
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>Academy of Art University</h5>
                        <div className="art-el-suptitle mb-15">Student</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">jan 2018 - may 2020</span>
                      </div>
                    </div>
                    <p>
                      Ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                      optio, dolorum provident rerum.
                    </p>
                    <a
                      data-fancybox="diplome"
                      href="files/certificate.jpg"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Certificate
                    </a>
                  </div>
                </div>
              </div>
              {/* timeline end */}
            </div>
            <div className="col-lg-6">
              {/* section title */}
              <div className="art-section-title">
                {/* title frame */}
                <div className="art-title-frame">
                  {/* title */}
                  <h4>Work History</h4>
                </div>
                {/* title frame end */}
              </div>
              {/* section title end */}

              {/* timeline */}
              <div className="art-timeline">
                <div className="art-timeline-item">
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>Envato</h5>
                        <div className="art-el-suptitle mb-15">
                          Template author
                        </div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">jan 2018 - may 2020</span>
                      </div>
                    </div>
                    <p>
                      Placeat iure tempora laudantium ipsa ad debitis unde? Iste
                      voluptatibus minus veritatis qui ut.
                    </p>
                  </div>
                </div>

                <div className="art-timeline-item">
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>Themeforest</h5>
                        <div className="art-el-suptitle mb-15">
                          Template author
                        </div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">jan 2018 - may 2020</span>
                      </div>
                    </div>
                    <p>
                      Adipisicing elit. Iusto, optio, dolorum provident rerum
                      aut hic quasi placeat iure tempora laudantium ipsa ad
                      debitis unde?
                    </p>
                    <a
                      data-fancybox="recommendation"
                      href="#art-recomendation-popup-1"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Recommendation
                    </a>
                  </div>

                  {/* popup */}
                  <div
                    className="art-recomendation-popup"
                    style={{ display: "none" }}
                    id="art-recomendation-popup-1"
                  >
                    {/* testimonial */}
                    <div className="art-a art-testimonial">
                      {/* testimonial body */}
                      <div className="testimonial-body">
                        {/* photo */}
                        <img
                          className="art-testimonial-face"
                          src="img/testimonials/face-3.jpg"
                          alt="face"
                        />
                        {/* name */}
                        <h5>Paul Trueman</h5>
                        <div className="art-el-suptitle mb-15">
                          Template author
                        </div>
                        {/* text */}
                        <div className="mb-15">
                          Working with Artur has been a pleasure. Better yet - I
                          alerted them of a minor issue before going to sleep.
                          The issue was fixed the next morning. I couldn't ask
                          for better support. Thank you Artur! This is easily a
                          5 star freelancer.
                        </div>
                      </div>
                      {/* testimonial body end */}
                      {/* testimonial footer */}
                      <div className="art-testimonial-footer">
                        <div className="art-left-side">
                          {/* star rate */}
                          <ul className="art-star-rate">
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                          {/* star rate end */}
                        </div>
                        <div className="art-right-side"></div>
                      </div>
                      {/* testimonial footer end */}
                    </div>
                    {/* testimonial end */}
                  </div>
                  {/* popup end */}
                </div>

                <div className="art-timeline-item">
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>Envato market</h5>
                        <div className="art-el-suptitle mb-15">
                          Template author
                        </div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">jan 2018 - may 2020</span>
                      </div>
                    </div>
                    <p>
                      Consectetur adipisicing elit. Excepturi, obcaecati,
                      quisquam id molestias eaque asperiores voluptatibus
                      cupiditate error assumenda delectus odit similique earum
                      voluptatem doloremque dolorem ipsam quae rerum quis. Odit,
                      itaque, deserunt corporis vero ipsum nisi eius odio natus
                      ullam provident pariatur temporibus quia eos repellat
                      consequuntur perferendis enim amet quae quasi repudiandae
                      sed quod veniam dolore possimus rem voluptatum eveniet
                      eligendi quis fugiat aliquam sunt similique aut adipisci.
                    </p>
                    <a
                      data-fancybox="recommendation"
                      href="#art-recomendation-popup-2"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Recommendation
                    </a>
                  </div>

                  {/* popup */}
                  <div
                    className="art-recomendation-popup"
                    style={{ display: "none" }}
                    id="art-recomendation-popup-2"
                  >
                    {/* testimonial */}
                    <div className="art-a art-testimonial">
                      {/* testimonial body */}
                      <div className="testimonial-body">
                        {/* photo */}
                        <img
                          className="art-testimonial-face"
                          src="img/testimonials/face-4.jpg"
                          alt="face"
                        />
                        {/* name */}
                        <h5>Paul Trueman</h5>
                        <div className="art-el-suptitle mb-15">
                          Template author
                        </div>
                        {/* text */}
                        <div className="mb-15">
                          Working with Artur has been a pleasure. Better yet - I
                          alerted them of a minor issue before going to sleep.
                          The issue was fixed the next morning. I couldn't ask
                          for better support. Thank you Artur! This is easily a
                          5 star freelancer.
                        </div>
                      </div>
                      {/* testimonial body end */}
                      {/* testimonial footer */}
                      <div className="art-testimonial-footer">
                        <div className="art-left-side">
                          {/* star rate */}
                          <ul className="art-star-rate">
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                          {/* star rate end */}
                        </div>
                        <div className="art-right-side"></div>
                      </div>
                      {/* testimonial footer end */}
                    </div>
                    {/* testimonial end */}
                  </div>
                  {/* popup end */}
                </div>

                <div className="art-timeline-item">
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>SoftService company</h5>
                        <div className="art-el-suptitle mb-15">
                          Template author
                        </div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">jan 2018 - tonight</span>
                      </div>
                    </div>
                    <p>
                      Dolor sit amet, consectetur adipisicing elit. Iusto,
                      optio, dolorum provident rerum.
                    </p>
                    <a
                      data-fancybox="recommendation"
                      href="#art-recomendation-popup-3"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Recommendation
                    </a>
                  </div>

                  {/* popup */}
                  <div
                    className="art-recomendation-popup"
                    style={{ display: "none" }}
                    id="art-recomendation-popup-3"
                  >
                    {/* testimonial */}
                    <div className="art-a art-testimonial">
                      {/* testimonial body */}
                      <div className="testimonial-body">
                        {/* photo */}
                        <img
                          className="art-testimonial-face"
                          src="img/testimonials/face-2.jpg"
                          alt="face"
                        />
                        {/* name */}
                        <h5>Paul Trueman</h5>
                        <div className="art-el-suptitle mb-15">
                          Template author
                        </div>
                        {/* text */}
                        <div className="mb-15">
                          Working with Artur has been a pleasure. Better yet - I
                          alerted them of a minor issue before going to sleep.
                          The issue was fixed the next morning. I couldn't ask
                          for better support. Thank you Artur! This is easily a
                          5 star freelancer.
                        </div>
                      </div>
                      {/* testimonial body end */}
                      {/* testimonial footer */}
                      <div className="art-testimonial-footer">
                        <div className="art-left-side">
                          {/* star rate */}
                          <ul className="art-star-rate">
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li>
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="art-empty-item">
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                          {/* star rate end */}
                        </div>
                        <div className="art-right-side"></div>
                      </div>
                      {/* testimonial footer end */}
                    </div>
                    {/* testimonial end */}
                  </div>
                  {/* popup end */}
                </div>
              </div>
              {/* timeline end */}
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
        {/* container */}
        <Footer />
        {/* container end */}
      </div>
      {/* scroll frame end */}
    </div>
  );
};

export default History;
