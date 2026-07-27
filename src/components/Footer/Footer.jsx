'use client';

import './Footer.css';
import Image from 'next/image';
import Logo from '../Logo';
import Link from 'next/link';
import { scrollToTop } from '../../utils/Helper';

const whatsappLogo = '/assets/whatsapp.svg';

const Footer = () => {
    return (
        <footer className='footer' id='about-us'>
            <div className='footer-top'>
                <Link href='/' onClick={() => scrollToTop()}>
                    <Logo imagePath="/assets/logo.png" height="80px" width="200px" />
                </Link>
                <p className='footer-tagline'>
                    Empowering industries with cutting-edge automation solutions.
                </p>
            </div>

            <div className='footer-contents'>

                <div className='footer-content'>
                    <h2><Link href='/trading/details' onClick={() => scrollToTop()}>Trading</Link></h2>
                    <ul className="footer-list">
                        <li><Link href='/trading/details' onClick={() => scrollToTop()}>WECON V-BOX (Iot Gateway)</Link></li>
                        <li><Link href='/trading/details' onClick={() => scrollToTop()}>WECON SERVO DRIVES</Link></li>
                        <li><Link href='/trading/details' onClick={() => scrollToTop()}>WECON PLC</Link></li>
                        <li><Link href='/trading/details' onClick={() => scrollToTop()}>WECON HMI</Link></li>
                        <li><Link href='/trading/details' onClick={() => scrollToTop()}>WECON INVERTER</Link></li>
                        <li><Link href='/trading/details' onClick={() => scrollToTop()}>INDUSTRIAL ETHERNET SWITCH</Link></li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2><Link href='/training/details' onClick={() => scrollToTop()}>Training</Link></h2>
                    <ul className="footer-list">
                        <li><Link href='/training/details' onClick={() => scrollToTop()}>PLC Training</Link></li>
                        <li><Link href='/training/details' onClick={() => scrollToTop()}>SCADA Training</Link></li>
                        <li><Link href='/training/details' onClick={() => scrollToTop()}>HMI Training</Link></li>
                        <li><Link href='/training/details' onClick={() => scrollToTop()}>Industrial IoT Training</Link></li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Contact</h2>
                    <ul className="footer-list">
                        <li>Email: reach.gsia@gmail.com</li>
                        <li>Phone: +91-7349443674</li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Address</h2>
                    <ul className="footer-list">
                        <li>Global Source Industrial Automation</li>
                        <li>No. 32, Ground Floor</li>
                        <li>Opp. MPM park,</li>
                        <li>MPM Layout, Mallathhalli</li>
                        <li>Bengaluru, India</li>
                        <li>560056</li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Company</h2>
                    <ul className="footer-list">
                        <li><a href="/#contact-us">About Us</a></li>
                    </ul>
                </div>
            </div>

            <div className='social-icons'>
                <a href="https://wa.me/+917349443674" target="_blank" rel="noopener noreferrer">
                    <Image src={whatsappLogo} alt="WhatsApp" width={22} height={22} />
                </a>
                {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" />
                </a> */}
            </div>

            <hr />

            <p className='footer-copyright'>&copy; {new Date().getFullYear()} GSIA. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
