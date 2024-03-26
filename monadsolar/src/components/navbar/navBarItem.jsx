// CustomLink.jsx
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const CustomLink = ({ text, href, onClick }) => {
  return (
    <Link onClick={onClick} href={href} className={styles.nav_link}>
      {text}
    </Link>
  );
};

export default CustomLink;
