
import Pagination2 from "@/components/pagination/Pagination";

const Pagination = async ({ page }) => {
  const pagination = await fetch(
    `http://localhost:3001/blogs?page=${page}`,
    {
      cache: "no-store",
    },
    { next: { tags: ["delete-blog", "edit-id", "new-blog-id"] } }
  )
    .then((response) => response.json())
    .then(({ paggination }) => paggination);

  return (
    <>
      <Pagination2 currentPage={page} totalPages={pagination.numOfPages} />
    </>
  );
};

export default Pagination;
