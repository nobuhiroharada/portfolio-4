import React, { useState } from "react";
import "./services.css";
import { MdOutlineWeb } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { t } = useTranslation();

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t("services.title")}</h2>
      <span className="section__subtitle">{t("services.subtitle")}</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <MdOutlineWeb className="services__icon" />
            <h3 className="services__title">
              {t("services.web_app_development.title")}
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            {t("services.view_more")}
            <AiOutlineArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services__modal-title">
                {t("services.web_app_development.title_pop")}
              </h3>
              <p className="services__modal-description">
                {t("services.web_app_development.description")}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_development.item_1")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_development.item_2")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_development.item_3")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_development.item_4")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_development.item_5")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_development.item_6")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <BiCodeAlt className="services__icon" />
            <h3 className="services__title">
              {t("services.web_app_mentenance.title")}
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            {t("services.view_more")}
            <AiOutlineArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services__modal-title">
                {t("services.web_app_mentenance.title_pop")}
              </h3>
              <p className="services__modal-description">
                {t("services.web_app_mentenance.description")}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_mentenance.item_1")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_mentenance.item_2")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_mentenance.item_3")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_mentenance.item_4")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.web_app_mentenance.item_5")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <FiEdit className="services__icon" />
            <h3 className="services__title">
              {t("services.api_development_mentenance.title")}
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            {t("services.view_more")}
            <AiOutlineArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services__modal-title">
                {t("services.api_development_mentenance.title")}
              </h3>
              <p className="services__modal-description">
                {t("services.api_development_mentenance.description")}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.api_development_mentenance.item_1")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.api_development_mentenance.item_2")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.api_development_mentenance.item_3")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.api_development_mentenance.item_4")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.api_development_mentenance.item_5")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.api_development_mentenance.item_6")}
                  </p>
                </li>

                <li className="services__modal-service">
                  ・
                  <p className="services__modal-info">
                    {t("services.api_development_mentenance.item_7")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
