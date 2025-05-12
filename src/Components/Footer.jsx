import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleProgrammerClick = () => {
        window.location.href = 'https://docs.google.com/forms/d/1yQ3WW_N9TXi1ZytsGSmIhCvLOW2fF_bOpRLSs0BtUV0/viewform?pli=1&pli=1&edit_requested=true';
    };

    return (
        <footer>
            <h3>Follow Us On Social Media</h3>
            <ul className="social-icons">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=61556994854401" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="fa-facebook" />
                    </a>
                </li>
                {/* <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa-instagram" />
                    </a>
                </li>
              
                <li>
                    <a href="https://api.whatsapp.com/send?phone=your_phone_number" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp" />
                    </a>
                </li> */}
            </ul>
            <div className="copyright">
                <p>
                    © {currentYear} R_Mejia |{' '}
                    <a href="#" onClick={handleProgrammerClick}>
                        Programmer 
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
