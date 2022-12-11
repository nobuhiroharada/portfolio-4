import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Frontend = () => {
  const { t } = useTranslation();
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.frontend.title")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiBadgeCheck className="badge-check" />

            <div>
              <h3 className="skills__name">
                {t("skills.frontend.html.title")}
              </h3>
              <span className="skills__level">
                {t("skills.frontend.html.level")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className="badge-check" />

            <div>
              <h3 className="skills__name">{t("skills.frontend.css.title")}</h3>
              <span className="skills__level">
                {t("skills.frontend.css.level")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className="badge-check" />

            <div>
              <h3 className="skills__name">
                {t("skills.frontend.javascript.title")}
              </h3>
              <span className="skills__level">
                {t("skills.frontend.javascript.level")}
              </span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <BiBadgeCheck className="badge-check" />

            <div>
              <h3 className="skills__name">
                {t("skills.frontend.bootstrap.title")}
              </h3>
              <span className="skills__level">
                {t("skills.frontend.bootstrap.level")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className="badge-check" />

            <div>
              <h3 className="skills__name">{t("skills.frontend.git.title")}</h3>
              <span className="skills__level">
                {t("skills.frontend.git.level")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className="badge-check" />

            <div>
              <h3 className="skills__name">
                {t("skills.frontend.react.title")}
              </h3>
              <span className="skills__level">
                {t("skills.frontend.react.level")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
