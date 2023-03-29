const Knowledge = (props) => {
    return (
      <div className="profskill">
        <div className="texthrname">
            <h3>
                {props.name}
            </h3>
        </div>
        <div className = "rowwe">
            <hr className="design-hr" style={{width: props.size}}/>
            <div style={{width: "18%"}}>
                    {props.size}
            </div>
        </div>            
      </div>
    );
};
    
export default Knowledge;