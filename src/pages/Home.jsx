import Knowledge from "../components/Knowledge";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Option from "../components/Option";
import {serviceBestList} from "../infoList";
import ContactUs from "../components/ContactUs"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const listKnowledge = [
    { name: 'Photoshop', size: "80%"},
    { name: 'Blender', size: "75%"},
    { name: 'After Effects', size: "70%"},
    { name: 'Java', size: "70%"},
    { name: 'React', size: "60%"},
    { name: 'Illustrator', size: "60%"},
  ];
  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/services");
    }
  return (
        <div>
            <Header/>
            <div className="layout1">
                <video autoPlay muted loop >
                    <source src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/video%20(6).mp4" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
                <div className="content">
                    <h1>Max Your profit with <br/> Custom Digital Products</h1>
                    <p>
                    Our expert team creates and maintains cutting-edge tech solutions, empowering you to maximize profits today.
                    </p>
                    <div>
                        <ContactUs/>
                        <a style={{marginInlineStart:"24px"}} href="/services">Our Services</a>
                    </div>
                </div>
            </div>
            <div className="deal-section">
                <h2>Best B2B deal ever!</h2>
                <div className="deals">
                    <div className="unit" style={{flexDirection:"row"}}>
                        <div className="tabphoto">
                            <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/Purple%20Icons%20Set%202%20-%20Copy%401-886x807.png"></img>
                        </div>
                        <div className="unit-div">
                            <h3>Affordable pricing</h3>
                            <p>
                                We believe that every
                                business deserves access to high-quality digital solutions,
                                regardless of their size.
                            </p>
                        </div>
                    </div>
                    <div className="unit" style={{flexDirection:"row"}}>
                        <div className="tabphoto">
                            <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/Purple%20Icons%20Set%202%20-%20Copy%401-886x807%20(1).png"></img>
                        </div>
                        <div className="unit-div">
                            <h3>Best technology</h3>
                            <p>
                                We stay current with the most up-to-date industry standards. 
                                We're using the best tools to create custom digital
                                products.
                            </p>
                        </div>
                    </div>
                    <div className="unit" style={{flexDirection:"row"}}>
                        <div className="tabphoto">
                            <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/Purple%20Icons%20Set%209%20-%20Copy%401-1081x758.png"></img>
                        </div>
                        <div className="unit-div">
                            <h3>Efficient workflows</h3>
                            <p>
                                We optimize productivity, and deliver 
                                high-quality results faster
                                using project management tools to do work efficiently.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/**<div className="prof">
                 <div className="professional">
                    <div className="professional-text" >
                        <h2>PROFESSIONAL</h2>
                        <p>MY KNOWLEDGE LEVEL IN SOFTWARE</p>
                    </div>
                    <div className="list-knowledge">
                        {listKnowledge.map(list => (
                        <Knowledge key={list.name} name = {list.name} size = {list.size}/>
                        ))}
                    </div>
                </div>
            </div>**/}
            <div className="goal-section">
                <div className="goal-section-text">
                    <h2>Our Goal</h2>
                    <br/>
                    <h3>"Tech should be user-friendly, <br/> adaptable, and accessible to all."</h3>
                    <br/>
                    <p className="ph">
                    We offer affordable technology services without compromising quality or speed. Our success stems from extensive preparation, rigorous peer review, scientific research, and years of experience in diverse environments and projects.
                    </p>
                </div>
                <img className="goal-section-img ph"  src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/portfolio-background.jpg"></img>
            </div>
            <div className="pricing-home">
                <h2>Our Best <br/> Custom Digital Products</h2>
                <div className="pricing-options" >
                    {serviceBestList.map(list => (
                    <Option key={list.options} title = {list.title} options = {list.options} href = {list.href}/>
                    ))}
                    
                </div>
                <button onClick={handleClick}>More Services</button>
            </div>
            <Footer/>
        </div>
    );
};
    
export default Home;