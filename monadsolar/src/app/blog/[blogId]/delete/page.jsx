import React, { Suspense } from "react";
import styles from "./delete.module.css";
import Link from "next/link";
import { revalidatePath, revalidateTag } from "next/cache";
import { deleteBlog } from "@/app/utility";

import { redirect } from "next/navigation";

const DeleteBlog = async ({ params, searchParams }) => {
  const decide = searchParams?.delete || "";
  console.log(searchParams, "searchParams");
  if (decide == "yes") {
    const handleDelete = async () => {
      console.log(searchParams, "search");
      await deleteBlog(searchParams.id);
      revalidatePath("/blog");
      revalidateTag('delete-blog')

      redirect("/blog");
    };

    await handleDelete();
  }
  if (decide == "no") {
    console.log("no");
    redirect("/blog");
  }

  const blogId = params.blogId;

  return (
    <div className={styles.centered}>
      <Suspense>
        <div className={styles.message}>
          <p>Are you sure you want to delete this blog?</p>
          <Link href={`?delete=yes&id=${blogId}`}>Yes, delete</Link>

          <Link href={`?delete=no&id=${blogId}`}>NO, DONT DELETE</Link>
        </div>
      </Suspense>
    </div>
  );
};

export default DeleteBlog;
