import React, { useEffect, useState } from "react";
import "../Industries.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import video from "../assets/Person.mp4";
import pics1 from "../assets/118.svg";
import pics2 from "../assets/102.svg";
import pics3 from "../assets/120.svg";
import pics4 from "../assets/121.svg";
import pics5 from "../assets/122.svg";
import pics6 from "../assets/125.svg";
import pics7 from "../assets/123.svg";
import pics8 from "../assets/124.svg";
import Slider from "../components/Slider/Slider";

export const Industries = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // установить значение при первой загрузке компонента
    window.addEventListener("resize", handleResize); // добавить обработчик события
    return () => window.removeEventListener("resize", handleResize); // удалить обработчик при размонтировании компонента
  }, []);
  return (
    <div className="Industries">
      <Header />

      {!isMobile && (
        <div className="industries-back">
          <div className="mute"></div>
          <video
            src={video}
            autoPlay
            loop
            muted
            className="hero-video"
            id="myVideo"
            playsinline
            preload="metadata"
          ></video>
        </div>
      )}

      <div className="Industries-wrap">
        <div className="Industries-we-offer">
          <div className="title-block">
            <div className="line-title"></div>
            <h4>{t("nav industries")}</h4>
          </div>
          <p className="Industries-par">{t("industries page p")}</p>
        </div>
      </div>

      <div className="industies-block">
        <div className="industies-item white fintech">
          <div className="industies-title">
            <img src={pics1} alt="FinTech"></img>
            <h5>{t("FinTech")}</h5>
          </div>
          <div>
            <ul>
              <li>{t("FinTech li 1")}</li>
              <li>{t("FinTech li 2")}</li>
              <li>{t("FinTech li 3")}</li>
            </ul>
          </div>
        </div>
        <div className="industies-item blue life">
          <div className="industies-title">
            <img src={pics2} alt="Life science"></img>
            <h5>{t("Life science")}</h5>
          </div>
          <ul>
            <li>{t("Life science li 1")}</li>
            <li>{t("Life science li 2")}</li>
            <li>{t("Life science li 3")}</li>
            <li>{t("Life science li 4")}</li>
          </ul>
        </div>

        <div className="industies-item blue security">
          <div className="industies-title">
            <img src={pics3} alt="Security"></img>
            <h5>{t("Security")}</h5>
          </div>

          <ul>
            <li>{t("Security li 1")}</li>
            <li>{t("Security li 2")}</li>
          </ul>
        </div>
        <div className="industies-item white transport">
          <div className="industies-title">
            <img src={pics4} alt="Transport"></img>
            <h5>{t("Transport")}</h5>
          </div>
          <ul>
            <li>{t("Transport li 1")}</li>
            <li>{t("Transport li 2")}</li>
          </ul>
        </div>
        <div className="industies-item white">
          <div className="industies-title">
            <img src={pics5} alt="Blockchain"></img>
            <h5>{t("Blockchain")}</h5>
          </div>
        </div>
        <div className="industies-item blue">
          <div className="industies-title">
            <img src={pics6} alt="Data science"></img>
            <h5>{t("Data science")}</h5>
          </div>
        </div>
        <div className="industies-item blue">
          <div className="industies-title">
            <img src={pics7} alt="Multimedia"></img>
            <h5>{t("Multimedia")}</h5>
          </div>
        </div>
        <div className="industies-item white">
          <div className="industies-title">
            <img src={pics8} alt="Artificial intelligence"></img>
            <h5>{t("Artificial intelligence")}</h5>
          </div>
        </div>
      </div>
      <Slider />
      <Footer />
    </div>
  );
};
