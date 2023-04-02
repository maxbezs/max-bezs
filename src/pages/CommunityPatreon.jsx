import Header from "../components/Header"
import Footer from "../components/Footer"

const CommunityPatreon = () => {
    return (
      <div>
        <Header/>
        <div className="patreon">
          <div className="patreondiv">
              <h1 className="becomeowner">BECOME <br/>PATRON</h1>
          </div>
          <div className="patreondiv2">
              <p >Be part of the creative community</p>
          </div>
        </div>
        <div className="acces">
            <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/acces.png" alt="" className="accesimg"/>
            <div className="accesdiv">
                <p className="accesh">Access to projects' files and resources that was used</p>

            </div>
        </div>
        <div className="insights">
            <p className="accesh">Insights about future posts, revolutional ideas and self-developing</p>
        </div>
        <div  className="becomeowner1">
            <h2>+BONUS+</h2>
        </div>

        <div className="bonus">

            <div className="bonuspart">
                <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/NFT.png" className="bonusimg"/>
                <p>
                    Patrons become Close Friends in Instagram and can see post the day before publication 
                </p>
            </div>
            <div className="vertical-line" id="remove"></div>
            <div className="bonuspart">
                <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/bonusicon.png" className="bonusimg"/>
              <p> 
                Patron will be mentioned in the description's list of each post as soon as  become patron
              </p> 
            </div>
        </div>
        <Footer/>
      </div>
    );
};
    
export default CommunityPatreon;