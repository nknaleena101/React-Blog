import React from "react";
import "./FeaturedPosts.css";
import PostList from "../PostList";
import BLOG_POSTS from "../BLOG_POSTS";

function FeaturedPosts() {
  return (
    <div className="FeaturedPosts">
      <PostList posts={BLOG_POSTS} />
    </div>
  );
}

export default FeaturedPosts;
