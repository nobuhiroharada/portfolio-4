import React, { useState } from "react";
import "./qualification.css";
import { SlGraduation } from "react-icons/sl";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
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
            <SlGraduation size={"1.3rem"} className="qualification__icon" />
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
            <BiBriefcaseAlt2 size={"1.3rem"} className="qualification__icon" />
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
                  <AiOutlineCalendar className="qualification__calender-icon" />
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
                  <AiOutlineCalendar className="qualification__calender-icon" />
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
                  <AiOutlineCalendar className="qualification__calender-icon" />
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
                  <AiOutlineCalendar className="qualification__calender-icon" />
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
                  <AiOutlineCalendar className="qualification__calender-icon" />
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
                  <AiOutlineCalendar className="qualification__calender-icon" />
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
                  <AiOutlineCalendar className="qualification__calender-icon" />
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
