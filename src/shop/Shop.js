import '../shop/style/Shop.module.scss';
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';

const Shop = () => {

  return (
        <div>
            <Header/>
            <h2>Mission Statement:</h2>
            <p>
            "Our mission is to inspire, equip, and support individuals who are passionate about self-development and stoicism. We are committed to providing resources that nurture a motivated mindset, encouraging our community to continually learn, grow, and strive for their personal best."
            </p>
            <h2>Value Proposition:</h2>
            <p>
            "Dedicated to the passionate seekers of self-development and stoicism, we offer a comprehensive platform that brings together curated books, online courses, coaching services, mindfulness resources, motivational merchandise, productivity tools, and health and wellness products. We provide the tools you need for your personal growth journey, fostering a community that cherishes learning, growth, and a motivated mindset. Explore, learn, and grow with us."
            </p>
            <h2>Summary:</h2>
            <p>
            The e-commerce business focuses on empowering individuals passionate about self-development and stoicism. It offers a comprehensive platform with resources such as books, courses, coaching services, merchandise, and wellness products. The platform fosters a community for individuals to connect, share insights, and support each other's personal development. The business aims to provide convenient access to resources and a supportive community for individuals seeking personal growth and embracing stoic principles.
            </p>
            Supported by: Andrew Tate, other people who like stoicism so people think these peopple (celebrities) support our shop
        </div>
    );
};
    
export default Shop;