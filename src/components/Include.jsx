const Include = (props) => {
    return (
        <div className="card-option">
            <div className="card-option-text">
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
};
    
export default Include;