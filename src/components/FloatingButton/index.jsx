'use client';

import { useState, useEffect } from 'react';
import './style.css';
import { downloadBrochure } from '../Helper/CommonFuctions';

const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling down a bit
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`floating-download-btn ${isVisible ? 'visible' : ''}`}
            onClick={downloadBrochure}
            aria-label="Download Brochure"
        >
            <span className="download-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </span>
            <span className="download-text">Download Brochure</span>
        </button>
    );
};

export default FloatingButton;