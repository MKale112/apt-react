import React from "react";
import { Socials } from "./header";

const Mail = () => {
  return (
    <div className="container">
      <div className="footer_top">
        <div className="ot-heading row-20 mb40 text-center">
          <img
            className="img-responsive img-center mb20"
            src="images/home-3/footer/mail-footer-1.png"
            alt=""
          />
          <h2>News & Offers</h2>
          <p className="sub">
            Enjoy many benefits and receive our promotions and special offers
            directly
          </p>
        </div>
        <div className="mailchimp mb30">
          <div className="mailchimp-form">
            <form action="#" method="POST">
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className="input-text"
              />
              <button className="awe-btn">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="container">
        <p className="pull-left inline-block f14">
          &copy; 2017 Lotus Hotel All rights reserved.
        </p>
        <div className="social inline-block">
          <a className="mr10" href="!#">
            <i className="fa fa-facebook f16"></i>
          </a>
          <a className="mr10" href="!#">
            <i className="fa fa-twitter f16"></i>
          </a>
          <a className="mr10" href="!#">
            <i className="fa fa-instagram f16"></i>
          </a>
          <a className="mr10" href="!#">
            <i className="fa fa-pinterest f16"></i>
          </a>
          <a className="mr10" href="!#">
            <i className="fa fa-tumblr f16"></i>
          </a>
        </div>
        <div className="payment pull-right inline-block">
          <img
            className="img-responsive"
            src="images/home-3/footer/card.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    // FOOTER
    <footer id="footer" className="footer-style-3 text-center">
      <div className="bgr-footer pt60">
        <Mail />
        <Copyright />
      </div>
    </footer>
    // END / FOOTER
  );
};

export default Footer;
