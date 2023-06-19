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
          <div>
            <h1> Unlock <br/> Your Business's Potential with Custom Digital Products</h1>
          <p>

          Unlock your business's potential with custom products. Max Your profit with our unique and tailored digital solutions.
          </p>
          <ContactUs/>
          </div>
          <img className="ph" style={{width:"20%"}} src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/Lock%20.png"/>
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