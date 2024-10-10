
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Load the cart from localStorage when the component mounts
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save the cart to localStorage whenever it updates
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                // If item already exists, increase the quantity
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }  // Increment quantity if it exists
                        : item
                );
            }
            // If item is new, add it to the cart with quantity 1
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};


// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (product) => {
//         setCart(prevCart => {
//             const existingItem = prevCart.find(item => item.id === product.id);
//             if (existingItem) {
//                 // If item already exists, increase the quantity
//                 return prevCart.map(item =>
//                     item.id === product.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             }
//             // If item is new, add it to the cart with quantity 1
//             return [...prevCart, { ...product, quantity: 1 }];
//         });
//     };

//     const removeFromCart = (productId) => {
//         setCart(prevCart => prevCart.filter(item => item.id !== productId));
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };




// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create a context for the cart
// const CartContext = createContext();

// // Custom hook to use the cart context
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState(() => {
//         // Load cart from localStorage if available
//         const savedCart = localStorage.getItem('cart');
//         return savedCart ? JSON.parse(savedCart) : [];
//     });

//     useEffect(() => {
//         // Save cart to localStorage whenever it changes
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     const addToCart = (product) => {
//         setCart(prevCart => [...prevCart, product]);
//     };

//     const removeFromCart = (productId) => {
//         setCart(prevCart => prevCart.filter(item => item.id !== productId));
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
