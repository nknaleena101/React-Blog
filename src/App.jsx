import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Beawriter, LandingPage, Talktous } from "./pages"
import Navbar from './components/Navbar/Navbar'
import Beawriter from './pages/Beawriter'
import Home from './pages/Home'
import Talktous from './pages/Talktous'
import BlogPosts from "./pages/BlogPosts";
import NoPage from './pages/NoPage'

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/beawriter" element={<Beawriter />} />
        <Route path="/Talktous" element={<Talktous />} />
        <Route path='/Blogposts' element={<BlogPosts />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
