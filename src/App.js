import './style/App.scss';
import './style/Elements.scss';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import Community from "./pages/Community";
import CommunityPatreon from "./pages/CommunityPatreon";
import CommunityNFT from "./pages/CommunityNFT";
import Design from "./pages/Design";

function App() {
  return (
    <Routes>
      <Route path="/max-bezs/" element={<Home />} />
      <Route path="/max-bezs/blog" element={<Blogs />} />
      <Route path="/max-bezs/blog/:blogid" element={<Blog />} />
      <Route path="/max-bezs/work" element={<Work />} />
      <Route path="/max-bezs/community" element={<Community />} />
      <Route path="/max-bezs/community/patreon" element={<CommunityPatreon />} />
      <Route path="/max-bezs/community/nft" element={<CommunityNFT />} />
      <Route path="/max-bezs/design" element={<Design />} />
    </Routes>
  );
}

export default App;
