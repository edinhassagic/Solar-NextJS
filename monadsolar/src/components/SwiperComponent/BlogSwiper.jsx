"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import "./swiper.css";
import { blogData } from "@/app/BlogData/BlogData";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export const blogDataMapSlider = (a) => {
  return (
    <>
      {blogData.map((blog, index) => (
        <SwiperSlide key={index + a + 1}>
         
          <div className="slide-content">
            <Link href={`/blog/${blog.id}`}>
              <Image
                src="/blog1.jpg"
                width={400}
                height={200}
                style={{ height: "auto" }}
                alt="Nature"
              />{" "}
            </Link>

            <div className="slide-title">
              <h3>{blog.title}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  );
};

export const slides = 3;
const SwiperComponent = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      let newSlidesPerView = 3;

      if (window.innerWidth <= 640) {
        newSlidesPerView = 1;
      } else if (window.innerWidth <= 500) {
        newSlidesPerView = 2;
      }

      if (blogData.length < newSlidesPerView) {
        newSlidesPerView = blogData.length;
      }

      setSlidesPerView(newSlidesPerView);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section id="sec2" className="container">
        <h1>News and Events</h1>

        <Swiper
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView || slides}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <Suspense>
            {blogDataMapSlider(0)}
            {blogData.length <= 3 && blogDataMapSlider(blogData.length)}
          </Suspense>
        </Swiper>
      </section>
    </>
  );
};

export default SwiperComponent;
