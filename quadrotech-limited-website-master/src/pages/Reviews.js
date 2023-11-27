import React, { useState } from "react";
import "../Reviews.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal/Modal";

export const Reviews = () => {
  const [modalActive, setModalActive] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="Reviews">
      <Header />
      <div className="title-wrap">
        <div className="title">
          <div className="title-block">
            <div className="line-title"></div>
            <h4>{t("nav reviews")}</h4>
          </div>
          <p className="title-p">{t("reviews page p")}</p>
        </div>
      </div>
      <div className="reviews-block">
        <div className="review-item white">
          <p>{t("review item")}</p>
          <div>{t("by")}</div>
        </div>
        <div className="review-item blue">
          <p>{t("review item")}</p>
          <div>{t("by")}</div>
        </div>
        <div className="review-item white">
          <p>{t("review item")}</p>
          <div>{t("by")}</div>
        </div>
        <div className="review-item blue">
          <p>{t("review item")}</p>
          <div>{t("by")}</div>
        </div>
        <div className="review-item white">
          <p>{t("review item")}</p>
          <div>{t("by")}</div>
        </div>
        <div className="review-item blue">
          <p>{t("review item")}</p>
          <div>{t("by")}</div>
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
