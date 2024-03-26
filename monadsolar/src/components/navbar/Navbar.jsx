"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logoImage from "../../../public/logo-no-background.png";
import miniLogoImage from "../../../public/logo-small-no-background.png";
import CustomLink from "./navBarItem";

const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navLinksContainerRef = useRef();
  const searchContainerRef = useRef();

  const searchBlogs = (searchTerm) => {
    const filteredBlogs = blogData.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredBlogs);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    if (term == "") {
      setSearchTerm("");

      setSearchResults([]);
    } else {
      setSearchTerm(term);
      searchBlogs(term);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (event.target.closest(`.${styles.minimized_icon_btn}`)) return;

      if (
        navLinksContainerRef.current &&
        !navLinksContainerRef.current.contains(event.target) &&
        !showLinks
      ) {
        setShowLinks(false);
      }

      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target) &&
        !showSearchInput
      ) {
        setShowSearchInput(false);
      }
    };

    if (typeof document !== "undefined")
      document.addEventListener("click", handleClickOutside);

    return () => {
      if (typeof document !== "undefined")
        document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {

    const handleResize = () => {
      const isScreenMinimized = window.innerWidth <= 1400;
      setIsMinimized(isScreenMinimized);
      setShowSearchInput(false);

      setShowLinks(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(user == "user");
  }, []);

  const handleMagnifierClick = () => {
    setShowSearchInput(!showSearchInput);
    setShowLinks(false);
  };

  const handleBarsClick = () => {

    {
      /*setShowLinks(prevShowLinks => {
      console.log("Before state update:", prevShowLinks);
      const newValue = !prevShowLinks;
      console.log("After state update:", newValue);
      return newValue;
    });*/
    }
    setShowLinks(!showLinks);
    setShowSearchInput(false);
  };

  useEffect(() => {
    console.log("Updated showLinks:", showLinks);
  }, [showLinks]);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginSubmit = () => {
    localStorage.setItem("user", "user");
    setShowLoginModal(false);
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const handleClick = () => {
    setShowLinks(false);
    setShowSearchInput(false);
  };

  return (
    <>
      <div className="layout">
        <div className="middle">
          <div className={styles.navbar_container}>
            <div className={styles.logo_container}>
              <Link href="/">
                <Image
                  className={!isMinimized ? styles.logo : styles.miniLogo}
                  src={isMinimized ? miniLogoImage : logoImage}
                  alt="logo"
                  priority={true}
                />
              </Link>
            </div>

            {isMinimized ? null : (
              <div className={styles.nav_links_container}>
                <CustomLink text="HOME" href="/" />
                <CustomLink text="ABOUT US" href="/about-us" />
                <CustomLink text="PRODUCTS" href="/products" />
                <CustomLink text="BLOG" href="/blog" />
                <CustomLink text="CONTACT" href="/contact" />
                {isLoggedIn && (
                  <CustomLink text="ADD BLOG" href="/blog/newBlog" />
                )}
              </div>
            )}

            {isMinimized ? (
              <div
                className={styles.menu_search_minimized_container}
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
              >
                <button
                  className={styles.minimized_icon_btn}
                  onClick={handleBarsClick}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>

                <button
                  className={styles.minimized_icon_btn}
                  onClick={handleMagnifierClick}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

                <div className={styles.auth_btns_container}>
                  {isLoggedIn ? (
                    <button
                      className={styles.minimized_icon_btn}
                      onClick={handleLogoutClick}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                  ) : (
                    <button
                      className={styles.minimized_icon_btn}
                      onClick={handleLoginClick}
                    >
                      <FontAwesomeIcon icon={faSignInAlt} />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className={styles.search_container}>
                  <input
                    type="text"
                    placeholder="Search..."
                    className={styles.search_input}
                    value={searchTerm}
                    onChange={handleSearch}
                  />

                  <div className={styles.auth_btns_container}>
                    {isLoggedIn ? (
                      <button
                        className={styles.minimized_icon_btn}
                        onClick={handleLogoutClick}
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                      </button>
                    ) : (
                      <button
                        className={styles.minimized_icon_btn}
                        onClick={handleLoginClick}
                      >
                        <FontAwesomeIcon icon={faSignInAlt} />
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {isMinimized && showLinks && (
            <div
              className={styles.nav_links_container_toggle}
              ref={navLinksContainerRef}
            >
              <CustomLink onClick={handleClick} text="HOME" href="/" />
              <CustomLink
                onClick={handleClick}
                text="ABOUT US"
                href="/about-us"
              />
              <CustomLink
                onClick={handleClick}
                text="PRODUCTS"
                href="/products"
              />
              <CustomLink onClick={handleClick} text="BLOG" href="/blog" />
              <CustomLink
                onClick={handleClick}
                text="CONTACT"
                href="/contact"
              />
              {isLoggedIn && (
                <CustomLink
                  onClick={handleClick}
                  text="ADD BLOG"
                  href="/blog/newBlog"
                />
              )}
            </div>
          )}
          {isMinimized && showSearchInput && (
            <div
              className={styles.search_container_toggle}
              ref={searchContainerRef}
            >
              <input
                type="text"
                placeholder="Search..."
                className={styles.search_input + " " + styles.search_input_min}
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          )}

          {showLoginModal && (
            <div className={styles.login_modal}>
              <form onSubmit={handleLoginSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
              <button onClick={() => setShowLoginModal(false)}>Close</button>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className={styles.search_results}>
              <ul>
                {searchResults.map((blog) => (
                  <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <li key={blog.id}>{blog.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
