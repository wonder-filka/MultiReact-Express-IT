import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../i18n";

export default function Header() {
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [btnMob, setBtnMob] = useState(false);

  function menuBtnClick(event) {
    event.preventDefault();
    setBtnMob(!btnMob);
    console.log(btnMob);
  }
  const handleLenguageChangeEng = () => {
    i18n.changeLanguage("en");
    setLanguage("en");
  };
  const handleLenguageChangeES = () => {
    i18n.changeLanguage("es");
    setLanguage("es");
  };
  const handleLenguageChangeDE = () => {
    i18n.changeLanguage("de");
    setLanguage("de");
  };

  return (
    <div className="Header">
      <div className="header-wrap">
        <div className="logo-wrap">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="mobile-header">
          <div className="menu-button" onClick={menuBtnClick}>
            <div className="line-btn"></div>
            <div className="line-btn"></div>
            <div className="line-btn"></div>
          </div>
        </div>
      </div>
      {btnMob && (
        <div className="menu-wrap">
          <nav>
            <ul className="mobile-menu">
              <li>
                <Link to="/">{t("nav home")}</Link>
              </li>
              <li>
                <Link to="/services">{t("nav services")}</Link>
              </li>
              <li>
                <Link to="/industries">{t("nav industries")}</Link>
              </li>
              <li>
                <Link to="/cases">{t("nav cases")}</Link>
              </li>
              <li>
                <Link to="/contacts">{t("nav contacts")}</Link>
              </li>
            </ul>
          </nav>
          <div className="header-lang-mob">
            <button className="lang-btn" onClick={handleLenguageChangeEng}>
              EN
            </button>
            <button className="lang-btn" onClick={handleLenguageChangeES}>
              ES
            </button>
            <button className="lang-btn" onClick={handleLenguageChangeDE}>
              DE
            </button>
          </div>
        </div>
      )}

      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/" exact>
              {t("nav home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">{t("nav services")}</NavLink>
          </li>
          <li>
            <NavLink to="/industries">{t("nav industries")}</NavLink>
          </li>
          <li>
            <NavLink to="/cases">{t("nav cases")}</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">{t("nav contacts")}</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-language">
        <button className="lang-btn" onClick={handleLenguageChangeEng}>
          EN
        </button>
        <button className="lang-btn" onClick={handleLenguageChangeES}>
          ES
        </button>
        <button className="lang-btn" onClick={handleLenguageChangeDE}>
          DE
        </button>
      </div>
    </div>
  );
}
