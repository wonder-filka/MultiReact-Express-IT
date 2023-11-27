import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import { t } from "i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer-wrap">
      <div className="Footer">
        <div className="info-footer">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          <p>{t("home description")}</p>
        </div>
        <div className="nav-footer">
          <h5>{t("navigation")}</h5>
          <div>
            <div className="nav-col">
              <div>
                <Link to="/">{t("nav home")}</Link>
              </div>
              <div>
                <Link to="/services">{t("nav services")}</Link>
              </div>
              <div>
                <Link to="/industries">{t("nav industries")}</Link>
              </div>
            </div>
            <div className="nav-col">
              <div>
                <Link to="/cases">{t("nav cases")}</Link>
              </div>
              <div>
                <Link to="/reviews">{t("nav reviews")}</Link>
              </div>
              <div>
                <Link to="/contacts">{t("nav contacts")}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <h5>{t("contact")}</h5>
          <div>
            <div>
              <a href="tel:+393311919797">+393311919797</a>
            </div>
            <div>
              <a href="tel:+380632072957">+380632072957</a>
            </div>
          </div>
          <div>
            <a href="mailto:qudrotech_mail@mail.com">corp@quadro-tech.com</a>
          </div>
          {/* <div className="address">{t("address")}</div> */}
          <div className="social-links-icons">
            <div>
              <a href="https://twitter.com/QuadrotechLim" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="twitter icon"></img>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/quadrotech-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="linkedin icon"></img>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100091751205355"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook icon"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
