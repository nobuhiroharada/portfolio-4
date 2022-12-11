import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
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
        <AiOutlineArrowRight className="work__button-icon" />
      </a>
    </div>
  );
};

export default WorkItems;
