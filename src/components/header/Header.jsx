import React, { useState } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const { t } = useTranslation();

  const [activeJa, setActiveJa] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    lng === "ja" ? setActiveJa(true) : setActiveJa(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div>
          <button
            className={
              activeJa
                ? "button__lang button__lang__ja button__lang__ja__active"
                : "button__lang button__lang__ja"
            }
            onClick={() => changeLanguage("ja")}
          >
            {t("header.ja")}
          </button>
          <button
            className={
              activeJa
                ? "button__lang button__lang__en"
                : "button__lang button__lang__en button__lang__en__active"
            }
            onClick={() => changeLanguage("en")}
          >
            {t("header.en")}
          </button>
          {/* <a href="index.html" className="nav__logo">
            {t("header.title")}
          </a> */}
        </div>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> {t("header.home")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> {t("header.about")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>{" "}
                {t("header.skills")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>{" "}
                {t("header.services")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>{" "}
                {t("header.portfolio")}
              </a>
            </li>

            {/* <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>{" "}
                {t("header.contact")}
              </a>
            </li> */}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
