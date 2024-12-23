import { useState, useRef } from "react";
import "./Hero.scss";
import plScreenshot from "../../assets/pl-home-border.png";
import mapScreenshot from "../../assets/alpha-prayer-map.png";
import accScreenshot from "../../assets/acc-website.png";

function Hero() {
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  const [slides, setSlides] = useState([
    {
      src: plScreenshot,
      alt: "Prayer Library Screenshot",
      zIndex: 1,
      animation: "",
    },
    { src: accScreenshot, alt: "ACC Screenshot", zIndex: 0, animation: "" },
    { src: mapScreenshot, alt: "ACC Screenshot", zIndex: 0, animation: "" },
  ]);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  //   click through images in slide area
  const handleNextImage = () => {
    const nextSlide = (currentSlide + 1) % slides.length;

    // Create new slides array with updated z-indexes
    const updatedSlides = slides.map((slide, index) => ({
      ...slide,
      zIndex: index === nextSlide ? slides.length : 0,
      animation: index === nextSlide ? "fade 0.5s" : "",
    }));

    setSlides(updatedSlides);
    setCurrentSlide(nextSlide);
  };

  const handleHoverSlides = () => {
    const images = slidesContainerRef.current?.querySelectorAll("img");
    images?.forEach((image) => {
      const x = 25 * Math.floor(Math.random() * 5) - 50;
      const y = 25 * Math.floor(Math.random() * 5) - 50;
      image.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const handleMouseLeaveSlides = () => {
    const images = slidesContainerRef.current?.querySelectorAll("img");
    images?.forEach((image) => {
      image.style.transform = "translate(0, 0)";
    });
  };

  return (
    <div className="hero">
      <div
        className="hero__slides-container"
        onClick={handleNextImage}
        onPointerEnter={handleHoverSlides}
        onPointerLeave={handleMouseLeaveSlides}
        ref={slidesContainerRef}
      >
        {slides.map((slide, index) => (
          <img
            src={slide.src}
            alt={slide.alt}
            className="hero__screenshot"
            key={index}
            style={{ zIndex: slide.zIndex, animation: slide.animation }}
          />
        ))}
      </div>
      <div className="hero__content-container">
        <h1 className="hero__title">Lucas Codes Things.</h1>
        <p>
          Hi 👋 <br /> I'm a software engineer and I love bringing ideas to
          life. <br /> I have experience building web applications, mobile apps,
          and websites.
        </p>
        <a
          href="#tally-open=nr2ZZ2&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave"
          className="hero__cta"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export default Hero;
