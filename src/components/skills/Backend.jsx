import React from "react";
import { useTranslation } from "react-i18next";

const Backend = () => {
  const { t } = useTranslation();
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.backend.title")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">{t("skills.backend.php.title")}</h3>
              <span className="skills__level">
                {t("skills.backend.php.level")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                {t("skills.backend.laravel.title")}
              </h3>
              <span className="skills__level">
                {t("skills.backend.laravel.level")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                {t("skills.backend.cakephp.title")}
              </h3>
              <span className="skills__level">
                {t("skills.backend.cakephp.level")}
              </span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                {t("skills.backend.mysql.title")}
              </h3>
              <span className="skills__level">
                {t("skills.backend.mysql.level")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">{t("skills.backend.sql.title")}</h3>
              <span className="skills__level">
                {t("skills.backend.sql.level")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                {t("skills.backend.python.title")}
              </h3>
              <span className="skills__level">
                {t("skills.backend.python.level")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
