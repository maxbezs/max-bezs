import Knowledge from "../components/Knowledge";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const listKnowledge = [
    { name: 'Photoshop', size: "80%"},
    { name: 'Blender', size: "75%"},
    { name: 'After Effects', size: "70%"},
    { name: 'Java', size: "70%"},
    { name: 'React', size: "60%"},
    { name: 'Illustrator', size: "60%"},
  ];
  return (
        <div>
            <Header/>
            <div className="layout1">
                <video autoPlay muted loop >
                    <source src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/video%20(6).mp4" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
                <div className="content">
                    <h1>We create, build, lunch <br/> Custom Digital Products</h1>
                    <p>
                        Our expert team create Custom Digital Products for your business. 
                        From idea generation to market 
                        domination, we provide comprehensive support to help
                        you unlock your business's potential.
                    </p>
                    <div>
                        <button>Contact Us</button>
                        <a href="/#/services">Our Services</a>
                    </div>
                </div>
            </div>
            <div className="deal-section">
                <h2>Best B2B deal ever!</h2>
                <div className="deals">
                    <div className="unit">
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
                    <div className="unit">
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
                    <div className="unit">
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
                <div style={{width:"50%", paddingInlineStart:"10vw"}}>
                    <h2>Our Goal</h2>
                    <br/>
                    <h3>"Tech should be user-friendly, <br/> adaptable, and accessible to all."</h3>
                    <br/>
                    <p>
                        We are focused on providing services in the world of technology 
                        at a reasonable price, good quality and fast work. This magical 
                        combination has been achieved through meticulous preparation, 
                        peer review, scientific papers, and years of practice in different
                        environments and projects.
                    </p>
                </div>
                <img style={{width:"50%", objectFit:"cover", overflow:"hidden", boxSizing:"border-box", }} src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/portfolio-background.jpg"></img>
            </div>
            <div className="pricing">
                <h2>Our Best Custom Digital Products</h2>
                <div class="pricing-options">
                    <div class="card">
                        <h3>Webpage</h3>
                        <li>1 web page</li>
                        <li>HTML, CSS, JS</li>
                        <li>Frontend only</li>
                        <button>Details</button>
                    </div>
                    <div class="card">
                        <h3>Web-app</h3>
                        <li>React.js web app</li>
                        <li>1 web page</li>
                        <li>Frontend only</li>
                        <button>Details</button>
                    </div>
                    <div class="card">
                        <h3>API</h3>
                        <li>GraphQl, Flask</li>
                        <li>Backend for website</li>
                        <button>Details</button>
                    </div>
                </div>
                <button>More</button>
            </div>
            <Footer/>
        </div>
    );
};
    
export default Home;