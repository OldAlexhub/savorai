import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About SavorAI</h5>
            <p>
              Discover your next favorite meal with our AI-powered food
              recommendation system. Tailored suggestions to satisfy every
              taste.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>Email: support@savorai.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} SavorAI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
