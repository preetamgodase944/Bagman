import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import './Navbar.css';
import menu_icon from '../../assets/menu-icon.svg';
import close_icon from '../../assets/close-icon.svg';
import { scrollToTop } from '../../utils/Helper';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add/remove scrolled class on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setShowMobileMenu(prev => !prev);

  // Updated function to handle section navigation
  const scrollToSection = (sectionId) => {
    // First navigate to homepage if not already there
    if (location.pathname !== '/') {
      // We need to set a timeout to allow the page to change before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu if open
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  };

  const isLinkActive = (to, hash) => {
    if (hash) {
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === to;
  };

  const handleScrollToTop = () => {
    if (showMobileMenu) setShowMobileMenu(false);
    scrollToTop();
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            if (showMobileMenu) setShowMobileMenu(false);
          }}
        >
          <Logo height='55px' />
        </Link>
        <ul className={`navbar-links ${showMobileMenu ? 'show-menu' : ''}`}>
          <li className="navbar-item">
            <Link
              to="/"
              className={`nav-button ${location.pathname === '/' && !location.hash ? 'active' : ''}`}
              onClick={() => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                if (showMobileMenu) setShowMobileMenu(false);
              }}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/#products"
              className={`nav-button ${isLinkActive('/', '#products') ? 'active' : ''}`}
              onClick={() => scrollToSection('products')}
            >
              Products
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/training/details"
              onClick={handleScrollToTop}
              className={`nav-button ${isLinkActive('/training/details') ? 'active' : ''}`}
            >
              Training
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/trading/details"
              onClick={handleScrollToTop}
              className={`nav-button ${isLinkActive('/trading/details') ? 'active' : ''}`}
            >
              Trading
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/#contact-us"
              className={`nav-button ${isLinkActive('/', '#contact-us') ? 'active' : ''}`}
              onClick={() => scrollToSection('contact-us')}
            >
              Contact Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/#about-us"
              className={`nav-button ${isLinkActive('/', '#about-us') ? 'active' : ''}`}
              onClick={() => scrollToSection('about-us')}
            >
              About Us
            </Link>
          </li>
          <li className="navbar-item navbar-cta-item">
            <Link
              to="/#contact-us"
              className="nav-cta"
              onClick={() => scrollToSection('contact-us')}
            >
              Get a quote
            </Link>
          </li>
        </ul>
        <button
          className="navbar-toggle"
          onClick={toggleMobileMenu}
          aria-label={showMobileMenu ? 'Close menu' : 'Open menu'}
        >
          <img
            src={showMobileMenu ? close_icon : menu_icon}
            alt={showMobileMenu ? 'Close menu' : 'Open menu'}
            className="menu-icon"
          />
        </button>
      </div>
    </nav>
  );
}