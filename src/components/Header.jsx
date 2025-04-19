import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <header>
            <div className="container nav-container">
                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a 
                            href="https://www.linkedin.com/in/tianrui-zhu-a443bb262/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="nav-link"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="https://github.com/CodeCary80" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="nav-link"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#contact" 
                            onClick={(e) => handleLinkClick(e, '#contact')} 
                            className="nav-link"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;