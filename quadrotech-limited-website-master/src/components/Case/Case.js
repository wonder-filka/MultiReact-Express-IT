import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../Case.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { ThreeBody } from "@uiball/loaders";

export default function CaseItem() {
  const { id } = useParams();
  const [caseItem, setCaseItem] = useState({});
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/cases/${id}`).then((response) => {
      setCaseItem(response.data);
      console.log(response.data);
      setIsLoading(false);
    });
  }, [id]);
  if (!isLoading) {
    return (
      <div className="CaseItem">
        <div className="Case">
          <Header />
          <div
            className="cases-back"
            style={{
              backgroundImage: `url('${caseItem.imgMain}')`,
            }}
          >
            <div className="mute"></div>
          </div>
          <div className="title-wrap">
            <div className="title">
              <div className="title-block">
                <div className="line-title"></div>
                <h4>{t(`${caseItem.title}`)}</h4>
              </div>
              <p className="title-p">{t(`${caseItem.descript}`)}</p>
            </div>
          </div>
          <div className="case-block">
            <div className="need-result">
              <div>
                <h5>{t("BUSINESS NEED")}</h5>
                <p>{t(`${caseItem.need}`)}</p>
              </div>
              <div>
                <h5>{t("RESULT")}</h5>
                <p>{t(`${caseItem.result}`)}</p>
              </div>
            </div>
            <div className="key-block">
              <div className="key">
                <h5>{t("KEY FACTS")}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t(`${caseItem.keysinfo}`),
                  }}
                />
              </div>
              <div className="pics">
                <img src={`${caseItem.imgCase}`} alt="case"></img>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    return <ThreeBody size={35} speed={1.1} color="black" />;
  }
}
