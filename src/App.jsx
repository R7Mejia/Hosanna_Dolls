
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import CategoryPage from './pages/CategoryPage';

//import AboutPage from './Pages/AboutPage';


const App = () => (
  <div className="container">
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
    </Routes>
    <Footer />
  </Router>
  </div>
);

export default App;
