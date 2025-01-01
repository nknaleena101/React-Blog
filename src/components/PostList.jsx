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
            description={post.description}
            category={post.category}
            publishDate={post.publishDate}
            blog={post.blog}
        />
      ))}
    </>
  );
}

export default PostList;
