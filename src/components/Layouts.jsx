const Layouts = () => {
    return (
      <div>
        <h2>Layouts</h2>
        <p>From parents elements to children elements, rounded shapes of components, ratios and NO borders exept when do examples</p>
        <p>We use dark background as default.</p>
        <h3>
          Shapes
        </h3>
        <p>All shapes are rounded by 8px:  </p>
        <div className="shape-example-corners">
          <div className="shape-example">
            border-radius:8px;
          </div>
        </div>
        <p>if it is section of page we do not add rounded corners so visually it looks like strick parts and clearly see</p>
        <div className="shape-example-space">
          <div className="shape-section-1">
            Header on background
          </div>
          <div className='shape-section-2-3'>
            <div className="shape-section-2">
              Navigation on first layout
            </div>
            <div className="shape-section-3">
              Panels on second layout
            </div>
          </div>
        </div>
      </div>
    );
};
    
export default Layouts;