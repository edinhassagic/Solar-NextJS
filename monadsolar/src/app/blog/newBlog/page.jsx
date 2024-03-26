"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter from next/router
import Editor from "@/components/Editor/Editor";
import styles from "../[blogId]/edit/account.module.css";
import EditorPreview from "@/components/EditorPreview/page";
import { saveBlog } from "@/app/utility";
import { revalidateTag } from "next/cache";
const Account = ({params}) => {
  const router = useRouter();

  const [blogData, setBlogData] = useState({
    id: "",
    image: "",
    title: "",
    date: "",
    description: "",
  });

  const editId = parseInt(params.blogId);

  
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
        setBlogData({ ...blogData, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

 const save = async ( ) => {


const res = await saveBlog(blogData.title, descriptionValue, '')
router.push(`/blog/${res}`);

 }
  return (
    <div className="layout">
      <div className="middle">
        <h2>{"New Blog"}:</h2>
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
              <input type="file" accept="image/*" onChange={handleFileChange} />

            </div>
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
