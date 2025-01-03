import React from "react";
import Card from "./Card/Card";

function PostList(props) {
  return (
    <>
      {props.posts.map((post) => (
        <Card 
            key={post.pid}
            id={post.id}
            image={post.image}
            title={post.title}
            category={post.category}
        />
      ))}
    </>
  );
}

export default PostList;
