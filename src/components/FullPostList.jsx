import React from "react";
import Blogposts from "../pages/BlogPosts";
import BLOG_POSTS from "./BLOG_POSTS";
BLOG_POSTS

function FullPostList(props) {
  return (
    <>
      {BLOG_POSTS.map(blog => (
        <Blogposts
          key={blog.pid}
          id={blog.id}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          category={blog.category}
          publishDate={blog.publishDate}
          blog={blog.blog}
        />
      ))}
    </>
  );
}

export default FullPostList;
