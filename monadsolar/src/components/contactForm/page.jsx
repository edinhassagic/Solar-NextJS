import React from "react";
import styles from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <section id="contact_sec" className={styles.kontakt_form}>
      <div className={styles.wrapper}>
        <div className={styles.company_info}>
          <h3>MonadSolar</h3>
          <div className={styles.info}>
            <FontAwesomeIcon icon={faRoad} className={styles.icon} />
            <p>44 Main Street</p>
          </div>
          <div className={styles.info}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <p>(555) 555-5555</p>
          </div>
          <div className={styles.info}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <p>monad.solar@gmail.com</p>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>E-mail Us</h3>

          <form id="contact-form">
            <p>
              <label>Name</label>
              <input type="text" name="name" id="name" required />
            </p>

            <p>
              <label>Company</label>
              <input type="text" name="company" id="company" />
            </p>

            <p>
              <label>E-mail Address</label>
              <input type="email" name="email" id="email" required />
            </p>

            <p>
              <label>Phone Number</label>
              <input type="text" name="phone" id="phone" />
            </p>

            <p className={styles.full}>
              <label>Message</label>
              <textarea name="message" rows="5" id="message"></textarea>
            </p>

            <div className={styles.btn_submit}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
