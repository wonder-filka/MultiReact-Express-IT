import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Slider.scss";
import slide2 from "../../assets/slide1.png";
import slide1 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import { t } from "i18next";

const images = [
  // массив с изображениями
  {
    id: 1,
    url: slide2,
    caption: "Software and maintenance",
    description: "Service1 p",
  },
  {
    id: 2,
    url: slide1,
    caption: "Consulting",
    description: "Service2 p",
  },
  {
    id: 3,
    url: slide3,
    caption: "Quality Assurance (QA)",
    description: "Service3 p",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider-wrap">
      <div className="slider">
        <TransitionGroup>
          <CSSTransition
            key={images[currentIndex].id}
            classNames="slide"
            timeout={1000} // время анимации в миллисекундах
          >
            <div
              className="slide"
              style={{ backgroundImage: `url(${images[currentIndex].url})` }}
            >
              <div className="slide-content">
                <div className="slider-info">
                  <h5>{t(`${images[currentIndex].caption}`)}</h5>
                  <p>{t(`${images[currentIndex].description}`)}</p>
                </div>

                <div className="btns-slider">
                  <div onClick={prevSlide}>
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 0.912775L0.928696 11.4999L17.5 22.0872L17.5 0.912775Z"
                        fill="white"
                        stroke="#5F7CEB"
                      />
                    </svg>
                  </div>
                  <div onClick={nextSlide}>
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.500002 0.912775L17.0713 11.4999L0.500001 22.0872L0.500002 0.912775Z"
                        fill="white"
                        stroke="#5F7CEB"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Slider;
