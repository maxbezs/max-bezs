import Header from "../components/Header";
import Option from "../components/Option";
import {serviceList} from "../infoList";
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUs"

const Service = () => {
    return (
      <div>
        <Header/>
        <div className="pricing-header">
          <h1> Unlock <br/> Your Business's Potential  <br></br> with Custom Digital Products</h1>
          <p>Our custom digital product creation services help you unlock the full potential of your business in the digital space with customized and unique digital products. Ready to take your business to the next level? </p>
          <ContactUs/>
        </div>
        <div className="pricing-home">
          <h2>Choose Your <br/> Custom Digital Products</h2>
          <p>Choose the features and services that best fit your budget and requirements, and let us help you unlock your business's potential</p>
          <div className="pricing-options">
            {serviceList.map(list => (
              <Option key={list.options} title = {list.title} options = {list.options} href = {list.href}/>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default Service;