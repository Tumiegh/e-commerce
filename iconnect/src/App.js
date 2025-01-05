import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ProductList from './components/ProductList';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <ProductList />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
