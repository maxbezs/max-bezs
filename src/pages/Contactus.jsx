import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScheduleMeeting } from 'react-schedule-meeting';
import { useState } from "react";
const Contactus = () => {
    const availableTimeslots = [0, 1, 2, 3, 4, 5, 6].map((id) => {
        return {
          id,
          startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(18, 0, 0, 0)),
          endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(23, 20, 0, 0)),
        };
      });
    return (
      <div>
        <Header/>
        <div className="contact-us">
            <div className="contact-us-heading">
                <h1>The last step to expand your business</h1>
                <p> Shedule meeting. We are ready to chat!</p>
            </div>
            <div className="contact-us-forms">
                <div className="contact-us-calendly">
                    <ScheduleMeeting
                        borderRadius={8}
                        backgroundColor="#151515"
                        primaryColor="#343434"
                        eventDurationInMinutes={10}
                        availableTimeslots={availableTimeslots}
                        onStartTimeSelect={console.log}
                        eventStartTimeSpreadInMinutes={10}
                        />
                </div>
                <div className="contact-us-form">
                    <div className="form-group">
                        <span>Full Name : </span>
                        <input className="form-field" type="text" placeholder="John Smith"/>
                    </div>
                    <div className="form-group">
                        <span>Email : </span>
                        <input className="form-field" type="text" placeholder="john.smith@email.abc"/>
                    </div>
                    <div className="form-group">
                        <span>Details : </span>
                        <input className="form-field" type="text" placeholder="Personal requests, questions"/>
                    </div>
                    <div className="checkbox-group">
                        <div className="checkbox">
                            <label htmlFor="webpage">
                                <input type="checkbox" name="webpage" id="webpage"/>
                                Webpage
                            </label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="web-app">
                                <input name="web-app" id="web-app" type="checkbox" />
                                Web-app
                            </label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="mobile-app">
                                <input name="mobile-app" id="mobile-app" type="checkbox" />
                                Mobile App
                            </label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="webpage-builder">
                                <input name="webpage-builder" id="webpage-builder" type="checkbox" />
                                No-code
                            </label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="api">
                                <input name="api" id="api" type="checkbox" />
                                API
                            </label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="e-commerce">
                                <input name="e-commerce" id="e-commerce" type="checkbox" />
                                E-commerce
                            </label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="other">
                                <input name="other" id="other" type="checkbox" />
                                Other
                            </label>
                        </div>
                    </div>
                    <button>Shedule Meeting</button>                    
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default Contactus;