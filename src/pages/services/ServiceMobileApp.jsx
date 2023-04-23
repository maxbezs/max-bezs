import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {serviceListApp, serviceListAppNeed} from "../../infoList";
import Include from "../../components/Include"
const ServiceMobileApp = () => {
    return (
      <div>
        <Header/>
        <div className="pricing-header">
          <h1>Maximizing Your <br/> Business's Potential <br/> with Mobile App</h1>
          <p>Our team provides a quick and convenient mobile app that can bring your small business idea to life in just a seconds.</p>
        </div>
        <div className="pricing-home">
          <h2>Looking for a fast and high-quality <br/>solution for your business?</h2>
          <p> Our service includes:</p>
          <div className="pricing-service">
            {serviceListApp.map(list => (
              <Include key={list.options} title = {list.title} description = {list.description}/>
            ))}
          </div>
        </div>
        <div className="pricing-home">
          <h2>What we need?</h2>
          <p>In order to do our work faster and better:</p>
          <div className="pricing-service">
            {serviceListAppNeed.map(list => (
              <Include key={list.options} title = {list.title} description = {list.description}/>
            ))}
          </div>
        </div>
        <div className="pricing-home">
          <h2>
            Pricing
          </h2>
          <p>Down payment: </p>
          <div className="pricing">
            <Include title = "300$ " description = "maximum 3 pages + Up to 20% extra costs may apply."/>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default ServiceMobileApp;