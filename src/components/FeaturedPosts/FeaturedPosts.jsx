import React from "react";
import "./FeaturedPosts.css";
import PostList from "../PostList";



const BLOG_POSTS = [
    {
        pid: 'p1',
        title: 'New Chevrolet C8 ZR1 is Quickest and Fastest Corvette Ever',
        publishDate: '10.23.2023',
        category: 'Cars and trucks',
        categoryColor: "white",
        description: 'Chevrolet is spilling more details on the performance capabilities of the C8 Corvette ZR1 prior to its release. The 2025 ZR1 is proving to be an impressive performer and after learning the top speed.',
        image: 'https://cdn.shopify.com/s/files/1/1020/3561/files/392768095_1359236014977176_1133052176004510106_n.jpg?v=1699558491',
        blog: 'The 2025 Chevrolet Corvette is capable of 0-60 miles per hour in just  2.3 seconds and blasting through the quarter mile in 9.6 seconds with a  trap speed of 150 mph. That’s Bugatti Chiron, Porsche 918 Spyder, and McLaren P1 levels of blisteringly quick. The mind-boggling numbers are pulled off if the 2025 Corvette ZR1 is  equipped with the ZTK package, which includes the Carbon Fiber Aero  package seen in the pictures, along with Michelin Pilot Sport Cup 2R  tires.'
    },
    {
        pid: 'p2',
        title: 'How to Style Your Trench Coat for Winter',
        publishDate: '10.23.2023',
        category: 'Fashion',
        description: 'Chevrolet is spilling more details on the performance capabilities of the C8 Corvette ZR1 prior to its release. The 2025 ZR1 is proving to be an impressive performer and after learning the top speed.',
        image: 'https://www.brooklynblonde.com/wp-content/uploads/2017/04/1e-3.jpg',
        blog: 'The 2025 Chevrolet Corvette is capable of 0-60 miles per hour in just  2.3 seconds and blasting through the quarter mile in 9.6 seconds with a  trap speed of 150 mph. That’s Bugatti Chiron, Porsche 918 Spyder, and McLaren P1 levels of blisteringly quick. The mind-boggling numbers are pulled off if the 2025 Corvette ZR1 is  equipped with the ZTK package, which includes the Carbon Fiber Aero  package seen in the pictures, along with Michelin Pilot Sport Cup 2R  tires.'
    },
    {
        pid: 'p3',
        title: 'Mental wellness while you work',
        publishDate: '10.23.2023',
        category: 'Lifestyle',
        description: 'Chevrolet is spilling more details on the performance capabilities of the C8 Corvette ZR1 prior to its release. The 2025 ZR1 is proving to be an impressive performer and after learning the top speed.',
        image: 'https://eco-cdn.iqpc.com/eco/images/channel_content/images/terkel_mental_healthenzQWpjkKpmSKZbsrut7ArzuHKgUGZeIUyUistU3.webp',
        blog: 'The 2025 Chevrolet Corvette is capable of 0-60 miles per hour in just  2.3 seconds and blasting through the quarter mile in 9.6 seconds with a  trap speed of 150 mph. That’s Bugatti Chiron, Porsche 918 Spyder, and McLaren P1 levels of blisteringly quick. The mind-boggling numbers are pulled off if the 2025 Corvette ZR1 is  equipped with the ZTK package, which includes the Carbon Fiber Aero  package seen in the pictures, along with Michelin Pilot Sport Cup 2R  tires.'
    },
    {
        pid: 'p4',
        title: 'Unique hand made vehicles for small circle of people',
        publishDate: '10.23.2023',
        category: 'Cars and trucks',
        description: 'Chevrolet is spilling more details on the performance capabilities of the C8 Corvette ZR1 prior to its release. The 2025 ZR1 is proving to be an impressive performer and after learning the top speed.',
        image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1j0hzv.img?w=800&h=415&q=60&m=2&f=jpg',
        blog: 'The 2025 Chevrolet Corvette is capable of 0-60 miles per hour in just  2.3 seconds and blasting through the quarter mile in 9.6 seconds with a  trap speed of 150 mph. That’s Bugatti Chiron, Porsche 918 Spyder, and McLaren P1 levels of blisteringly quick. The mind-boggling numbers are pulled off if the 2025 Corvette ZR1 is  equipped with the ZTK package, which includes the Carbon Fiber Aero  package seen in the pictures, along with Michelin Pilot Sport Cup 2R  tires.'
    },
]


function FeaturedPosts() {
  return (
    <div className="FeaturedPosts">
      <PostList posts={BLOG_POSTS} />
    </div>
  );
}

export default FeaturedPosts;
