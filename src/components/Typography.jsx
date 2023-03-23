const Typography = () => {
    return (
      <div>
        <h2>Type Scale</h2>
        <div>
          <hr/>
          <div className="typography-column">
            <div className="typography-heading">
              <h1> Heading One</h1>
            </div>
            <div className="typography-heading-size">
              <p> clamp(28px,3.87vw,56px)</p>
            </div>
            <div className="typography-heading-size">
              <p> e-Ukraine Regular </p>
            </div>
          </div>
          <hr/>
          <div className="typography-column">
            <div className="typography-heading">
              <h2> Heading Two</h2>
            </div>
            <div className="typography-heading-size">
              <p> clamp(24px,2.62vw,38px) </p>
            </div>
            <div className="typography-heading-size">
              <p> e-Ukraine Regular </p>
            </div>
          </div>
          <hr/>
          <div className="typography-column">
            <div className="typography-heading">
              <h3> Heading Tree</h3>
            </div>
            <div className="typography-heading-size">
              <p> clamp(20px,1.95vw,28px) </p>
            </div>
            <div className="typography-heading-size">
              <p> e-Ukraine Regular </p>
            </div>
          </div>
          <hr/>
          <div className="typography-column">
            <div className="typography-heading">
              <h4> Heading Four</h4>
            </div>
            <div className="typography-heading-size">
              <p> clamp(18px,1.68vw,24px) </p>
            </div>
            <div className="typography-heading-size">
              <p> e-Ukraine Regular </p>
            </div>
          </div>
          <hr/>
          <div className="typography-column">
            <div className="typography-heading">
              <h5> Heading Five</h5>
            </div>
            <div className="typography-heading-size">
              <p> clamp(16px,1.37vw,20px) </p>
            </div>
            <div className="typography-heading-size">
              <p> e-Ukraine Regular </p>
            </div>
          </div>
          <hr/>
          <div className="typography-column">
            <div className="typography-heading">
              <p> Paragraph</p>
            </div>
            <div className="typography-heading-size">
              <p> clamp(13px,1.12vw,16px) </p>
            </div>
            <div className="typography-heading-size">
              <p> e-Ukraine Regular </p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    );
};
    
export default Typography;