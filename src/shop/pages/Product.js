import Header from '../../components/Header';

const Product = () => {

  return (
        <div>
            <div class="left-column">
                <img data-image="black" src="images/black.png" alt=""/>
            </div>


            <div class="right-column">

                <div class="product-description">
                <span>Headphones</span>
                <h1>Beats EP</h1>
                <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                </div>

                <div class="product-price">
                <span>148$</span>
                <a href="#" class="cart-btn">Add to cart</a>
                </div>
            </div>
        </div>
    );
};
    
export default Product;