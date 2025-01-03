import React from "react";
import Blogposts from "../pages/BlogPosts";

function FullPostList(props) {
  return (
    <>
      {props.pages.map((page) => (
        <Blogposts
          key={page.pid}
          id={page.id}
          image={page.image}
          title={page.title}
          description={page.description}
          category={page.category}
          publishDate={page.publishDate}
          blog={page.blog}
        />
      ))}
    </>
  );
}

export default FullPostList;
