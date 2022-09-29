import React from "react";
import "./BlogItem.css";

const BlogItem = (props) => {
  const { title, body } = props;
  return (
    <div className="blog-item">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default BlogItem;
