import React, { useState } from "react";
import "../Home.scss";
import Header from "../components/Header/Header";
import ServicesSlider from "../components/ServicesSlider/ServicesSlider";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import team from "../assets/team.png";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="home">
      <Header />
      <div className="first-block-wrap">
        <div className="first-block">
          <h1>Quadrotech</h1>
          <h3>{t("home description")}</h3>
          <button class="contact-btn" onClick={() => setModalActive(true)}>
            {t("contact btn")}
          </button>
          <Modal active={modalActive} setActive={setModalActive} />
        </div>
      </div>
      <div className="about-block-wrap">
        <div className="about-block">
          <div className="title-block">
            <div className="line-title"></div>
            <h4>{t("About us")}</h4>
          </div>
          <div className="about-p">
            <p>{t("About p1")}</p>
            <p>{t("About p2")}</p>
            <p>{t("About p3")}</p>
          </div>
        </div>
      </div>

      <div className="servises-we-offer-wrap">
        <div className="servises-we-offer">
          <div className="title-block">
            <div className="line-title"></div>
            <h4>{t("Services We offer")}</h4>
          </div>
          <ServicesSlider color="activeWhite" />
        </div>
      </div>
      <div className="our-team-wrap">
        <div className="our-team">
          <div className="title-block">
            <div className="line-title"></div>
            <h4>{t("Our team")}</h4>
          </div>
          <div className="team-info">
            <p>{t("team p")}</p>
            <div className="team-img">
              <img src={team} alt="team"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
