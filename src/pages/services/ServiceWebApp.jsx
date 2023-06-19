import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {serviceListWebapp, serviceListWebpageNeed} from "../../infoList";
import Include from "../../components/Include"
const ServiceWebApp = () => {
    return (
      <div>
        <Header/>
        <div className="pricing-header">
          <div>
          <h1>Unlocking  <br/>Complete Potential of <br/>Your Business through <br/> Web App</h1>
          <p>Our team offers a fast and easy web application solution to turn your small business concept into reality with just one page.</p>
          </div>
          
        </div>
        <div className="pricing-home">
          <h2>Looking for a fast and high-quality <br/>solution for your business?</h2>
          <p> Our product includes:</p>
          <div className="pricing-service">
            {serviceListWebapp.map(list => (
              <Include key={list.options} title = {list.title} description = {list.description}/>
            ))}
          </div>
        </div>
        <div className="pricing-home">
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
              <Include title = "170$ per page" description = "+ Up to 20% extra costs may apply."/>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default ServiceWebApp;