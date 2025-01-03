import React from "react";
import Card from "./Card/Card";

function PostList(props) {
  const latestPosts = props.posts.slice(-4)
  
  return (
    <>
      {latestPosts.map((post) => (
        <Card 
        key={post.pid}
        id={post.pid}
        image={post.image}
        title={post.title}
        description={post.description}
        category={post.category}
        publishDate={post.publishDate}
        blog={post.blog}
        />
      ))}
      {/* {props.posts.map((post) => (
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
      ))} */}
    </>
  );
}

export default PostList;
