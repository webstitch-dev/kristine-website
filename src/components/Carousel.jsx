import { useState } from "react";
import "../styles/Carousel.css";
import carouselOne from "../assets/images/carousel-one.jpeg";
import carouselTwo from "../assets/images/carousel-two.jpeg";
import carouselThree from "../assets/images/carousel-three.jpeg";
import carouselFour from "../assets/images/carousel-four.jpeg";
import carouselFive from "../assets/images/carousel-five.jpeg";
import carouselSix from "../assets/images/carousel-six.jpeg";
import carouselSeven from "../assets/images/carousel-seven.jpeg";

const images = [
  carouselOne,
  carouselTwo,
  carouselThree,
  carouselFour,
  carouselFive,
  carouselSix,
  carouselSeven,
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
    );
  };

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

  return (
    <div className="carousel-bg">
        <div className="image-thumbnail-carousel">
        <section className="image-display">
            <div className="screen">
            <img src={images[activeIndex]} alt="Active" />
            </div>
        </section>

        <section className="thumbnail-carousel">
            
            <button className="carousel__btn prev" onClick={prevSlide}>
            ❮
            </button>

            <ul className="carousel__slider">
            {images.map((img, index) => (
                <li
                key={index}
                className={`carousel__slide ${
                    index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                >
                <div className="thumbnail">
                    <img src={img} alt={`Slide ${index}`} />
                </div>
                </li>
            ))}
            </ul>

            <button className="carousel__btn next" onClick={nextSlide}>
            ❯
            </button>

        </section>
        </div>
    </div>
  );
}

export default Carousel;