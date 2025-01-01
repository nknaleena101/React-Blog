import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import "./Home.css";

function Home() {
  return (
    <div className="hero">
      <h1 className="hero-title">FEATURED POSTS</h1>
      <FeaturedPosts />
    </div>
  );
}
export default Home;
