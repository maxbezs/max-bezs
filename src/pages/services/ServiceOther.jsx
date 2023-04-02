import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Include from "../../components/Include"
const ServiceOther = () => {
    return (
      <div>
        <Header/>
        <div className="pricing-header">
          <h1>You have custom and unique request?</h1>
          <p>Our team ready to create Custom Digital Product for you.</p>
        </div>
        <div className="pricing">
          <h2>What we need?</h2>
          <p>In order to do our work faster and better:</p>
          <div className="pricing-service">
            <Include title = "min. 5 meetings" description = "Meetings with you, each lasting up to 30 minutes, to ensure the best possible service."/>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default ServiceOther;