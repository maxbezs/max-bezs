import Header from "../components/Header";
import Footer from "../components/Footer"
import { sourceListWebsites, sourceListSoftware } from "../infoList";
import BlogElement from "../components/BlogElement";
const Blogs = () => {

    return (
      <div>
        <Header/>
        <div className="blog">
          <div className="acces">
            <h1>
                What are the resources and sites 
                that help me create my artworks?
            </h1>
            <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/listmax.webp" alt="" className="accesimg"/>
          </div>
          <div className="info">
            <h2>Websites</h2>
            <hr/>
            {sourceListWebsites.map(list => (
                <BlogElement key={list.title} title = {list.title} text = {list.text} link = {list.link} image = {list.image}/>
            ))}
          </div>
          <div className="info">
            <h2>Software</h2>
            <hr/>
            {sourceListSoftware.map(list=>(
                <BlogElement key={list.title} title = {list.title} text = {list.text} link = {list.link} image = {list.image}/>
            ))}
          </div>
          <div className="more">
              <p>
                  More useful information?
                  <br/>
                  Become Patron or own NFT!
              </p>
              <div className="more-links">
                  <img style={{padding: "20px"}} src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/Digital-Patreon-Logo_FieryCoral.png"/>
                  <div className="vertical-line"></div>
                  <img style={{padding: "20px"}} src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/opensea-logo-freelogovectors.net_-400x400.png"/>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default Blogs;