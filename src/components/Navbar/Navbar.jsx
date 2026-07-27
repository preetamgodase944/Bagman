'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import './Navbar.css';
import { scrollToTop } from '../../utils/Helper';

const menu_icon = '/assets/menu-icon.svg';
const close_icon = '/assets/close-icon.svg';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState('');
  const pathname = usePathname();

  // Add/remove scrolled class on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track the URL hash (next/navigation's usePathname excludes it)
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const toggleMobileMenu = () => setShowMobileMenu(prev => !prev);

  // Updated function to handle section navigation
  const scrollToSection = (sectionId) => {
    // First navigate to homepage if not already there
    if (pathname !== '/') {
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

  const isLinkActive = (to, linkHash) => {
    if (linkHash) {
      return pathname === '/' && hash === linkHash;
    }
    return pathname === to;
  };

  const handleScrollToTop = () => {
    if (showMobileMenu) setShowMobileMenu(false);
    scrollToTop();
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link
          href="/"
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
              href="/"
              className={`nav-button ${pathname === '/' && !hash ? 'active' : ''}`}
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
              href="/#products"
              className={`nav-button ${isLinkActive('/', '#products') ? 'active' : ''}`}
              onClick={() => scrollToSection('products')}
            >
              Products
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/training/details"
              onClick={handleScrollToTop}
              className={`nav-button ${isLinkActive('/training/details') ? 'active' : ''}`}
            >
              Training
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/trading/details"
              onClick={handleScrollToTop}
              className={`nav-button ${isLinkActive('/trading/details') ? 'active' : ''}`}
            >
              Trading
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/#contact-us"
              className={`nav-button ${isLinkActive('/', '#contact-us') ? 'active' : ''}`}
              onClick={() => scrollToSection('contact-us')}
            >
              Contact Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/#about-us"
              className={`nav-button ${isLinkActive('/', '#about-us') ? 'active' : ''}`}
              onClick={() => scrollToSection('about-us')}
            >
              About Us
            </Link>
          </li>
          <li className="navbar-item navbar-cta-item">
            <Link
              href="/#contact-us"
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
          <Image
            src={showMobileMenu ? close_icon : menu_icon}
            alt={showMobileMenu ? 'Close menu' : 'Open menu'}
            width={24}
            height={24}
            className="menu-icon"
          />
        </button>
      </div>
    </nav>
  );
}