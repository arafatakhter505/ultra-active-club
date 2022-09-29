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
        title="Difference between props and state"
        body="Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component."
      ></BlogItem>
      <BlogItem
        title="What works without useEffect data load"
        body="You respond that your component needs to do something after rendering. React will remember the function you pass. Example: Fetching data from any api, Updating the DOM, Timer."
      ></BlogItem>
    </div>
  );
};

export default Blog;
