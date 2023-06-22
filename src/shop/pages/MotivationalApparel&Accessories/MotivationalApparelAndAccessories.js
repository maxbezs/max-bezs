import '../style/Shop.scss';
import Header from '../../components/Header';

const MotivationalApparelAndAccessories = () => {

  return (
        <div>
            <Header/>
            <div>
                <h2>Apparel and Accessories</h2>
                <p>Motivational Apparel and Accessories</p>
                <div>
                    Product cards with an image, title, short description, size selection,
                    <button>Add to Cart</button>
                </div>
            </div>
            <div>
                <h2>Inspirational Artwork</h2>
                <p>Inspirational Artwork</p>
                <button>Buy Now</button>
            </div>
        </div>
    );
};
    
export default MotivationalApparelAndAccessories;