"use client"

import styles from "../Pagination.module.css"

const PageSelect = ( {currentPage, totalPages, onPageChange} ) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageSelect = (event) => {
    const selectedPage = parseInt(event.target.value, 10);
    onPageChange(selectedPage);
  };

  return (
    <div className={styles.dropdown_container}>
      <select
        value={currentPage}
        onChange={handlePageSelect}
        className={styles.pageSelect}
      >
        {pageNumbers.map((number) => (
          <option key={number} value={number}>
            Page {number}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PageSelect