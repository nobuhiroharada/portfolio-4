import React from "react";
import "./work.css";
import Works from "./Works";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">{t("portfolios.title")}</h2>
      <span className="section__subtitle">{t("portfolios.subtitle")}</span>

      <Works />
    </section>
  );
};

export default Work;
