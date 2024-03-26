import React from "react";
import styles from "./single.module.css"
import Image from "next/image";
import reliable from "/public/reliable.png"
import pimg from "/public/p.png"
import moren from "/public/More-Energy.png"
const SingleProduct = () => {
  return (
    <div className="layout">
      <div className="middle">
        <div className={styles.products_main}>
          <div className={styles.column}>
            <Image src="/prod4.png" width={600} alt="alt" height={500} className={styles.image} />
          </div>

          <div className={styles.columntext}>
            <ul>
              <li className={styles.listed}>
                <Image src={reliable} alt="reliable" />
                <div>
                  <p>
                    <b>Enhanced reliability</b>
                  </p>
                  <p>
                    Minimize cell micro-crack impacts to module. Snow loads up
                    to 5,400Pa, wind loads up to 2,400Pa
                  </p>
                </div>
              </li>
              <li className={styles.listed}>
                <Image src={pimg} alt="pimg" />
                <div>
                  <p>
                    <b>Higher energy yield, lower LCOE</b>
                  </p>
                  <p>
                    Low temperature coefficient (Pmax): -0.29%/℃, more energy in
                    hot climate. About 2.3% lower LCOE than PERC
                  </p>
                </div>
              </li>
              <li className={styles.listed}>
                <Image src={moren} alt="moren" />
                <div>
                  <p>
                    <b>Bifacial module up to 715W</b>
                  </p>
                  <p>
                    O210 mm wafer 132/120 dual cell N-type TOPCon technology. Up
                    to 85% power bifaciality, more power from the back side.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
