import Header from "../components/Header";
import Footer from "../components/Footer";
const Contactus = () => {
    return (
      <div>
        <Header/>
        <div className="contact-us">
            <h1>The last step to expand your business</h1>
            <p> Shedule meeting or use form. We are ready to chat!</p>
            <div>

            </div>
            <div>
                <label>Full Name</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Service</label>
                <input></input>
                <label>How can we help?</label>
                <input></input>
            </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default Contactus;