import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer>
            <p>© {currentYear} R_Mejia | Programmer </p>
        </footer>
    );
};

export default Footer;
