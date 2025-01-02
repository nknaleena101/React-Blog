import React from 'react'
import "./Blogposts.css"

function BlogPosts() {
  return (
    <div className="blog">
      <div className="blog-topTexts">
        <p className='date'>October 23, 2024</p>
        <h1 className="title">New Chevrolet C8 ZR1 is Quickest and Fastest Corvette Ever</h1>
        <p className="description">Chevrolet is spilling more details on the performance capabilities of the C8 Corvette ZR1 prior to its release. The 2025 ZR1 is proving to be an impressive performer and after learning the top speed,</p>
      </div>
      <div className="blog-image">
        <img className='img' src="https://cdn.shopify.com/s/files/1/1020/3561/files/392768095_1359236014977176_1133052176004510106_n.jpg?v=1699558491" alt="" />
      </div>
      <div className="blog-bottomText">
        <h2 className='subTitle'>High power pays off</h2>
        <p className='blogP'>The 2025 Chevrolet Corvette is capable of 0-60 miles per hour in just  2.3 seconds and blasting through the quarter mile in 9.6 seconds with a  trap speed of 150 mph. That’s Bugatti Chiron, Porsche 918 Spyder, and McLaren P1 levels of blisteringly quick. The mind-boggling numbers are pulled off if the 2025 Corvette ZR1 is  equipped with the ZTK package, which includes the Carbon Fiber Aero  package seen in the pictures, along with Michelin Pilot Sport Cup 2R  tires.</p>
      </div>
    </div>
  )
}

export default BlogPosts