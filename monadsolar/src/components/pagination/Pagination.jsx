"use client";
import styles from "./Pagination.module.css";
import Link from "next/link";
import PageSelect from "./pageSelect/PageSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // const pageNumbers = Array.from(
  //   { length: totalPages },
  //   (_, index) => index + 1
  // );

  // const handlePageSelect = (event) => {
  //   const selectedPage = parseInt(event.target.value, 10);
  //   onPageChange(selectedPage);
  // };

  const [currentPageFromUrl, setCurrentPageFromUrl] = useState(1);
/* 
  useEffect(() => {
    // Check if window is defined (client-side rendering)
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get("page");
      const page = pageParam ? parseInt(pageParam, 10) : 1;
      setCurrentPageFromUrl(page);
      console.log(currentPageFromUrl);
    }
  }, []); */

  const renderPageButtons = () => {
    const visiblePageNumbers = [];

    if (currentPage > 3) {
      visiblePageNumbers.push(1, "...");
    }

    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages);
      i++
    ) {
      visiblePageNumbers.push(i);
    }

    if (currentPage < totalPages - 1) {
      visiblePageNumbers.push("...", totalPages);
    }

    return visiblePageNumbers.map((number, index) => (
      <Link
        key={index}
        href={`?page=${typeof number === "number" ? number : currentPage}`}
        className={currentPage === number ? styles.active : ""}
      >
        {number}
      </Link>
    ));
  };

  return (
    <>
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`}>
            <FontAwesomeIcon icon={faChevronLeft} />{" "}
          </Link>
        )}

        {renderPageButtons()}

        {currentPage < totalPages && (
          <Link href={`?page=${currentPage + 1}`}>
            <FontAwesomeIcon icon={faChevronRight} />{" "}
          </Link>
        )}
      </div>
      {/*   <PageSelect
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      /> */}
      {/* <div className={styles.dropdown_container}> */}
      {/* Dropdown for selecting page */}
      {/* <select
          value={currentPage}
          onChange={handlePageSelect}
          className={styles.pageSelect}
        >
          {pageNumbers.map((number) => (
            <option key={number} value={number}>
              Page {number}
            </option>
          ))}
        </select> */}
      {/* </div> */}
    </>
  );
};

export default Pagination;
