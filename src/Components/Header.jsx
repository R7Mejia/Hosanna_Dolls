import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import the useCart hook

const Header = () => {
    const { cart } = useCart(); // Get the cart state from the CartContext
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Count total items in the cart

    return (
        <header>
            <div className="logo">
                <img src="../imagenes/logo.jpg" alt="Logo" />
            </div>
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="/buy">Buy</Link> */}
                <Link to="/cart">
                    Cart 
                    {cartItemCount > 0 && (
                        <span className="cart-count">{cartItemCount}</span>
                    )}
                </Link>
            </nav>
        </header>
    );
};

export default Header;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => (
//     <header>
//         <div className='logo'>
//             <img src="../imagenes/logo.jpg" alt="#" />
//         </div>
//         <nav>
//             <Link to="/">Home</Link>
//             {/* <Link to="/buy">Buy</Link> */}
//             <Link to="/cart">Cart 🛒 </Link>
//         </nav>
//     </header>
// );


// export default Header;
