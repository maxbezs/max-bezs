import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import './style/App.scss';
import './style/Elements.scss';
// Import your existing components
const Home = lazy(() => import('./pages/Home'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Blog = lazy(() => import('./pages/Blog'));
const Service = lazy(() => import('./pages/Service'));
const ServiceApi = lazy(() => import('./pages/services/ServiceApi'));
const ServiceWebpage = lazy(() => import('./pages/services/ServiceWebpage'));
const ServiceWebApp = lazy(() => import('./pages/services/ServiceWebApp'));
const ServiceMobileApp = lazy(() => import('./pages/services/ServiceMobileApp'));
const ServiceWebpageBuilder = lazy(() => import('./pages/services/ServiceWebpageBuilder'));
const ServiceEcommerce = lazy(() => import('./pages/services/ServiceEcommerce'));
const ServiceOther = lazy(() => import('./pages/services/ServiceOther'));
const Community = lazy(() => import('./pages/Community'));
const CommunityPatreon = lazy(() => import('./pages/CommunityPatreon'));
const CommunityNFT = lazy(() => import('./pages/CommunityNFT'));
const Design = lazy(() => import('./pages/Design'));
const ContactUs = lazy(() => import('./pages/Contactus'));
const Shop = lazy(() => import('./shop/Shop'));
const LearningAndDevelopment = lazy(() => import('./shop/pages/Learning&Development/LearningAndDevelopment'));
const MindfulnessAndMeditation = lazy(() => import('./shop/pages/Mindfulness&Meditation/MindfulnessAndMeditation'));
const MotivationalApparelAndAccessories = lazy(() => import('./shop/pages/MotivationalApparel&Accessories/MotivationalApparelAndAccessories'));
const PersonalGrowthAndProductivity = lazy(() => import('./shop/pages/PersonalGrowth&Productivity/PersonalGrowthAndProductivity'));
const WellnessAndHealth = lazy(() => import('./shop/pages/Wellness&Health/WellnessAndHealth'));
const Book = lazy(() => import('./pages/Book'));

// Add more lazy-loaded components here for future pages

function App() {
  return (
    <ScrollToTop>
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/learning-and-development" element={<LearningAndDevelopment />} />
          <Route path="/shop/mindfulness-and-meditation" element={<MindfulnessAndMeditation />} />
          <Route path="/shop/motivational-apparel-and-accessories" element={<MotivationalApparelAndAccessories />} />
          <Route path="/shop/personal-growth-and-productivity" element={<PersonalGrowthAndProductivity />} />
          <Route path="/shop/wellness-and-health" element={<WellnessAndHealth />} />
          <Route path="/book" element={<Book />} />

          {/* Add routes for future pages here */}
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
}

export default App;
