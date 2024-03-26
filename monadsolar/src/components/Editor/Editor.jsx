"use client";

import { useCallback, useMemo, useRef } from "react";
import {} from "react";
import dynamic from "next/dynamic";

import "./editor.css";
import "react-quill/dist/quill.snow.css";
import styles from "./Editor.module.css";

const Editor = ({ title, image, value, setValue, saveBlog }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

    const imageHandler = useCallback(() => {
    if (typeof document === "undefined") return;
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current.getEditor();

        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl);
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [
       imageHandler 
    ]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    // "image",
    "color",
    "clean",
  ];

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Editor Content</label>
      <div className={styles.quill_container}>
        <ReactQuill
          className={styles.editor}
          theme="snow"
          value={value}
          formats={formats}
          modules={modules}
          onChange={setValue}
        />

        {/*  <QuillEditor
          ref={(el) => (quill.current = el)}
          className={styles.editor}
          theme="snow"
          value={value}
          formats={formats}
          modules={modules}
          onChange={(value) => setValue(value)}
        /> */}
      </div>
      <button onClick={saveBlog}>Spremi Blog</button>
    </div>
  );
};

export default Editor;
