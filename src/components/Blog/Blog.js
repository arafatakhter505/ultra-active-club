import React from "react";
import BlogItem from "../BlogItem/BlogItem";

const Blog = () => {
  return (
    <div>
      <h3>Blogs</h3>
      <BlogItem
        title="How does react work"
        body="ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code."
      ></BlogItem>
      <BlogItem
        title="How does react work"
        body="ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code."
      ></BlogItem>
      <BlogItem
        title="How does react work"
        body="ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code."
      ></BlogItem>
    </div>
  );
};

export default Blog;
