import React, { useState } from "react";
import "./header.css";
import {
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineMessage,
} from "react-icons/ai";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
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
                <AiOutlineHome size={"1.5rem"} className="nav__icon" />
                {t("header.home")}
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
                <AiOutlineUser size={"1.5rem"} className="nav__icon" />
                {t("header.about")}
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
                <AiOutlineFileText size={"1.5rem"} className="nav__icon" />
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
                <BiBriefcaseAlt2 size={"1.5rem"} className="nav__icon" />
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
                <HiOutlinePhotograph size={"1.5rem"} className="nav__icon" />
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
                <AiOutlineMessage size={"1.5rem"} />
                {t("header.contact")}
              </a>
            </li> */}
          </ul>

          <FaTimes
            size={"1.5rem"}
            className="nav__close"
            onClick={() => showMenu(!Toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <AiOutlineAppstore size={"1.5rem"} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
