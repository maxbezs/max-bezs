import { useNavigate } from "react-router-dom";

const Option = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/services/"+props.href);
    }
    return (
        <div className="card">
            <div className="card-content">
                <h3>{props.title}</h3>
                {props.options.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
                <button onClick={handleClick}>Details</button>
            </div>
        </div>
    );
};
    
export default Option;