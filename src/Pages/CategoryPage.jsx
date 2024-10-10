import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../data/productsData'; // Import the products data
import { useCart } from '../CartContext'; // Import the Cart Context


const CategoryPage = () => {
    const { categoryName } = useParams(); // Get the category name from the URL parameter
    const { addToCart } = useCart(); // Use the Cart context to add products
    const categoryProducts = productsData[categoryName] || []; // Fetch products for the category

    return (
        <div>
            <h2>{categoryName.replace(/([A-Z])/g, ' $1')}</h2>
            <div className="product-list">
                {categoryProducts.length > 0 ? (
                    categoryProducts.map(product => (
                        <div key={product.id} className="product-card"> {/* Use the same class as in the Home page */}
                            <img src={product.imageUrl} alt={product.name} className="product-image" /> {/* Add product-image class */}
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to Cart button */}
                        </div>
                    ))
                ) : (
                    <p>No products found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;




////////ONE OF TWO///////////

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { productsData } from '../data/productsData'; // Import the products data

// const CategoryPage = () => {
//     const { categoryName } = useParams(); // Get the category name from the URL parameter

//     const categoryProducts = productsData[categoryName] || []; // Fetch products for the category

//     return (
//         <div>
//             <h2>{categoryName.replace(/([A-Z])/g, ' $1')}</h2>
//             <div className="product-list">
//                 {categoryProducts.length > 0 ? (
//                     categoryProducts.map(product => (
//                         <div key={product.id} className="product-item">
//                             <h3>{product.name}</h3>
//                             <img src={product.imageUrl} alt={product.name} />
//                             <p>${product.price}</p>
//                             <button>Add to Cart</button> {/* Add to Cart button */}
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products found for this category.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CategoryPage;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { productsData } from '../data/productsData'; // Import product data

// const CategoryPage = () => {
//     const { categoryName } = useParams();

//     // Get the products for the current category
//     const products = productsData[categoryName] || [];

//     return (
//         <div>
//             <h2>{categoryName.replace(/([A-Z])/g, ' $1').trim()} Category</h2>
//             <div className="product-grid">
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <div key={product.id} className="product-item">
//                             <img src={product.imageUrl} alt={product.name} className="product-image" />
//                             <h3>{product.name}</h3>
//                             <p>${product.price.toFixed(2)}</p>
//                             <button className="buy-button">
//                                 Buy Now
//                             </button>
//                             <button className="add-to-cart-button">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products found in this category.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CategoryPage;
