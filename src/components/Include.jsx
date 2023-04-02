const Include = (props) => {
    return (
        <div className="card-option">
            <h3>{props.title}</h3>
            <p>
                {props.description}
            </p>
        </div>
    );
};
    
export default Include;