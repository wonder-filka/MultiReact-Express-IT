import React, { useState } from "react";
import "./ServicesSlider.scss";
import ServiceItem from "./ServiceItem";
import { t } from "i18next";

export default function ServicesSlider({ color }) {
  let [itemChoice, setItemChoice] = useState("SoftwareDev");
  let [activeServiceName, setActiveServiceName] = useState("SoftwareDev");
  // eslint-disable-next-line no-unused-vars
  let [colorName, setColorName] = useState(color);

  function changetoSoft() {
    setItemChoice("SoftwareDev");
    setActiveServiceName("SoftwareDev");
  }

  function changetoConsulting() {
    setItemChoice("Consulting");
    setActiveServiceName("Consulting");
  }

  function changetoQA() {
    setItemChoice("QA");
    setActiveServiceName("QA");
  }

  return (
    <div className="ServicesSlider">
      <div className="Services-names">
        <div
          className={`serviceName ${
            activeServiceName === "SoftwareDev" ? colorName : ""
          }`}
          onClick={changetoSoft}
        >
          {t("Software and maintenance")}
        </div>
        <div
          className={`serviceName ${
            activeServiceName === "Consulting" ? colorName : ""
          }`}
          onClick={changetoConsulting}
        >
          {t("Consulting")}
        </div>
        <div
          className={`serviceName ${
            activeServiceName === "QA" ? colorName : ""
          }`}
          onClick={changetoQA}
        >
          {t("Quality Assurance (QA)")}
        </div>
      </div>
      <ServiceItem item={itemChoice} />
    </div>
  );
}
