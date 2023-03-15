import '../style/Knowledge.css';
import '../style/App.css';

const Knowledge = (props) => {
    return (
      <div className="profskill" style="gap: 10px; align-items: center;">
        <div className="texthrname">
            <h3>
                {props.name}
            </h3>
        </div>
        <div className = "rowwe">
            <hr style={{width: props.size, height: "3%"}}/>
            <div style="width: 18%;">
                <p>
                    {props.size}
                </p>
            </div>
        </div>            
      </div>
    );
};
    
export default Knowledge;