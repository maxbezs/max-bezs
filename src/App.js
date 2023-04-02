import './style/App.scss';
import './style/Elements.scss';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Community from "./pages/Community";
import CommunityPatreon from "./pages/CommunityPatreon";
import CommunityNFT from "./pages/CommunityNFT";
import Design from "./pages/Design";
import ServiceApi from "./pages/services/ServiceApi"
import ServiceWebpage from "./pages/services/ServiceWebpage"
import ServiceWebApp from "./pages/services/ServiceWebApp"
import ServiceMobileApp from "./pages/services/ServiceMobileApp"
import ServiceWebpageBuilder from "./pages/services/ServiceWebpageBuilder"
import ServiceEcommerce from "./pages/services/ServiceEcommerce"
import ServiceOther from "./pages/services/ServiceOther"
import Contactus from "./pages/Contactus"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/:blogid" element={<Blog />} />
      <Route path="/services" element={<Service />} />
      <Route path="/services/api" element={<ServiceApi />} />
      <Route path="/services/webpage" element={<ServiceWebpage />} />
      <Route path="/services/web-app" element={<ServiceWebApp />} />
      <Route path="/services/mobile-app" element={<ServiceMobileApp />} />
      <Route path="/services/webpage-builder" element={<ServiceWebpageBuilder />} />
      <Route path="/services/e-commerce" element={<ServiceEcommerce />} />
      <Route path="/services/other" element={<ServiceOther />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/patreon" element={<CommunityPatreon />} />
      <Route path="/community/nft" element={<CommunityNFT />} />
      <Route path="/design" element={<Design />} />
      <Route path="/contact-us" element={<Contactus />} />
    </Routes>
  );
}

export default App;
