import '../shop/style/Shop.scss';
import { Route, Routes } from "react-router-dom"
import LearningAndDevelopment from './pages/LearningAndDevelopment';
import MindfulnessAndMeditation from './pages/MindfulnessAndMeditation';
import MotivationalApparelAndAccessories from './pages/MotivationalApparelAndAccessories';
import PersonalGrowthAndProductivity from './pages/PersonalGrowthAndProductivity';
import WellnessAndHealth from './pages/WellnessAndHealth';
import ScrollToTop from '../ScrollToTop';
import ShopHome from './pages/ShopHome';

const Shop = () => {

  return (
            <ScrollToTop>
                <Routes>
                    <Route path="/shop" element={<ShopHome/>} />
                    <Route path="/shop/learning-and-development" element={<LearningAndDevelopment/>} />
                    <Route path="/shop/mindfulness-and-meditation" element={<MindfulnessAndMeditation/>} />
                    <Route path="/shop/motivational-apparel-and-accessories" element={<MotivationalApparelAndAccessories/>} />
                    <Route path="/shop/personal-growth-and-productivity" element={<PersonalGrowthAndProductivity/>} />
                    <Route path="/shop/wellness-and-health" element={<WellnessAndHealth/>} />
                </Routes>
            </ScrollToTop>
    );
};
    
export default Shop;