import React from 'react'
import { useLocation } from "react-router-dom";
import "./Blogposts.css"

function BlogPosts() {
  const location = useLocation();
  const data = location.state;
  
  return (
    <div className="blog">
      <div className="blog-topTexts">
        <p className='date'>{data.publishDate}</p>
        <h1 className="title">{data.title}</h1>
        <p className="description">{data.description}</p>
      </div>
      <div className="blog-image">
        <img className='img' src={data.image} alt={data.title} />
      </div>
      <div className="blog-bottomText">
        {/* <h2 className='subTitle'>High power pays off</h2> */}
        <p className='blogP'>{data.blog}</p>
      </div>
    </div>
  )
}

export default BlogPosts