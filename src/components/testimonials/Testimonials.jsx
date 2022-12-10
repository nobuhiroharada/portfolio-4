import React from "react";
import "./testimonial.css";
// import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Image1 from "../../assets/testimonial1.png";
import Image2 from "../../assets/testimonial2.png";
import Image3 from "../../assets/testimonial3.png";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const customerData = [
    {
      id: 1,
      image: Image1,
      title: t("testimonials.customer_1.name"),
      description: t("testimonials.customer_1.content"),
    },
    {
      id: 2,
      image: Image2,
      title: t("testimonials.customer_2.name"),
      description: t("testimonials.customer_2.content"),
    },
    {
      id: 3,
      image: Image3,
      title: t("testimonials.customer_3.name"),
      description: t("testimonials.customer_3.content"),
    },
  ];

  return (
    <section className="testimonial container section">
      <h2 className="section__title">{t("testimonials.title")}</h2>
      <span className="section__subtitle">{t("testimonials.subtitle")}</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {customerData.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
