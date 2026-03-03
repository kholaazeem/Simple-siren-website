import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

// Context
import { CartProvider } from './context/CartContext';

// Components
import Navbar from './components/Navbar'; 
import CartSidebar from './components/CartSidebar'; 
import Footer from './components/Footer';

// Pages
import Home from './pages/Home'; 
import About from './pages/About';
import Shop from './pages/Shop'; 
import ProductDetail from './pages/ProductDetail'; 
import Blog from './pages/Blog'; 
import BlogPost from './pages/BlogPost'; 
import Checkout from './pages/Checkout'; // <-- Checkout page import kiya

const App = () => {
  return (
    <CartProvider>
      <Router>
        {/* Bootstrap classes se layout clean kiya */}
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#FCFAEE' }}>
          
          <Navbar />
          <CartSidebar /> 
          
          {/* Main Content Area (Semantic HTML use kiya) */}
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/checkout" element={<Checkout />} /> {/* <-- Checkout route add kiya */}
            </Routes>
          </main>

          <Footer />
          
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;