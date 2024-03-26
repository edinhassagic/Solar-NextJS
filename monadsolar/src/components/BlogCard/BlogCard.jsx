import React from "react";
import styles from "./BlogCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";



const BlogCard = (props) => {

  return (
    <div className={styles.blog_card_container}>
      <div className={styles.blog_card_img_container}>
        <div className={styles.blog_card_img_overlay}>
          <p> {props.title} </p>
        </div>
        {/*<Image
          className={styles.blog_card_img}
          src={props.image} 
          alt=""
          width={100}
          height={50}
          layout="responsive" // Adjust image size responsively
          objectFit="cover"   // Adjust how the image fits its container
          objectPosition="center"
        />*/}
        <img className={styles.blog_card_img} src={props.image} alt="blogimg" />
      </div>

      <div className={styles.description_container}>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>

      <div className={styles.blog_card_action_date_container}>
        <Link className={styles.more_btn} href={`/blog/${encodeURIComponent(props.id)}`}>
          MORE <FontAwesomeIcon icon={faAnglesRight} />
        </Link> 
       
        <p className={styles.date}> {new Date(props.date).toLocaleDateString("en-GB")} </p>
      </div>
    </div>
  );
};

export default BlogCard;
