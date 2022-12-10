import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{t("footer.title")}</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {t("footer.about")}
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              {t("footer.portfolio")}
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              {t("footer.testimonials")}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/nobuhiroharada1026"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/nobuhiroharada"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Nobuhiro Harada. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
