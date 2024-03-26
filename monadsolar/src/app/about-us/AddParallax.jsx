"use client";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const AddParallax = ({ image }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const hideMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    hideMobile();

    window.addEventListener("resize", hideMobile);

    return () => window.removeEventListener("resize", hideMobile);
  }, []);

  if (isMobile) {
    return <Image src={image} alt="Image" className={styles.image} />;
  }

  return (
    <div>
      <ParallaxProvider>
        <Parallax speed={-5}>
          <Image src={image} alt="Parallax Image" className={styles.image} />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default AddParallax;
