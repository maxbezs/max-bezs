import { useState, useEffect } from 'react'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    const handleUrlChange = () => {
      const urlPage = window.location.pathname.replace(/\/$/, '');
      setActivePath(urlPage);
      console.log(activePath)
    };

    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const body = document.body;
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
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
                    <img alt="max_bezs logo" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icon192transparent.png"/>
                </div>
                <div className="menu-icon-nav" onClick={handleShowNavbar}>
                    <img alt="menu icon" src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/menu.svg" className="header-menu-icon"/>
                </div>
                <nav aria-label='primary menu' className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <a id="" className={activePath === '' ? 'active' : ''} aria-label='home page' href="/">HOME</a>
                        </li>
                        <li>
                            <a id="/blog" className={activePath === '/blog' ? 'active' : ''} aria-label='blog page' href="/blog">BLOG</a>
                        </li>
                        <li>
                            <a id="/services" className={activePath === '/services' ? 'active' : ''} aria-label='service page' href="/services">SERVICES</a>
                        </li>
                        {/**<li>
                            <a id="/community" className={activePath === '/community' ? 'active' : ''} aria-label='community page' href="/community">COMMUNITY</a>
                        </li>**/}
                    </ul>
                </nav>
                <button>Contact Us</button>

            </div>
        </div>
    </header>
  )
}

export default Header