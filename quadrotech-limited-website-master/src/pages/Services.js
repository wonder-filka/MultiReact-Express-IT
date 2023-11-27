import React, { useState } from "react";
import "../Services.scss";
import Header from "../components/Header/Header";
import ServicesSlider from "../components/ServicesSlider/ServicesSlider";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const [modalActive, setModalActive] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="Services">
      <Header />
      <div className="Services-wrap">
        <div className="servises-we-offer">
          <div className="title-block">
            <div className="line-title"></div>
            <h4>{t("Services We offer")}</h4>
          </div>
          <p className="services-par">{t("services page p")}</p>
          <ServicesSlider color="active" />
        </div>
      </div>
      <div className="discuss-block">
        <h4>{t("discuss")}</h4>
        <button class="contact-btn" onClick={() => setModalActive(true)}>
          {t("contact btn")}
        </button>
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
      <Footer />
    </div>
  );
};
