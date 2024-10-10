import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './CartContext'; // Import the CartProvider
import '@fortawesome/fontawesome-svg-core/styles.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
    </CartProvider>
);
