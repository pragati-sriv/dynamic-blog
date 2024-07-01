const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 5000;

app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public/images")));

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    image: "/images/image1.jpg",
    author: "John Doe",
    content: "This is the content of the first blog post.",
    authorLinkedIn: "https://linkedin.com/in/johndoe",
  },
  {
    id: 2,
    title: "Second Blog Post",
    image: "/images/image2.jpg",
    author: "Jane Smith",
    content: "This is the content of the second blog post.",
    authorLinkedIn: "https://linkedin.com/in/janesmith",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post)
    return res.status(404).send("The post with the given ID was not found.");
  res.json(post);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
