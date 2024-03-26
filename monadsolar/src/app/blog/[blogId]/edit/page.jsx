"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter from next/router
import Editor from "@/components/Editor/Editor";
import styles from "./account.module.css";
import EditorPreview from "@/components/EditorPreview/page";

import { saveEditedBlog } from "../../../utility";

const Account = ({ params }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [blogData, setBlogData] = useState({
    id: "",
    image: "",
    title: "",
    date: "",
    description: "",
  });

  const editId = params.blogId;

  console.log(editId);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/blogs/${editId}`, {
        cache: "no-store",
      });
      const { id, image, title, description, date } = await response.json();
      setBlogData({ id, image, title, description, date });
      setDescriptionValue(description);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };



  const [descriptionValue, setDescriptionValue] = useState();

  useEffect(() => {
    setDescriptionValue(blogData.description);
  }, [blogData.description]);



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBlogData({ ...data, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const save = async () => {
    await saveEditedBlog(editId, blogData.title, descriptionValue);
    router.push(`/blog/${editId}`);
  };
  return (
    <div className="layout">
      <div className="middle">
        <h2>{"Edit Blog"}:</h2>
        <div className={styles.container}>
          <div className={styles.form_container}>
            <div className={styles.form_input}>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={blogData.title}
                onChange={handleInputChange}
              />

              <label>Import Cover Image:</label>
            </div>
            {blogData.image && <div>Cover image already selected</div>}
            <Editor
              value={descriptionValue}
              setValue={setDescriptionValue}
              saveBlog={save}
            />
          </div>
          <EditorPreview value={descriptionValue} />
        </div>
      </div>
    </div>
  );
};

export default Account;
