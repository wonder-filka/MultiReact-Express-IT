import React, { useState } from "react";
import "./Modal.scss";
import axios from "axios";
import { t } from "i18next";

const Modal = ({ active, setActive }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleFormClose = () => {
    setActive(false);
  };

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
    <div
      className={active ? "Modal active" : "Modal"}
      onClick={() => setActive(false)}
    >
      {formSubmitted ? (
        <div className="sent-message">
          <svg
            onClick={handleFormClose}
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.70711"
              y1="1.29289"
              x2="38.7089"
              y2="37.2947"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="1.29289"
              y1="37.2905"
              x2="37.2906"
              y2="1.29274"
              stroke="white"
              stroke-width="2"
            />
          </svg>
          {t("sent")}
        </div>
      ) : (
        <div>
          <div className="contact-mobile" onClick={(e) => e.stopPropagation()}>
            <div className="close-form" onClick={handleFormClose}>
              <svg
                width="40"
                height="39"
                viewBox="0 0 40 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="2.70711"
                  y1="1.29289"
                  x2="38.7089"
                  y2="37.2947"
                  stroke="white"
                  stroke-width="2"
                />
                <line
                  x1="1.29289"
                  y1="37.2905"
                  x2="37.2906"
                  y2="1.29274"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>

            <form id="contactMob" onSubmit={callMyEndpoint}>
              <h5>{t("contact form")}</h5>
              <div className="inputs-mob">
                <div className="input-wrap-mob">
                  <div className="input_item-mob">
                    <input
                      id="formNameMob"
                      type="text"
                      name="name"
                      className="form_input"
                      placeholder={t("form name placeholder")}
                      onChange={handleChange}
                      tabIndex="1"
                      required
                    />
                  </div>
                  <div className="input_item-mob">
                    <input
                      id="formLastNameMob"
                      type="text"
                      name="lastName"
                      className="form_input"
                      placeholder={t("form last name placeholder")}
                      onChange={handleChange}
                      tabIndex="1"
                      required
                    />
                  </div>
                </div>
                <div className="input-wrap-mob">
                  <div className="input_item-mob">
                    <input
                      id="formEmailMob"
                      type="text"
                      name="email"
                      className="form_input"
                      placeholder={t("form email placeholder")}
                      onChange={handleChange}
                      tabIndex="1"
                      required
                    />
                  </div>
                  <div className="input_item-mob">
                    <input
                      id="formPhoneMob"
                      type="text"
                      name="phone"
                      className="form_input"
                      placeholder={t("form phone placeholder")}
                      onChange={handleChange}
                      tabIndex="1"
                      required
                    />
                  </div>
                </div>
                <div className="input-wrap-mob">
                  <div className="input_company-mob">
                    <input
                      id="formCompanyMob"
                      type="text"
                      name="company"
                      className="form_input"
                      placeholder={t("form company placeholder")}
                      onChange={handleChange}
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
                <button className="contact-submit-mob">{t("Send")}</button>
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
                <button
                  className="contact-submit"
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                >
                  {t("Send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
