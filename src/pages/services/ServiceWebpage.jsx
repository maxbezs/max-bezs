import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {serviceListWebpage, serviceListWebpageNeed} from "../../infoList";
import Include from "../../components/Include"
const ServiceWebpage = () => {
    return (
      <div>
        <Header/>
        <div className="pricing-header">
          <h1>Unleashing <br/>Full Potential of <br/>Your Business with <br/> Webpages</h1>
          <p>Our team provides a quick and simple solution to bring your small business idea to life with a single webpage. </p>
        </div>
        <div className="pricing">
          <h2>Looking for a fast and high-quality <br/>solution for your business?</h2>
          <p> Our product includes:</p>
          <div className="pricing-service">
            {serviceListWebpage.map(list => (
              <Include key={list.options} title = {list.title} description = {list.description}/>
            ))}
          </div>
        </div>
        <div className="pricing">
          <h2>What we need?</h2>
          <p>In order to do our work faster and better:</p>
          <div className="pricing-service">
            {serviceListWebpageNeed.map(list => (
              <Include key={list.options} title = {list.title} description = {list.description}/>
            ))}
          </div>
        </div>
        <div className="pricing">
          <h2>
            Pricing
          </h2>
          <p>Down payment: </p>
          <div className="pricing">
              <Include title = "150$ per page" description = "+ Up to 20% extra costs may apply."/>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default ServiceWebpage;