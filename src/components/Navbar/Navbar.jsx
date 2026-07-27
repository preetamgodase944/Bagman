'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import './Navbar.css';
import { scrollToTop, scrollToElement } from '../../utils/scroll';

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

  const scrollToSection = (sectionId) => {
    // When on another route, wait for the homepage to render before scrolling.
    scrollToElement(sectionId, pathname === '/' ? 0 : 100);
    if (showMobileMenu) setShowMobileMenu(false);
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
        <Link href="/" className="navbar-logo" onClick={handleScrollToTop}>
          <Logo height='55px' />
        </Link>
        <ul className={`navbar-links ${showMobileMenu ? 'show-menu' : ''}`}>
          <li className="navbar-item">
            <Link
              href="/"
              className={`nav-button ${pathname === '/' && !hash ? 'active' : ''}`}
              onClick={handleScrollToTop}
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