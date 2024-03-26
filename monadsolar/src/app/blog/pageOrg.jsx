"use client"

import React from 'react'
import { useState } from 'react'
import styles from './Blog.module.css'
import BlogCard from '../../components/navbar/Navbar';
import Pagination from '@/components/pagination/Pagination';
import { blogData } from '@/data/BlogData';


const Blog = () => {
  const blogCardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * blogCardsPerPage;
  const indexOfFirstCard = indexOfLastCard - blogCardsPerPage;
  const currentBlogCards = blogData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(blogData.length / blogCardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="layout">
        <div className="middle"> 
          <div className={styles.blog_cards_wrapper}>
            <div className={styles.blog_cards_grid}>
              {currentBlogCards.map((card, index) => (
                <BlogCard
                  key={index}
                  id ={card.id}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  date={card.date}
                />
              ))}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
