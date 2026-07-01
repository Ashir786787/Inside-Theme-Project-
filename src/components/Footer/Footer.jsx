import "./Footer.css";

import logo from "../../assets/images/logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          <div className="footer-about">

            <img src={logo} alt="Logo" />

            <p>
              We provide modern business solutions with a strong focus on
              innovation, creativity, and customer satisfaction.
            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          <div>

            <h3>Quick Links</h3>

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Cases</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

          </div>

          <div>

            <h3>Services</h3>

            <ul>
              <li>Business Strategy</li>
              <li>Marketing</li>
              <li>Consulting</li>
              <li>Finance</li>
              <li>Planning</li>
            </ul>

          </div>

          <div>

            <h3>Contact</h3>

            <ul>
              <li>+92 300 1234567</li>
              <li>info@example.com</li>
              <li>Lahore, Pakistan</li>
            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 All Rights Reserved.
          </p>

          <button
            className="top-btn"
            onClick={scrollTop}
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;