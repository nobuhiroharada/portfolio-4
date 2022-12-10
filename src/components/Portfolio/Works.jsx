import React, { useState, useEffect } from "react";

// import components
import WorkItems from "./WorkItems";

import blogImage from "../../assets/blog.png";
import portfolioImage from "../../assets/portfolio.png";
import btimerImage from "../../assets/btimer.png";
import bboardImage from "../../assets/bboard.png";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 1,
      image: blogImage,
      title: t("portfolios.projects.project_1.title"),
      category: t("portfolios.categories.category_web.name"),
      category_key: "web",
      url: "https://nobuhiroharada.netlify.app/",
    },
    {
      id: 2,
      image: portfolioImage,
      title: t("portfolios.projects.project_2.title"),
      category: t("portfolios.categories.category_web.name"),
      category_key: "web",

      url: "https://nobuhiroharada.github.io/portfolio-4/",
    },
    {
      id: 3,
      image: btimerImage,
      title: t("portfolios.projects.project_3.title"),
      category: t("portfolios.categories.category_app.name"),
      category_key: "app",
      url: "https://apps.apple.com/jp/app/%E3%83%90%E3%82%B9%E3%82%B1%E3%81%AE%E8%A9%A6%E5%90%88%E5%B0%82%E7%94%A8%E3%81%AE%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-b-timer/id1436460277?mt=8",
    },
    {
      id: 4,
      image: bboardImage,
      title: t("portfolios.projects.project_3.title"),
      category: t("portfolios.categories.category_app.name"),
      category_key: "app",
      url: "https://apps.apple.com/jp/app/%E3%83%90%E3%82%B9%E3%82%B1%E4%BD%9C%E6%88%A6%E7%9B%A4-%E7%AF%AE%E7%90%83%E6%88%98%E7%95%A5-basketballboard/id1425747210?mt=8",
    },
  ];

  const categoriesNav = [
    { key: "all", name: t("portfolios.categories.category_all.name") },
    {
      key: "web",
      name: t("portfolios.categories.category_web.name"),
    },
    {
      key: "app",
      name: t("portfolios.categories.category_app.name"),
    },
  ];

  const [category, setCategory] = useState({
    key: "all",
  });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (category.key === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category_key.toLowerCase() === category.key;
      });
      setProjects(newProjects);
    }
  }, [category]);

  const handleClick = (e, index) => {
    setCategory({ key: e.target.dataset.category.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* categories nav */}
      <div className="work__filters">
        {categoriesNav.map((category, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
              data-category={category.key}
            >
              {category.name}
            </span>
          );
        })}
      </div>
      {/* projects */}
      <div className="work__container container grid">
        {projects.map((project) => {
          return <WorkItems item={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
