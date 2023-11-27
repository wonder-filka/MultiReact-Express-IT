import React, { useState, useEffect } from "react";
import "../Cases.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import arrow from "../assets/Arrow.svg";
import Modal from "../components/Modal/Modal";
import arrowBlack from "../assets/Arrow1.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";

export const Cases = () => {
  const [modalActive, setModalActive] = useState(false);
  const [casesData, setCasesData] = useState([]);
  const visibleCasesData = casesData.filter((caseItem) => caseItem.visible);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("http://localhost:3001/cases")
      .then((response) => setCasesData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="Cases-wrap">
      <Header />
      <div className="cases-back">
        <div className="mute"></div>
      </div>
      <div className="title-wrap">
        <div className="title">
          <div className="title-block">
            <div className="line-title"></div>
            <h4>{t("nav cases")}</h4>
          </div>
          <p className="title-p">{t("cases page p")}</p>
        </div>
      </div>

      <div className="Cases">
        {visibleCasesData.map(function (caseData, index) {
          const caseNubmer = parseInt(caseData.title.match(/\d+/));
          console.log(caseNubmer);
          return (
            <div
              className={`caseHover cases-item ${
                index % 2 === 0 ? "blue" : "white"
              }`}
              key={caseData.id}
            >
              <h5 className="case-title">{t(`${caseData.title}`)}</h5>
              <div className="case-hover-info">
                <p>{t(`${caseData.descript}`).slice(0, 80)}...</p>
                <Link
                  to={`/cases/${caseData.id}`}
                  className="Link-case"
                  target="_blank"
                >
                  {t("get more")}
                  <img
                    src={index % 2 === 0 ? arrow : arrowBlack}
                    alt="logo"
                  ></img>
                </Link>
              </div>
            </div>
          );
        })}
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
