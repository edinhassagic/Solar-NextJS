"use client"

import Link from "next/link";
import styles from "./Pagination.module.css"

const CustomLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className={styles.link}>{children}</a>
    </Link>
  );
};

export default CustomLink