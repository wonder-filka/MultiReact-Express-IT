import React, { useState } from "react";
import "../Contacts.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import telegram from "../assets/telegram.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import axios from "axios";

export const Contacts = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const backendUrlBase = `http://localhost:3001`;
  const requestController = new AbortController();

  async function callMyEndpoint(event) {
    event.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const resp = await axios.post(
        `${backendUrlBase}/my-endpoint`,
        {
          name: formData.name,
          lastname: formData.lastname,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        {
          signal: requestController.signal,
        }
      );
      setFormSubmitted(true);
    } catch (err) {
      if (axios.isCancel(err)) {
      }
    }
  }

  return (
    <div className="Contacts">
      <Header />
      <div className="title-wrap">
        <div className="title">
          <div className="title-block">
            <div className="line-title"></div>
            <h4>{t("nav contacts")}</h4>
          </div>
        </div>
      </div>

      <div className="contact-block-wrap">
        <div className="contact-block">
          <div className="contact-info">
            <div className="info">
              <div>
                <h3>Quadrotech</h3>
                <div>
                  <a href="tel:+393311919797">+380632072957</a>
                </div>
                <div>
                  <a href="tel:+380632072957">+380632072957</a>
                </div>
                <a href="mailto:qudrotech_mail@mail.com">
                  corp@quadro-tech.com
                </a>
              </div>
              <div>
                <div className="address">{t("address")}</div>
                <div>&</div>
                <div className="address">Lesi Ukrainky Blvd, 3, Kyiv</div>
              </div>
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
          <div className="contact-mobile" onClick={(e) => e.stopPropagation()}>
            <form id="contactMob" onSubmit={callMyEndpoint}>
              <h5>{t("contact form")}</h5>
              <div className="inputs-mob">
                <div className="input-wrap-mob">
                  <div className="input_item-mob">
                    <input
                      id="formNameMob"
                      onChange={handleChange}
                      type="text"
                      name="name"
                      className="form_input"
                      placeholder={t("form name placeholder")}
                      tabIndex="1"
                      required
                    />
                  </div>
                  <div className="input_item-mob">
                    <input
                      id="formLastNameMob"
                      onChange={handleChange}
                      type="text"
                      name="lastName"
                      className="form_input"
                      placeholder={t("form last name placeholder")}
                      tabIndex="1"
                      required
                    />
                  </div>
                </div>
                <div className="input-wrap-mob">
                  <div className="input_item-mob">
                    <input
                      id="formEmailMob"
                      onChange={handleChange}
                      type="text"
                      name="email"
                      className="form_input"
                      placeholder={t("form email placeholder")}
                      tabIndex="1"
                      required
                    />
                  </div>
                  <div className="input_item-mob">
                    <input
                      id="formPhoneMob"
                      onChange={handleChange}
                      type="text"
                      name="phone"
                      className="form_input"
                      placeholder={t("form phone placeholder")}
                      tabIndex="1"
                      required
                    />
                  </div>
                </div>
                <div className="input-wrap-mob">
                  <div className="input_company-mob">
                    <input
                      id="formCompanyMob"
                      onChange={handleChange}
                      type="text"
                      name="company"
                      className="form_input"
                      placeholder={t("form company placeholder")}
                      tabIndex="1"
                      required
                    />
                  </div>
                </div>

                <div className="input-title-mob">{t("form message title")}</div>
                <div className="input_message-mob">
                  <textarea
                    name="message"
                    onChange={handleChange}
                    id="message"
                    tabIndex="5"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="btn-contact-mob">
                {formSubmitted ? (
                  <button
                    className="contact-submit-mob"
                    name="submit"
                    type="submit"
                    data-submit="...Sending"
                  >
                    {t("sent")}
                  </button>
                ) : (
                  <button
                    className="contact-submit-mob"
                    name="submit"
                    type="submit"
                    data-submit="...Sending"
                  >
                    {t("Send")}
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="contact-form" onClick={(e) => e.stopPropagation()}>
            <form id="contact" onSubmit={callMyEndpoint}>
              <h5>{t("contact form")}</h5>
              <div className="inputs">
                <div className="input-wrap">
                  <div className="input_item">
                    <input
                      id="formName"
                      type="text"
                      name="name"
                      className="form_input"
                      placeholder={t("form name placeholder")}
                      tabIndex="1"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input_item">
                    <input
                      id="formLastName"
                      type="text"
                      name="lastName"
                      className="form_input"
                      placeholder={t("form last name placeholder")}
                      tabIndex="2"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="input-wrap">
                  <div className="input_item">
                    <input
                      id="formEmail"
                      type="text"
                      name="email"
                      className="form_input"
                      placeholder={t("form email placeholder")}
                      tabIndex="3"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input_item">
                    <input
                      id="formPhone"
                      type="text"
                      name="phone"
                      className="form_input"
                      placeholder={t("form phone placeholder")}
                      tabIndex="4"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="input-wrap">
                  <div className="input_company">
                    <input
                      id="formCompany"
                      type="text"
                      name="company"
                      className="form_input"
                      placeholder={t("form company placeholder")}
                      tabIndex="5"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="input-wrap"></div>
                <div className="input-title">{t("form message title")}</div>
                <div className="input_message">
                  <textarea
                    name="message"
                    id="message"
                    tabIndex="6"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="btn-contact">
                {formSubmitted ? (
                  <button
                    className="contact-submit"
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="...Sending"
                  >
                    {t("sent")}
                  </button>
                ) : (
                  <button
                    className="contact-submit"
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="...Sending"
                  >
                    {t("Send")}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
