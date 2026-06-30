import { useEffect, useState } from "react";
import "./Hero.css";

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: hero1,
    title: "Full Digital Service",
    description:
      "We help businesses to stay relevant to their customers in the digital era.",
  },
  {
    image: hero2,
    title: "Creative Business Solutions",
    description:
      "Professional strategies and modern technology for your business growth.",
  },
  {
    image: hero3,
    title: "Build Your Dream",
    description:
      "Helping companies create powerful digital experiences worldwide.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="overlay"></div>

          <div className="hero-content">

            <h1>{slide.title}</h1>

            <p>{slide.description}</p>

            <button>Discover More</button>

          </div>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <button className="arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

    </section>
  );
};

export default Hero;