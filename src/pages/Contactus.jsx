import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScheduleMeeting } from 'react-schedule-meeting';
import { useState } from "react";
import axios from "axios";

const Contactus = () => {
    const availableTimeslots = [0, 1, 2, 3, 4, 5, 6].map((id) => {
        return {
          id,
          startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(18, 0, 0, 0)),
          endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(23, 20, 0, 0)),
        };
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [time, setTime] = useState("");
    const [details, setDetails] = useState("");
    const [webpage, setWebpage] = useState(false);
    const [webapp, setWebapp] = useState(false);
    const [mobileapp, setMobileapp] = useState(false);
    const [nocode, setNocode] = useState(false);
    const [api, setApi] = useState(false);
    const [ecom, setEcom] = useState(false);
    const [other, setOther] = useState(false);
    
    const checkHandlerwebpage = () => {
        setWebpage(!webpage)
    }
    const checkHandlewebapp = () => {
        setWebapp(!webapp)
    }
    const checkHandlermobileapp = () => {
        setMobileapp(!mobileapp)
    }
    const checkHandlernocode = () => {
        setNocode(!nocode)
    }
    const checkHandlerapi = () => {
        setApi(!api)
    }
    const checkHandlerecom = () => {
        setEcom(!ecom)
    }
    const checkHandlerother = () => {
        setOther(!other)
    }
    const sendEmail = async (e) => {
        e.preventDefault();

        const data = {
        email,
        name,
        time,
        webpage,
        webapp,
        mobileapp,
        nocode,
        api,
        ecom,
        other,
        details
        };
        console.log(data);
        const response = await axios.post(
        "http://localhost:5000/api/sendemail",
        data
        );
        console.log(response.data);
    };
    return (
      <div>
        <Header/>
        <div className="contact-us">
            <div className="contact-us-heading">
                <h1>The last step to expand your business</h1>
                <p> Shedule meeting. We are ready to chat!</p>
            </div>
            <form className="contact-us-forms" onSubmit={sendEmail}>
                <div className="contact-us-calendly">
                    <ScheduleMeeting
                        borderRadius={8}
                        backgroundColor="#151515"
                        primaryColor="#343434"
                        eventDurationInMinutes={10}
                        availableTimeslots={availableTimeslots}
                        onStartTimeSelect={(e) => {setTime(e.startTime)}}
                        eventStartTimeSpreadInMinutes={10}
                        />
                </div>
                <div className="contact-us-form">
                    <div className="contact-us-form-group">
                        <div className="form-group">
                            <span>Name : </span>
                            <input className="form-field" type="text" placeholder="John Smith" required value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <span>Email : </span>
                            <input className="form-field" type="email"  placeholder="john.smith@email.abc" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <span>Details : </span>
                            <input className="form-field" type="text" placeholder="Personal requests, questions" value={details} onChange={(e) => setDetails(e.target.value)}/>
                        </div>
                        <div className="checkbox-group">
                            <div className="checkbox">
                                <label htmlFor="webpage">
                                    <input type="checkbox" name="webpage" id="webpage" checked={webpage} onChange={checkHandlerwebpage}/>
                                    Webpage
                                </label>
                            </div>
                            <div className="checkbox">
                                <label htmlFor="web-app">
                                    <input name="web-app" id="web-app" type="checkbox" checked={webapp} onChange={checkHandlewebapp}/>
                                    Web-app
                                </label>
                            </div>
                            <div className="checkbox">
                                <label htmlFor="mobile-app">
                                    <input name="mobile-app" id="mobile-app" type="checkbox" checked={mobileapp} onChange={checkHandlermobileapp}/>
                                    Mobile App
                                </label>
                            </div>
                            <div className="checkbox">
                                <label htmlFor="webpage-builder">
                                    <input name="webpage-builder" id="webpage-builder" type="checkbox" checked={nocode} onChange={checkHandlernocode}/>
                                    No-code
                                </label>
                            </div>
                            <div className="checkbox">
                                <label htmlFor="api">
                                    <input name="api" id="api" type="checkbox" checked={api} onChange={checkHandlerapi}/>
                                    API
                                </label>
                            </div>
                            <div className="checkbox">
                                <label htmlFor="e-commerce">
                                    <input name="e-commerce" id="e-commerce" type="checkbox" checked={ecom} onChange={checkHandlerecom}/>
                                    E-commerce
                                </label>
                            </div>
                            <div className="checkbox">
                                <label htmlFor="other">
                                    <input name="other" id="other" type="checkbox" checked={other} onChange={checkHandlerother}/>
                                    Other
                                </label>
                            </div>
                        </div>
                        <button type="submit">Shedule Meeting</button> 
                    </div>
                                       
                </div>
            </form>
        </div>
        <Footer/>
      </div>
    );
};
    
export default Contactus;