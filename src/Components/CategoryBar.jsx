/////////////This new change was to create a Hamburger Menu
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const categories = [
    { name: 'All', path: '/' },
    { name: 'Female Saints', path: '/category/femaleSaints' },
    { name: 'Male Saints', path: '/category/maleSaints' },
    { name: 'Our Lord Jesus', path: '/category/ourLordJesus' },
    { name: 'Our Blessed Mother', path: '/category/ourBlessedMother' },
    { name: 'Apostles-Angels', path: '/category/apostlesAngels' },
    { name: 'Rosaries & Chaplets', path: '/category/rosaries' },
    { name: 'Other', path: '/category/other' },
];

function CategoryBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="category-bar">
            <button className="burger-menu" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                {categories.map(category => (
                    <Link key={category.name} to={category.path} onClick={toggleMenu}>
                        {category.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default CategoryBar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const categories = [
//     { name: 'All', path: '/' },
//     { name: 'Female Saints', path: '/category/femaleSaints' }, // Changed to camelCase
//     { name: 'Male Saints', path: '/category/maleSaints' }, // Changed to camelCase
//     { name: 'Our Lord Jesus', path: '/category/ourLordJesus' },
//     { name: 'Our Blessed Mother', path: '/category/ourBlessedMother' },
//     { name: 'Apostles-Angels', path: '/category/apostlesAngels' },
//     { name: 'Rosaries & Chaplets', path: '/category/rosaries' },
//     { name: 'Other', path: '/category/other' }, // Updated the path
// ];


// const CategoryBar = () => (
//     <nav className="category-bar">
//         {categories.map(category => (
//             <Link key={category.name} to={category.path}>
//                 {category.name}
//             </Link>
//         ))}
//     </nav>
// );

// export default CategoryBar;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const categories = [
//     { name: 'All', path: '/' },
//     { name: 'Female Saints', path: '/category/female-saints' },
//     { name: 'Male Saints', path: '/category/male-saints' },
//     { name: 'Rosaries & Chaplets', path: '/category/rosaries' },
//     { name: 'Other', path: '/other' },
// ];

// const CategoryBar = () => (
//     <nav className="category-bar">
//         {categories.map(category => (
//             <Link key={category.name} to={category.path}>
//                 {category.name}
//             </Link>
//         ))}
//     </nav>
// );

// export default CategoryBar;
