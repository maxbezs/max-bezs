const Option = (props) => {
    
    return (
        <div className="card">
                <h3>{props.title}</h3>
                <ul>
                    {props.options.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            <button>Details</button>
        </div>
    );
};
    
export default Option;