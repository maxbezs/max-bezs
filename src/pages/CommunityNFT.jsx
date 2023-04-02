import Header from "../components/Header"
import Footer from "../components/Footer"
import {SlArrowDown} from "react-icons/sl"
const CommunityNFT = () => {
    return (
      <div>
        <Header/>
        <div className="patreon">
          <div className="patreondiv">
            <h1 className="becomeowner">BECOME <br/>OWNER</h1>
          </div>
          
          <div className="patreondiv2">
            <p>Express yourself through art</p>
          </div>
        </div>
        <div className="nft-main">
            <h2 className="becomeowner">NFT</h2>
            <div className="imgmmm">
              <div className="image">
                <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/nftduck.jpg" className="nftimg"/>
                <div className="buynow">
                    <p>Buy now</p>
                </div>
              </div>
              <div id="remove" className="image">
                <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/nftduck.jpg" className="nftimg"/>
                <div className="buynow">
                    <label >Buy now</label>
                </div>
              </div>
              <div id="remove" className="image">
                <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/nftduck.jpg" className="nftimg"/>
                <div className="buynow">
                    <label >Buy now</label>
                </div>
              </div>
              <div id="remove" className="image">
                <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/nftduck.jpg" className="nftimg"/>
                <div className="buynow">
                    <label >Buy now</label>
                </div>
              </div>
            </div>
            <div className="imgmmm">
                <div className="image">
                  <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/nftduck.jpg" className="nftimg"/>
                  <div className="buynow">
                    <label >Buy now</label>
                  </div>
                </div>
                <div id="remove" className="image">
                  <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/nftduck.jpg" className="nftimg"/>
                  <div className="buynow">
                    <label >Buy now</label>
                  </div>
                </div>
                <div id="remove" className="image">
                  <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/nftduck.jpg" className="nftimg"/>
                  <div className="buynow">
                    <label >Buy now</label>
                  </div>
                </div>
                <div id="remove" className="image">
                  <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/nftduck.jpg" className="nftimg"/>
                  <div className="buynow">
                    <label >Buy now</label>
                  </div>
                </div>
            </div>
            <div className="see">
              <h2>See more</h2>
              <a href="#iphone"><SlArrowDown/></a>
            </div>
          </div>
          <div className="iphone" name="iphone"><a href=""name="iphone"></a>
              <div className="iph">
                  <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/iphone-frame-night.png" className="iphoneimg"/>
              </div>
              <div className="iph">
                  <label className="iph1">OWN POST</label>
                  <label className="iph2">You can add/edit post's: name, description, location. Your account will be mentioned as owner of this post</label>
              </div>
          </div>

        <div className="bonus">
            <div className="bonuspart">
              <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/NFT.png" className="bonusimg"/>
              <label>
                  Your Instagram profile   with boughted picture   will be shared in story   and this story will be   saved in a special   Highlight
              </label>
            </div>
            <div className="vertical-line" id="remove"></div>
            <div className="bonuspart">
                <img src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/bonusicon.png" className="bonusimg"/>
              <label> 
                    Owners become   Close Friends in   Instagram and can   see post the day   before publication  
                </label> 
            </div>
          </div>
          <Footer/>
      </div>
    );
};
    
export default CommunityNFT;