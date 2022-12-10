import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">{t("about.experience.title")}</h3>
        <span className="about__subtitle">
          {t("about.experience.subtitle")}
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">{t("about.projects.title")}</h3>
        <span className="about__subtitle">{t("about.projects.subtitle")}</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>

        <h3 className="about__title">{t("about.residence.title")}</h3>
        <span className="about__subtitle">{t("about.residence.subtitle")}</span>
      </div>
    </div>
  );
};

export default Info;
