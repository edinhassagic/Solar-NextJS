import Link from "next/link"
import "./globals.css";

const NotFoundBlog = () => {
  return (
    <div className="layout">
      <div className="middle">
        <div className="page_not_found_container">
          <h1> Page Not Found</h1>
          <p> Sorry, the page you are looking for does not exist.</p>
          <Link className="go_back_btn" href="/"> Go Back </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundBlog