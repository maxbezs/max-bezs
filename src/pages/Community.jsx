import Header from "../components/Header";

const Community = () => {
    return (
      <div>
        <Header/>
        <div className="community">
          <div className="community-choice">
            <a href="/#/community/patreon">PATREON</a>
          </div>
          <div className="community-choice">
            <a href="/#/community/nft">NFT</a>
          </div>
        </div>
      </div>
    );
};
    
export default Community;