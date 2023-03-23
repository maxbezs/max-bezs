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
        <div id="videowrapper">
          <div id="fullScreenDiv">
              <div id="videoMessage" className="styling"> 
                  <div className="name">
                      <h1>I'M MAX BEZS.</h1>
                  </div>
              </div>
              <video id="video" role="presentation" preload="auto" playsInline=""
              crossOrigin="anonymous" loop="" muted="" autoPlay="" className="blur">
                  <source src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/video.mp4" type="video/mp4"/>
              </video> 
          </div>
          <div className="visualpart">
              <p>DESIGNER | DEVELOPER</p>
          </div>
          <div className="visualpart">
              <h2>DESIGN</h2>
              <p>
                  I'M USING PHOTOSHOP, ILLUSTRATOR, AFTER EFFECTS, FIGMA TO CREATE
                  2D IMAGES OR VIDEOS. FOR 3D I'M USING BLENDER, HAVE EXPERIENCE 
                  IN ZBRUSH AND 3DSMAX.
              </p>
          </div>
      </div>
      <div className="skills">
          <h2>DESIGN</h2>
          <p>
              I'M USING PHOTOSHOP, ILLUSTRATOR, AFTER EFFECTS, FIGMA TO CREATE
              2D IMAGES OR VIDEOS. FOR 3D I'M USING BLENDER, HAVE EXPERIENCE
              IN ZBRUSH AND 3DSMAX.
          </p>
          <h2>CODE</h2>
          <p> 
              I'M USING HTML, CSS, JS, REACT.JS, NODE.JS, JAVA, PYTHON, GITHUB
              TO CREATE WEB AND ANDROID APPLICATIONS
          </p>
      </div>
      <div className="prof">
          <div className="codepart">
              <h2>CODE</h2>
              <p>
                  I'M USING HTML, CSS, JS, REACT.JS, NODE.JS, JAVA, PYTHON, GITHUB
                  TO CREATE WEB AND ANDROID APPLICATIONS
              </p>
          </div>
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