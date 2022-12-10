import React, { useState } from "react";
import "./qualification.css";
import { useTranslation } from "react-i18next";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { t } = useTranslation();

  return (
    <section className="qualification section">
      <h2 className="section__title">{t("career.title")}</h2>
      <span className="section__subtitle">{t("career.subtitle")}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {t("career.education.title")}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {t("career.experience.title")}
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("career.education.item_4.name")}
                </h3>
                <span className="qualification__subtitle">
                  {t("career.education.item_4.place")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {t("career.education.item_4.date")}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {t("career.education.item_3.name")}
                </h3>
                <span className="qualification__subtitle">
                  {t("career.education.item_3.place")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {t("career.education.item_3.date")}
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("career.education.item_2.name")}
                </h3>
                <span className="qualification__subtitle">
                  {t("career.education.item_2.place")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {t("career.education.item_2.date")}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {t("career.education.item_1.name")}
                </h3>
                <span className="qualification__subtitle">
                  {t("career.education.item_1.place")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {t("career.education.item_1.date")}
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("career.experience.item_3.name")}
                </h3>
                <span className="qualification__subtitle">
                  {t("career.experience.item_3.place")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {t("career.experience.item_3.date")}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {t("career.experience.item_2.name")}
                </h3>
                <span className="qualification__subtitle">
                  {t("career.experience.item_2.place")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {t("career.experience.item_2.date")}
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("career.experience.item_1.name")}
                </h3>
                <span className="qualification__subtitle">
                  {t("career.experience.item_1.place")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {t("career.experience.item_1.date")}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
