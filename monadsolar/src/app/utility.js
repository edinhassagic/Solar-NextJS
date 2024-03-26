"use server";
import { TextareaAutosize } from "@mui/material";
import { revalidateTag, revalidatePath } from "next/cache";
export const saveEditedBlog = async (id, title, descriptionValue) => {
  try {
    const requestOptions = {
      method: "PATCH",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: descriptionValue,
      }),
    };

    const response = await fetch(
      `http://localhost:3001/blogs/${id}`,
      requestOptions
    );
    revalidateTag("edit-id");

    if (response.ok) {
    } else {
      console.error("Failed to update blog");
    }
  } catch (error) {
    console.error("Error updating blog:", error);
  }
};

export const deleteBlog = async (id) => {
  try {
    console.log(id, "dosao u id");
    await fetch(`http://localhost:3001/blogs/${id}`, {
      method: "DELETE",
      cache: 'no-cache'
    });

  } catch (error) {
    console.log(error);
  }
};

export const saveBlog = async (title, desc, image) => {
  try {
    const response = await fetch(`http://localhost:3001/blogs/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: desc,
        image: "",
      }),
    });
    revalidateTag("add-blog-id");

    if (response.ok) {
      const { id } = await response.json();
      return id;
    } else {
      console.error("Failed to save blog");
    }
  } catch (error) {
    console.error("Error saving blog:", error);
  }
};
