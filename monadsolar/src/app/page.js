import styles from "./home.module.css";
import { useTranslation, Trans } from "react-i18next";
import SwiperComponent from "../components/SwiperComponent/BlogSwiper";
import "./globals.css";
import ServiceOffer from "@/components/service-offer/service-offer";
import { Suspense } from "react";
import HeroSegment from "../components/HeroSegment/page";
import img from '/public/header-cover.jpg'

const Home = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const index = 11;


  return (
    <div className="layout">
      <div className="firstRow-all-columns">
        <div className={styles.container}>
          <div className="banner_image">
            <HeroSegment src={img}>
              <div className="banner_text">
                <h1>
                  <span style={{ color: "yellow" }}>M</span>onad
                  <span style={{ color: "yellow" }}>S</span>olar
                </h1>

                <p>Powering the Future with Solar Energy</p>
              </div>
            </HeroSegment>
          </div>
          
 <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
      <div className="App-intro">
        <Trans>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
        <Trans i18nKey="welcome">trans</Trans>
        <Trans>
          {index + 1} <a>xxx</a>
        </Trans>
          

        </div>
      </div>
      <div className="middle">
        <div className={styles.home}>
          <ServiceOffer />
          <div style={{ width: "100%", height: "400px" }}>
            <Suspense>
              <SwiperComponent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
