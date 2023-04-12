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
        <div>
            <h2>Our Goal</h2>
            <h3>"Tech should be user-friendly, adaptable, and accessible to all."</h3>
            <p>
                We are focused on providing services in the world of technology 
                at a reasonable price, good quality and fast work. This magical 
                combination has been achieved through meticulous preparation, 
                peer review, scientific papers, and years of practice in different
                environments and projects.
            </p>
        </div>
        <img></img>
      </div>
      <div className="PORTFOLIO">
          <h2>PORTFOLIO</h2>
          <p>MY LATEST WORK </p>
          <div className="carousel"></div>
      </div>
      <div className="programs" >
          <div className="imgmmm">
              <div className="image">
                  <img alt="max_bezs 3dsMax logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img1.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>3dsMax</h3>
                      <h4>2018-2020</h4> 
                  </div>
              </div>
              <div className="image">
                  <img alt="max_bezs ZBrush logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img2.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>ZBrush</h3> 
                      <h4>2019-2020</h4> 
                  </div>
              </div>
              <div className="image">
                  <img alt="max_bezs Python logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img3.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>Python</h3> 
                      <h4>2020</h4> 
                  </div>
              </div>
          </div>
          <div className="imgmmm">
              <div className="image">
                  <img alt="max_bezs Photoshop logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img4.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>Photoshop</h3>
                      <h4>since 2020</h4> 
                  </div>
              </div>
              <div className="image">
                  <img alt="max_bezs HTML CSS logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img5.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>HTML & CSS</h3>
                      <h4>since 2020</h4> 
                  </div>
              </div>
              <div className="image">
                  <img alt="max_bezs After Effects logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img6.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>After Effects</h3>
                      <h4>since 2020</h4> 
                  </div>
              </div>
          </div>
          <div className="imgmmm">
              <div className="image">
                  <img alt="max_bezs Illustrator logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img7.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>Illustrator</h3>
                      <h4>since 2021</h4> 
                  </div>
              </div>
              <div className="image">
                  <img alt="max_bezs Figma logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img8.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>Figma</h3>
                      <h4>since 2021</h4> 
                  </div>
              </div>
              <div className="image">
                  <img alt="max_bezs Blender logo"src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img9.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>Blender</h3>
                      <h4>since 2021</h4> 
                  </div>
              </div>
          </div>
          <div className="imgmmm">
              <div className="image">
                  <img alt="max_bezs Javascript logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img10.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>JS, Node.js, React.js</h3> 
                      <h4>since 2020</h4> 
                  </div>
              </div>
              <div className="image">
                  <img alt="max_bezs Java logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img11.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>Java</h3>
                      <h4>since 2020</h4> 
                  </div>
              </div>
              <div className="image">
                  <img alt="max_bezs Github logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img12.webp" className="imagem"/>
                  <div className="imgtxt">
                      <h3>Github </h3>
                      <h4>since 2021</h4> 
                  </div>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default Home;