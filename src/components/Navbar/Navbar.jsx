import "./Navbar.css";

import logo from "../../assets/images/logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">

        <div className="top-left">

          <span>
            <FaPhoneAlt className="icon" />
            +92 300 1234567
          </span>

          <span>
            <FaEnvelope className="icon" />
            info@enside.com
          </span>

        </div>

        <div className="top-right">

          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaTwitter />
          </a>

          <a href="#">
            <FaLinkedinIn />
          </a>

          <a href="#">
            <FaDribbble />
          </a>

        </div>

      </div>
    </div>
  )
}

const MainNavbar = () => {
  return (
    <header className="navbar">

      <div className="container navbar-content">

        <div className="logo">

          <img src={logo} alt="Enside Logo" />

        </div>

        <nav>

          <ul>

            <li><a href="#about">ABOUT</a></li>

            <li><a href="#cases">CASES</a></li>

            <li><a href="#testimonials">TESTIMONIALS</a></li>

            <li><a href="#features">FEATURES</a></li>

            <li><a href="#contact">CONTACT</a></li>

          </ul>

        </nav>

        <a href="#contact" className="purchase-btn">

          PURCHASE

        </a>

      </div>

    </header>
  )
}

const Navbar = () => {
  return (
    <>
      <TopBar />
      <MainNavbar />
    </>
  );
};

export default Navbar;
