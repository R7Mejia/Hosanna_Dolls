import React from 'react';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router-dom';
import CategoryBar from '../Components/CategoryBar';


const products = [
    { id: 1, name: 'Female Saints', image: '/imagenes/Female Saints/Santa Clara.jpg', category: 'femaleSaints' },
    { id: 2, name: 'Male Saints', price: 19.99, image: '/imagenes/Male Saints/St. Maximiliano Kolbe.jpeg', category: 'maleSaints' },
    { id: 3, name: 'Our Lord Jesus', price: 19.99, image: '/imagenes/Our Lord Jesus/ElBuenPastor.jpg', category: 'ourLordJesus' },
    { id: 4, name: 'Our Blessed Mother', price: 19.99, image: '/imagenes/Our Blessed Mother/Guadalupe.jpg', category: 'ourBlessedMother' },
    { id: 5, name: 'Apostles-Angels', price: 19.99, image: '/imagenes/Apostles-Angels/San Miguel.jpg', category: 'apostlesAngels' },
    { id: 6, name: 'Rosaries', price: 499.99, image: '/imagenes/Rosaries/Rosario de Pared.jpeg', category: 'rosaries' },
    { id: 7, name: 'Other', price: 14.99, image: '/imagenes/Other/example_image.jpeg', category: 'other' },
    // Add more products as needed
];

const Home = () => (
    <div>
        <CategoryBar />
        <h1>New Products</h1>
                <div className="product-list">
                     {products.map(product => (
                        <div key={product.id} className="product-card">
                             {/* This is the link that links home with categorypage */}
                             <Link to={`/category/${product.category}`}>   
                                <img src={product.image} alt={product.name} />
                                 <h3>{product.name}</h3>
                                 {/* <p>${product.price}</p> */}
                             </Link>
                         </div>
                     ))}
            <div className='descripcion'>
                <p>General product description: All dolls are 20 cm tall, made of polyester yarn, polyester stuffing and safety eyes. Most extra details are plastic beads, cloth flowers, wooden or plastic crosses, pipe cleaners, etc.
                </p>
            </div>
        </div>
    </div>
);

export default Home;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import CategoryBar from '../Components/CategoryBar';

// const products = [
//     { id: 1, name: 'Female Saints', price: 9.99, image: '/imagenes/Female Saints/Santa Clara.jpg', category: 'femaleSaints' },
//     { id: 2, name: 'Male Saints', price: 19.99, image: '/imagenes/Male Saints/St. Maximiliano Kolbe.jpeg', category: 'maleSaints' },
//     { id: 3, name: 'Our Lord Jesus', price: 19.99, image: '/imagenes/Our Lord Jesus/ElBuenPastor.jpg', category: 'ourLordJesus' },
//     { id: 4, name: 'Our Blessed Mother', price: 19.99, image: '/imagenes/Our Blessed Mother/Guadalupe.jpg', category: 'ourBlessedMother' },
//     { id: 5, name: 'Apostles-Angels', price: 19.99, image: '/imagenes/Apostles-Angels/San Miguel.jpg', category: 'apostlesAngels' },
//     { id: 6, name: 'Rosaries', price: 499.99, image: '/imagenes/Rosaries/Rosario de Pared.jpeg', category: 'rosaries' },
//     { id: 7, name: 'Other', price: 14.99, image: '/imagenes/Other/example_image.jpeg', category: 'other' },
// ];

// const Home = () => (
//     <div>
//         <CategoryBar />
//         
//             <div className='descripcion'>
//                 <p>General product description: All dolls are 20 cm tall, made of polyester yarn, polyester stuffing and safety eyes. Most extra details are plastic beads, cloth flowers, wooden or plastic crosses, pipe cleaners, etc.
//                 </p>
//             </div>
//         </div>
//     </div>
// );

// export default Home;
