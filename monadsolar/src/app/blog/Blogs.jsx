import { Suspense } from "react";
import styles from "./Blog.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";

export const Loader = () => <div>Loading blogs</div>;

const Blogs = async ({ page }) => {
  const data = await fetch(
    `http://localhost:3001/blogs?page=${page}`,
    {
      cache: "no-store",
    },
    { next: { tags: ["delete-blog", "edit-id", "add-blog-id"] } }
  )
    .then((response) => response.json())
    .then(({ data }) => data);

  return (
    <div className={styles.blog_cards_wrapper}>
      <div className={styles.blog_cards_grid}>
        {data.map((card, index) => (
          <BlogCard
            key={index}
            id={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
