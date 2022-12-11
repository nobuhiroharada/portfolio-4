import React from "react";
import { BiAward, BiBriefcaseAlt, BiSupport } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="about__info grid">
      <div className="about__box">
        <BiAward className="about__icon" />

        <h3 className="about__title">{t("about.experience.title")}</h3>
        <span className="about__subtitle">
          {t("about.experience.subtitle")}
        </span>
      </div>

      <div className="about__box">
        <BiBriefcaseAlt className="about__icon" />

        <h3 className="about__title">{t("about.projects.title")}</h3>
        <span className="about__subtitle">{t("about.projects.subtitle")}</span>
      </div>

      <div className="about__box">
        <BiSupport className="about__icon" />

        <h3 className="about__title">{t("about.residence.title")}</h3>
        <span className="about__subtitle">{t("about.residence.subtitle")}</span>
      </div>
    </div>
  );
};

export default Info;
