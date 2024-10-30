import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <h3>Social Media</h3>
            <ul className="social-icons">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=61556994854401" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="fa-facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa-instagram" />
                    </a>
                </li>
              
                <li>
                    <a href="https://api.whatsapp.com/send?phone=your_phone_number" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp" />
                    </a>
                </li>
            </ul>
            <p>© {currentYear} R_Mejia | Programmer </p>
        </footer>
    );
};

export default Footer;