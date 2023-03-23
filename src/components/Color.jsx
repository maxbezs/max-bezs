const Color = () => {
    return (
      <div>
        <h2>Main Color Palette</h2>
        <h3>
          Background
        </h3>
        <div className='color-palette-background'>
          #000000
        </div>
        <h3>
          First layout level
        </h3>
        <div className='color-palette-first'>
          #212121
        </div>
        <h3>
          Second layout level
        </h3>
        <div className='color-palette-second'>
          #343434
        </div>
        <h3>
          Text, Icons, lines
        </h3>
        <div className='color-palette-content'>
          #ffffff
        </div>
      </div>
    );
};
    
export default Color;