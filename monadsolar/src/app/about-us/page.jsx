import styles from "./AboutUs.module.css";
import useTranslation from 'next-translate/useTranslation'
import aboutContent from "./aboutContent.json";
import history from "/public/history.jpg";
import enviroment from "/public/enviroment.jpg";
import AddParallax from "./AddParallax";
import HeroSegment from "@/components/HeroSegment/page";

import img from '/public/about-us-cover.jpg'

export const metadata = {
  title: "About us",
  description: "Our history",
};

const awards = [
  "Top Bankable Manufacturer Rated by Bloomberg New Energy Finance (BNEF) in 2022",
  "Tier 1 Solar Company by Bloomberg New Energy 2017-2022",
  "Leading company in PHOTON PV TRIATHALON 2017",
  "No. 1 Module Supplier for Quality and Performance/Price Ratio in IHS Module Customer Insight Survey in 2016",
  "The Best PV Module Manufacturer Award in Brazil by Smart Energy 2016",
  "No. 1 Silicon module solar plant developer by Greentech Media Research in 2017",
  "Best Structured Project Bond Award by Environmental Finance 2017",
  "TWO DEAL OF THE YEAR AWARDS FROM POWER FINANCE & RISK in 2018",
  "Intersolar North America 2012 Solar Project Award Finalist",
];

const awardsList = awards.map((award, index) => <li key={index}>{award}</li>);



const AboutUs = () => {


  
  return (
    <>
      <div className={styles.container}>
        <div className="banner_image">
          <HeroSegment src={img}>
            <div className="banner_text">
              <h1>About Us</h1>
            </div>
          </HeroSegment>
        </div>
      </div>
      <div className="layout">
        <div className="middle">
          <section id="about_sec">
            <div className={styles.o_nama_main}>
              <AddParallax image={history} />

              <div className={styles.column}>
                <div className={styles.centeredText}>
                  <h1>OUR HISTORY</h1>
                  <p>{aboutContent.history}</p>
                </div>
              </div>
            </div>
            <div className={styles.o_nama_main}>
              <div className={styles.column}>
                <div className={styles.centeredText}>
                  <h1>Environmental, Social and Governance (ESG)</h1>
                  <br />
                  <h4>2022 SUSTAINABILITY REPORT</h4>
                  <p>{aboutContent.sustainability}</p>
                </div>
              </div>
              <AddParallax image={enviroment} />
            </div>
          </section>
        </div>
        <div className="thirdRow-all-columns">
          <div className={styles.fullImageContainer}>
            <div className={styles.overlay}></div>
            <div className="layout">
              <div className="middle">
                <div className={styles.textOverlay}>
                  <h1>AWARDS</h1>
                  <ul>{awardsList}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
