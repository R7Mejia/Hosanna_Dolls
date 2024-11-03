/////////Carousel
import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { useCart } from '../CartContext';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, Arrows } from 'react-responsive-carousel';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { addToCart } = useCart();
    const categoryProducts = productsData[categoryName] || [];

    const renderArrow = (onClickPrev, onClickNext) => (
        <div className="carousel-arrows">
            <button type="button" onClick={onClickPrev}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button type="button" onClick={onClickNext}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
    
    return (
        <div>
            <h2>{categoryName.replace(/([A-Z])/g, ' $1')}</h2>
            <Carousel
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showStatus={false}
                showIndicators={false}
                interval={3000}
                dynamicHeight={false}
                renderArrows={renderArrow}
            >
                {categoryProducts.length > 0 ? (
                    categoryProducts.map(product => (
                        <div key={product.id} className="carousel-item">
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>

                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                           {/* <button onClick={() => buy(product)}>Buy</button> */}

                        </div>
                        
                    ))
                ) : (
                    <p>No products found for this category.</p>
                )}
            </Carousel>
        </div>
    );
};

export default CategoryPage;


////////////////This One Works Well
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { productsData } from '../data/productsData'; // Import the products data
// import { useCart } from '../CartContext'; // Import the Cart Context


// const CategoryPage = () => {
//     const { categoryName } = useParams(); // Get the category name from the URL parameter
//     const { addToCart } = useCart(); // Use the Cart context to add products
//     const categoryProducts = productsData[categoryName] || []; // Fetch products for the category

//     return (
//         <div>
//             <h2>{categoryName.replace(/([A-Z])/g, ' $1')}</h2>
//             <div className="product-list">
//                 {categoryProducts.length > 0 ? (
//                     categoryProducts.map(product => (
//                         <div key={product.id} className="product-card"> {/* Use the same class as in the Home page */}
//                             <img src={product.imageUrl} alt={product.name} className="product-image" /> {/* Add product-image class */}
//                             <h3>{product.name}</h3>
//                             <p>${product.price}</p>
//                             <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to Cart button */}
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

