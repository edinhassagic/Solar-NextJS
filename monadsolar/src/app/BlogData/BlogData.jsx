import image1 from "../../../public/blog1.jpg";
import image2 from "../../../public/blog2.jpg";
import image3 from "../../../public/blog3.png";
import { v4 as uuidv4 } from "uuid";
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const blogData = [
  {
    id: 1,
    image: image2,
    title:
      "2 Canadian Solar Partners with Sol Systems to Ramp Up U.S. Module Manufacturing",
    description:
      "2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
    date: "12 December 2023",
  },
  {
    id: 2,
    image: image3,
    title:
      "3 Canadian Solar Partners with Sol Systems to Ramp Up U.S. Module Manufacturing",
    description:
      "3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
    date: "13 December 2023",
  },
  {
    id: 3,
    image: image1,
    title:
      "4 Canadian Solar Partners with Sol Systems to Ramp Up U.S. Module Manufacturing",
    description:
      "4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
    date: "14 December 2023",
  },
];

export const getBlogs = async (page) => {
  await delay(2000);
  const blogsPerPage = 6;
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = page * blogsPerPage;
  const filteredBlogs = blogData.slice(startIndex, endIndex);
  return {
    data: filteredBlogs,
    paggination: {
      totalItems: blogData.length,
      numOfPages: Math.ceil(totalItems / blogsPerPage),
    },
  };
};

export const getBlog = async (id) => {
  await delay(2000);
  const blog = blogData.find((blog) => blog.id == id);
  return blog;
};

export const addBlog = async ({ title, description }) => {
  const newBlog = {
    id: uuidv4(),
    title,
    description,
    image: image1,
    date: new Date(),
  };

  await delay(2000);
  blogData.push(newBlog);
};

export const deleteBlog = async (id) => {
  await delay(2000);

  const deletedBlog = blogData.filter((blog) => blog.id !== id);

  return deletedBlog;
};

export const updateBlog = async ({ id, title, description }) => {
  const index = blogData.findIndex((blog) => blog.id === id);

  await delay(2000);

  if (!index) return 

  blogData[index] = {
    ...prev,
    title,
    description,
    date: new Date(),
  };

  return blogData;
};
