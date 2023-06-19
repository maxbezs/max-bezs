import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {serviceListApp, serviceListAppNeed} from "../../infoList";
import Include from "../../components/Include"
const ServiceApi = () => {
    return (
      <div>
        <Header/>
        <div className="pricing-header">
          <div>
            <h1>Maximizing Your <br/> Business's Potential <br/> with API</h1>
          <p>Our team provides a scalable fast API that can bring your small business to another level.</p>
          </div>
          
        </div>
        <div className="pricing-home">
          <h2>Looking for a fast and high-quality <br/>solution for your business?</h2>
          <p> Our API includes:</p>
          <div className="pricing-service">

          </div>
        </div>
        <div className="pricing-home">
          <h2>What we need?</h2>
          <p>In order to do our work faster and better:</p>
          <div className="pricing-service">
          </div>
        </div>
        <div className="pricing-home">
          <h2>
            Pricing
          </h2>
          <p>Down payment: </p>
          <div className="pricing-home">
            <Include title = "1000$ " description = "maximum 5000 users/25,000 actions per day + Up to 20% extra costs may apply."/>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default ServiceApi;