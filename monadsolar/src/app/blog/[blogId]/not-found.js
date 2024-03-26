import Link from "next/link"
import styles from "./SingleBlog.module.css"

const NotFoundBlog = () => {
  return (
    <div className="layout">
      <div className="middle">
        <div className={styles.blog_not_found_container}>
          <h1> Page Not Found</h1>
          <p> Sorry, the blog you are looking for does not exist.</p>
          <Link className={styles.go_back_to_blog_btn} href="/blog"> Go back to Blogs </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundBlog