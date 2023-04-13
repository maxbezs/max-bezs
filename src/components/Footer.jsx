import {HiOutlineMail} from "react-icons/hi"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineYoutube} from "react-icons/ai"
import {FiGithub} from "react-icons/fi"
import {TbBrandTelegram} from "react-icons/tb"
import {RiGooglePlayLine} from "react-icons/ri"
import {SiOpensea} from "react-icons/si"
import {SiSketchfab} from "react-icons/si"
import {SiPatreon} from "react-icons/si"
import {SiTiktok} from "react-icons/si"
import {SiLinktree} from "react-icons/si"
import ContactUs from "../components/ContactUs"
const Footer = () => {
    return (
        <div>
            <div className="question-action">
                <h2>Ready to go?</h2>
                <ContactUs/>
            </div>
            <footer>
                <div className="footer-colums">
                    <div className="footer-column">
                        <h3>Browse</h3>
                        <a aria-label='home page' href="/#/">Home</a>
                        <a aria-label='blog page' href="/#/blog">Blog</a>
                        <a aria-label='service page' href="/#/services">Services</a>
                        <a aria-label='community page' href="/#/community">Community</a>
                    </div>
                    <div className="footer-column">
                        <h3>Our Services</h3>
                        <a href="/#/services/webpage">Webpage</a>
                        <a href="/#/services/web-app">Web-app</a>
                        <a href="/#/services/mobile-app">Mobile app</a>
                        <a href="/#/services/webpage-builder">Webpage Builder</a>
                        <a href="/#/services/api">API</a>
                        <a href="/#/services/e-commerce">E-commerce</a>
                        <a href="/#/services/other">Other</a>
                    </div>
                    <div className="footer-column" >
                        <h3>Contact</h3>
                        <div className="contactlinks">
                            <a href="mailto:max.bezsmertnyi@gmail.com">
                                <HiOutlineMail className="contactimg"/>
                            </a>
                            <a href="https://youtube.com/@max_bezs">
                                <AiOutlineYoutube className="contactimg"/>
                            </a>
                            <a href="https://www.instagram.com/max_bezs/">
                                <BsInstagram className="contactimg"/>
                            </a>
                            <a href="https://github.com/maxbezs">
                                <FiGithub className="contactimg"/>
                            </a>
                            <a href="https://t.me/max_bezs">
                                <TbBrandTelegram className="contactimg"/>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.eafappb.leafapp">
                                <RiGooglePlayLine className="contactimg"/>
                            </a>
                            <a href="https://opensea.io/max_bezs">
                                <SiOpensea className="contactimg"/>
                            </a>
                            <a href="https://sketchfab.com/max_bezs">
                                <SiSketchfab className="contactimg"/>
                            </a>
                            <a href="https://www.patreon.com/max_bezs">
                                <SiPatreon className="contactimg"/>
                            </a>
                            <a href="https://tiktok.com/@max_bezs">
                                <SiTiktok className="contactimg"/>
                            </a>
                            <a href="https://linktr.ee/max_bezs">
                                <SiLinktree className="contactimg"/>
                            </a>
                        </div>
                        <ContactUs/>  
                    </div>
                </div>
                <div className="footer-row">
                    <img alt="max_bezs logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icon192transparent.png"/>
                    <p>© Copyright 2023 max-bezs. All rights reserved.</p>
                </div>
            </footer>    
        </div>
        
    );
};
    
export default Footer;