import Image from "next/image";
import styles from "./hero.module.css";

const HeroSegment = ({ src, children }) => {
 
  return (
    <div className={styles.header}>
      <div className={styles.banner_image}>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={src} fill={true} />
        </div>
        <div className={styles.banner_text}>{children}</div>
      </div>
    </div>
  );
};

export default HeroSegment;
