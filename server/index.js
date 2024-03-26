const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Static path for serving images
app.use("/public", express.static(__dirname + "/public"));
var blogData = [
  {
    id: 1,
    image: `http://localhost:${port}/public/blog1.jpg`,
    title:
      "2 Canadian Solar Partners with Sol Systems to Ramp Up U.S. Module Manufacturing",
    description:
      "2 Lorem ipsum dolor sit, amet cdsconsectetur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
    date: "12 December 2023",
  },
  {
    id: 2,
    image: `http://localhost:${port}/public/blog1.jpg`,
    title:
      "3 Canadian Solar Partners wivdth Sol Systems to Ramp Up U.S. Module Manufacturing",
    description:
      "3 Lorem ipsum dolor sit, amet cosnsectetasdaur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
    date: "13 December 2023",
  },
  {
    id: 3,
    image: `http://localhost:${port}/public/blog1.jpg`,
    title:
      "4 Canadian Solar Partnerwes with Sol Systemsdcc to Ramp Up U.S. Module Manufacturing",
    description:
      "4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
    date: "14 December 2023",
  },
];

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

// Blog API routes
app.get("/blogs", async (req, res) => {
  const page = parseInt(req.query.page || 1);
  // Get all blogs
  // Implement your logic here

  const blogsPerPage = 2;
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = page * blogsPerPage;
  const filteredBlogs = blogData.slice(startIndex, endIndex);

  return res.status(200).json({
    data: filteredBlogs,
    paggination: {
      totalItems: blogData.length,
      numOfPages: Math.ceil(blogData.length / blogsPerPage),
    },
  });
});

app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  // Get a single blog by ID
  // Implement your logic here

  console.log(id);
  await delay(2000);
  const blog = blogData.find((blog) => blog.id == id);
  if (!blog) return res.status(404).json({ message: "page not found" });
  return res.status(200).json(blog);
});

app.post("/blogs", async (req, res) => {
  const { title, description } = req.body;
  // Create a new blog
  // Implement your logic here

  const newBlog = {
    id: uuidv4(),
    title,
    description,
    image: `http://localhost:${port}/public/blog1.jpg`,
    date: new Date(),
  };

  await delay(2000);
  blogData.push(newBlog);
  console.log(newBlog);
  return res.status(201).json({ id: newBlog.id });
});

app.patch("/blogs/:id", async (req, res) => {
  const id = req.params.id;

  console.log(id);
  const { title, description } = req.body;
  // Update a blog by ID
  // Implement your logic here
  await delay(2000);
  console.log(description);
  const index = blogData.findIndex((blog) => blog.id === id);

  if (index == -1) return res.status(400).json();
  console.log("hocemo li", index);

  blogData[index] = {
    ...blogData[index],
    title,
    description,
    date: new Date(),
  };

  console.log(blogData);

  return res.status(200).json();
});

app.delete("/blogs/:id", async (req, res) => {
    const id = req.params.id;
    console.log("Deleting blog with ID:", id);
    await delay(2000)
    const index = await blogData.findIndex(blog => blog.id == id);
    if (index != -1) {
      console.log("uspio")
        blogData = [...blogData.slice(0, index), ...blogData.slice(index + 1)];
    }
    console.log(blogData);
    return res.status(202).json(blogData);
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
