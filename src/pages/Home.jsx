import { Link } from "react-router-dom";
import { MoveRight } from 'lucide-react';
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import "./Home.css";

function Home() {
  return (
    <div className="hero">
      <h1 className="hero-title">FEATURED POSTS</h1>
      <FeaturedPosts />
      <div className="hero-link">
        <Link to="/AllPosts">
        SEE NEW POSTS
        <MoveRight />
        </Link>
      </div>
    </div>
  );
}
export default Home;
