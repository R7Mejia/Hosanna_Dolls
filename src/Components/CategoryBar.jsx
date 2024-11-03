import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const categories = [
    { name: 'all', path: '/' },
    { name: 'femaleSaints', path: '/category/femaleSaints' },
    { name: 'maleSaints', path: '/category/maleSaints' },
    { name: 'OurLordJesus', path: '/category/OurLordJesus' },
    { name: 'OurBlessedMother', path: '/category/OurBlessedMother' },
    { name: 'apostlesAngels', path: '/category/apostlesAngels' },
    { name: 'rosaries', path: '/category/rosaries' },
    { name: 'other', path: '/category/other' },
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
                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default CategoryBar;

// /////////////This new change was to create a Hamburger Menu
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const categories = [
//     { name: 'All', path: '/' },
//     { name: 'Female Saints', path: '/category/femaleSaints' },
//     { name: 'Male Saints', path: '/category/maleSaints' },
//     { name: 'Our Lord Jesus', path: '/category/OurLordJesus' },
//     { name: 'Our Blessed Mother', path: '/category/OurBlessedMother' },
//     { name: 'Apostles-Angels', path: '/category/apostlesAngels' },
//     { name: 'Rosaries & Chaplets', path: '/category/rosaries' },
//     { name: 'Other', path: '/category/other' },
// ];

// function CategoryBar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div className="category-bar">
//             <button className="burger-menu" onClick={toggleMenu}>
//                 <FontAwesomeIcon icon={faBars} />
//             </button>
//             <nav className={`menu ${menuOpen ? 'open' : ''}`}>
//                 {categories.map(category => (
//                     <Link key={category.name} to={category.path} onClick={toggleMenu}>
//                         {category.name}
//                     </Link>
//                 ))}
//             </nav>
//         </div>
//     );
// }

// export default CategoryBar;


