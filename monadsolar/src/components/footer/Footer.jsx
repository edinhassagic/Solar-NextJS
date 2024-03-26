import React from 'react';
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className={styles.upper_footer}>
        <div className={styles.details_container}>
          <h2 className={styles.detail}> PRODUCTS </h2>
          <p className={styles.detail}> Utility </p>
          <p className={styles.detail}> Comercial </p>
          <p className={styles.detail}> Residential </p>
        </div>

        <div className={styles.details_container}>
          <h2 className={styles.detail}> SUPPORT </h2>
          <p className={styles.detail}> <Link  className={styles.link} href='/about-us'> About </Link> </p>
          <p className={styles.detail}> <Link  className={styles.link} href='/blog'> Blog </Link> </p>
          <p className={styles.detail}> Help </p>
        </div>

        <div className={styles.details_container}>
          <h2 className={styles.detail}> CONTACT US </h2>
          <p className={styles.detail}>
            <FontAwesomeIcon icon={faPhone} className={styles.footer_icon}/> +387 111 222
          </p>
          <p className={styles.detail}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.footer_icon}/> monad.solar@gmail.com
          </p>
        </div>
      </div>
      <div className={styles.lower_footer}>
        <p> Copyright © MonadSolar. All rights reserved </p>
      </div>
    </>
  );
};

export default Footer;
