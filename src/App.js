import './style/App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import Community from "./pages/Community";
import CommunityPatreon from "./pages/CommunityPatreon";
import CommunityNFT from "./pages/CommunityNFT";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/:blogid" element={<Blog />} />
      <Route path="/work" element={<Work />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/patreon" element={<CommunityPatreon />} />
      <Route path="/community/nft" element={<CommunityNFT />} />
    </Routes>
  );
}

export default App;
