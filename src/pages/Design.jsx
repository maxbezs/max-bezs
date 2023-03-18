import '../style/Design.css';
import { sidebarDesignSystemData } from '../sidebarDesignSystemData';
import { useState } from 'react';
import Color from "../components/Color";
import Typography from "../components/Typography";
import Layouts from "../components/Layouts";
import Elements from "../components/Elements";

const Blog = () => {
    const [active, setActive] =useState("Color")
    return (
        <div>
            <div className="header">
                <h1> Design System </h1>
            </div>
            <div className="line">
                <div className="content-list">
                    <p className="section-name">Foundations </p>
                    <hr/>
                    <ul className="regular">
                        {sidebarDesignSystemData.map((val,key) =>{
                            return <li key={key} > <button onClick={()=>setActive(val.title)}> <span className="nav-label">{val.title}</span></button></li>
                        })}
                    </ul>
                    <p className="section-name">Components </p>
                    <hr/>
                    <ul className="regular">
                        <li>
                            <a href="/patterns/buttons" title="Buttons">
                                <span className="nav-label">Buttons</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="content-block">
                    {active === "Color" && <Color/>}
                    {active === "Typography" && <Typography/>}
                    {active === "Layouts" && <Layouts/>}
                    {active === "Elements" && <Elements/>}
                </div>
            </div>
        </div>
    );
};
    
export default Blog;