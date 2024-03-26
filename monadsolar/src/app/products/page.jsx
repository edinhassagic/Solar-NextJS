import React from "react";
import styles from "./Products.module.css";
import Link from "next/link";

import Image from "next/image";
import product2 from "/public/product2.png";
import prod23 from "/public/prod23.png";
import proud33 from "/public/proud33.png";
import HeroSegment from "@/components/HeroSegment/page";

import img from "/public/products.jpg";

export const metadata = {
  title: "Products",
  description: "Solar panels",
};

const Products = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="banner_image">
          <HeroSegment src={img}>
            <div className="banner_text">
              <h1>Products</h1>
            </div>
          </HeroSegment>
        </div>
      </div>
      <div className="layout">
        <div className="middle">
          <section id="products_sec">
            <div className={styles.products_main}>
              <div className={styles.column}>
                <Image src={product2} alt="image" className={styles.image} />
              </div>

              <div className={styles.columntext}>
                <div className={styles.text}>
                  <h1>TOPBiHiKu7 </h1>

                  <p>Bifacial N-type TOPCon Module</p>
                  <p>
                    CS7N-TB-AG: 2384 x 1303 x 33 mm Front side power range:
                    685~715 W CS7L-TB-AG: 2172 x 1303 x 33 mm Front side power
                    range: 615~645 W
                  </p>
                  <p>
                    Wafer size 210mm Module efficiency up to 23 % Up to 85%
                    Power Bifaciality Lower LCOE & system cost
                  </p>
                  <div style={{ marginTop: "30px" }}>
                    <Link
                      href="products/single-product"
                      className={styles.button}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.products_main}>
              <div className={styles.columntext}>
                <div className={styles.text}>
                  <h1>TOPBiHiKu7 </h1>

                  <p>Bifacial N-type TOPCon Module</p>
                  <p>
                    CS7N-TB-AG: 2384 x 1303 x 33 mm Front side power range:
                    685~715 W CS7L-TB-AG: 2172 x 1303 x 33 mm Front side power
                    range: 615~645 W
                  </p>
                  <p>
                    Wafer size 210mm Module efficiency up to 23 % Up to 85%
                    Power Bifaciality Lower LCOE & system cost
                  </p>
                  <div style={{ marginTop: "30px" }}>
                    <Link
                      href="products/single-product"
                      className={styles.button}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <Image alt="image" src={prod23} className={styles.image} />
              </div>
            </div>

            <div className={styles.products_main}>
              <div className={styles.column}>
                <Image alt="image" src={proud33} className={styles.image} />
              </div>
              <div className={styles.columntext}>
                <div className={styles.text}>
                  <h1>TOPBiHiKu7 </h1>

                  <p>Bifacial N-type TOPCon Module</p>
                  <p>
                    685~715 W CS7L-TB-AG: 2172 x 1303 x 33 mm Front side power
                    range: 615~645 W
                  </p>
                  <p>
                    Wafer size 210mm Module efficiency up to 23 % Up to 85%
                    Power Bifaciality Lower LCOE & system cost{" "}
                  </p>
                  <div style={{ marginTop: "30px" }}>
                    <Link
                      href="products/single-product"
                      className={styles.button}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.products_main}>
              <div className={styles.columntext}>
                <div className={styles.text}>
                  <h1>TOPBiHiKu7 </h1>

                  <p>Bifacial N-type TOPCon Module</p>
                  <p>
                    CS7N-TB-AG: 2384 x 1303 x 33 mm Front side power range:
                    685~715 W CS7L-TB-AG: 2172 x 1303 x 33 mm Front side power
                    range: 615~645 W
                  </p>
                  <p>
                    Wafer size 210mm Module efficiency up to 23 % Up to 85%
                    Power Bifaciality Lower LCOE & system cost
                  </p>
                  <div style={{ marginTop: "30px" }}>
                    <Link
                      href="products/single-product"
                      className={styles.button}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <Image alt="image" src={prod23} className={styles.image} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
