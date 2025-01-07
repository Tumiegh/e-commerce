import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ProductList from './components/ProductList';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import AuthForm from './components/AuthForm';
import PurchaseHistory from './components/PurchaseHistory'; // Added PurchaseHistory component
import './App.css';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <About />
              <ProductList />
              <Reviews />
              <AuthForm />
              <ContactForm />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase-history" element={<PurchaseHistory />} /> {/* Route for PurchaseHistory */}
        </Routes>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
