import React from "react";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import Footer from "../components/Footer";

const Contact = () => {
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
          {/*row */}
          <div className="row p-30-0">
            {/*col */}
            <div className="col-lg-12">
              {/*section title */}
              <div className="art-section-title">
                {/*title frame */}
                <div className="art-title-frame">
                  {/*title */}
                  <h4>Contact information</h4>
                </div>
                {/*title frame end */}
              </div>
              {/*section title end */}
            </div>
            {/*col end */}
            {/*col */}
            <div className="col-lg-4">
              {/*contact card */}
              <div className="art-a art-card">
                <div className="art-table p-15-15">
                  <ul>
                    <li>
                      <h6>Country:</h6>
                      <span>Canada</span>
                    </li>
                    <li>
                      <h6>City:</h6>
                      <span>Toronto</span>
                    </li>

                    <li>
                      <h6>Streat:</h6>
                      <span>20 Dellbank Rd</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/*contact card end */}
            </div>
            {/*col end */}
            {/*col */}
            <div className="col-lg-4">
              {/*contact card */}
              <div className="art-a art-card">
                <div className="art-table p-15-15">
                  <ul>
                    <li>
                      <h6>Email:</h6>
                      <span>carter.inbox@mail.com</span>
                    </li>
                    <li>
                      <h6>Telegram:</h6>
                      <span>@arter</span>
                    </li>
                    <li>
                      <h6>Skype:</h6>
                      <span>Arter</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/*contact card end */}
            </div>
            {/*col end */}
            {/*col */}
            <div className="col-lg-4">
              {/*contact card */}
              <div className="art-a art-card">
                <div className="art-table p-15-15">
                  <ul>
                    <li>
                      <h6>Support service:</h6>
                      <span>+78 (098) 333 11 22</span>
                    </li>
                    <li>
                      <h6>Office:</h6>
                      <span>+78 (098) 326 11 22</span>
                    </li>
                    <li>
                      <h6>Personal:</h6>
                      <span>+78 (077) 114 26 53</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/*contact card end */}
            </div>
            {/*col end */}

            {/*col */}
            <div className="col-lg-12">
              {/*section title */}
              <div className="art-section-title">
                {/*title frame */}
                <div className="art-title-frame">
                  {/*title */}
                  <h4>Get in touch</h4>
                </div>
                {/*title frame end */}
              </div>
              {/*section title end */}

              {/*contact form frame */}
              <div className="art-a art-card">
                {/*contact form */}
                <form id="form" className="art-contact-form">
                  {/*form field */}
                  <div className="art-form-field">
                    {/*name input */}
                    <input
                      id="name"
                      name="name"
                      className="art-input"
                      type="text"
                      placeholder="Name"
                      required
                    />
                    {/*label */}
                    <label for="name">
                      <i className="fas fa-user"></i>
                    </label>
                  </div>
                  {/*form field end */}
                  {/*form field */}
                  <div className="art-form-field">
                    {/*email input */}
                    <input
                      id="email"
                      name="email"
                      className="art-input"
                      type="email"
                      placeholder="Email"
                      required
                    />
                    {/*label */}
                    <label for="email">
                      <i className="fas fa-at"></i>
                    </label>
                  </div>
                  {/*form field end */}
                  {/*form field */}
                  <div className="art-form-field">
                    {/*message textarea */}
                    <textarea
                      id="message"
                      name="text"
                      className="art-input"
                      placeholder="Message"
                      required
                    ></textarea>
                    {/*label */}
                    <label for="message">
                      <i className="far fa-envelope"></i>
                    </label>
                  </div>
                  {/*form field end */}
                  {/*button */}
                  <div className="art-submit-frame">
                    <button
                      className="art-btn art-btn-md art-submit"
                      type="submit"
                    >
                      <span>Send message</span>
                    </button>
                    {/*success */}
                    <div className="art-success">
                      Success <i className="fas fa-check"></i>
                    </div>
                  </div>
                </form>
                {/*contact form end */}
              </div>
              {/*contact form frame end */}
            </div>
            {/*col end */}
          </div>
          {/*row end */}
        </div>
        {/*container end */}
        {/*container */}
        <div className="container-fluid">
          {/*row */}
          <div className="row">
            {/*col */}
            <div className="col-6 col-lg-3">
              {/*brand */}
              <img className="art-brand" src="img/brands/1.png" alt="brand" />
            </div>
            {/*col end */}

            {/*col */}
            <div className="col-6 col-lg-3">
              {/*brand */}
              <img className="art-brand" src="img/brands/2.png" alt="brand" />
            </div>
            {/*col end */}

            {/*col */}
            <div className="col-6 col-lg-3">
              {/*brand */}
              <img className="art-brand" src="img/brands/3.png" alt="brand" />
            </div>
            {/*col end */}

            {/*col */}
            <div className="col-6 col-lg-3">
              {/*brand */}
              <img className="art-brand" src="img/brands/1.png" alt="brand" />
            </div>
            {/*col end */}
          </div>
          {/*row end */}
        </div>
        {/* container */}
        <Footer />
        {/* container end */}
      </div>
      {/* scroll frame end */}
    </div>
  );
};

export default Contact;
