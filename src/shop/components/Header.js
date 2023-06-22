import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Header = () => {

    const location = useLocation();
  
    const [activePath, setActivePath] = useState('');
  
    useEffect(() => {
  
      const handleUrlChange = () => {
          setActivePath(location.pathname);
      };
  
      handleUrlChange();
    }, [location.pathname]);
  
    const body = document.body;
    let lastScroll = 0;
    
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll < 0) {
            body.classList.remove("scroll-up");
            return;
        }
    
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains("scroll-down")
        ) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    });
  return (
    <header>
        <div className="navbar-nav">
            <div className="container-nav">
                <div className="logo-nav">
                    <a href="/" style={{height:"100%"}}>
                        <img alt="max_bezs logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icon192transparent.png"/>
                    </a>
                </div>
                <nav aria-label='primary menu' className="nav-elements">
                    <ul>
                        <li>
                            <a id="/shop" className={activePath === '/shop' ? 'active' : ''} aria-label='shop page' href="/shop">Home</a>
                        </li>
                        <li>
                            <a id="/shop/learning-and-development" className={activePath === '/shop/learning-and-development' ? 'active' : ''} aria-label='Learning and Development page' href="/shop/learning-and-development">
                                Learning and Development
                            </a>
                        </li>
                        <li>
                            <a id="/shop/mindfulness-and-meditation" className={activePath === '/shop/mindfulness-and-meditation' ? 'active' : ''} aria-label='Mindfulness and Meditation page' href="/shop/mindfulness-and-meditation">
                                Mindfulness and Meditation
                            </a>
                        </li>
                        <li>
                            <a id="/shop/motivational-apparel-and-accessories" className={activePath === '/shop/motivational-apparel-and-accessories' ? 'active' : ''} aria-label='Motivational Apparel and Accessories page' href="/shop/motivational-apparel-and-accessories">
                                Motivational Apparel and Accessories
                            </a>
                        </li>
                        <li>
                            <a id="/shop/personal-growth-and-productivity" className={activePath === '/shop/personal-growth-and-productivity' ? 'active' : ''} aria-label='Personal Growth and Productivity page' href="/shop/personal-growth-and-productivity">
                                Personal Growth and Productivity
                            </a>
                        </li>
                        <li>
                            <a id="/shop/wellness-and-health" className={activePath === '/shop/wellness-and-health' ? 'active' : ''} aria-label='Wellness and Health page' href="/shop/wellness-and-health">
                                Wellness and Health
                            </a>
                        </li>
                    </ul>
                </nav>
                <button>Cart</button>

            </div>
        </div>
    </header>
    );
};
    
export default Header;