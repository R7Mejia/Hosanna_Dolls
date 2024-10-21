import React from 'react';
import { useCart } from '../CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleBuyClick = () => {
        const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdvGuLEPw_hOpNnnhIzjAc3OzYsv8sXcT6lI9-isShDyS2xgQ/viewform?usp=pp_url";
        const urlWithProductInfo = `${googleFormURL}?usp=pp_url&entry.1234567890=${encodeURIComponent(product.name)}&entry.9876543210=${product.price}`;
        window.open(urlWithProductInfo, '_blank');
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {/* Add to Cart Button */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            {/* Buy Button */}
            <button onClick={handleBuyClick}>Buy</button>
        </div>
    );
};

export default ProductCard;




// import React from 'react';
// import { useCart } from '../CartContext';

// const ProductCard = ({ product }) => {
//     const { addToCart } = useCart();

//     const handleBuyClick = () => {
//         const googleFormURL = "https://docs.google.com/forms/d/e/your-google-form-id/viewform";
//         const urlWithProductInfo = `${googleFormURL}?usp=pp_url&entry.1234567890=${encodeURIComponent(product.name)}&entry.9876543210=${product.price}`;
//         window.open(urlWithProductInfo, '_blank');
//     };

//     return (
//         <div className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//             {/* Add to Cart Button */}
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//             {/* Buy Button */}
//             <button onClick={handleBuyClick}>Buy</button>
//         </div>



 
//         // <div className="product-card">
//         //     <img src={product.image} alt={product.name} />
//         //     <h3>{product.name}</h3>
//         //     <p>${product.price.toFixed(2)}</p>
//         //    <button onClick={handleAddToCart}>Add to Cart</button>
//         // </div>

//     );
// };

// export default ProductCard;



    
