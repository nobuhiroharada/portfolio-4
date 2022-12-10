import React from "react";
import { useTranslation } from "react-i18next";

const WorkItems = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a
        href={item.url}
        className="work__button"
        target="_blank"
        rel="noreferrer"
      >
        {t("portfolios.link")}
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
