import React, { useContext } from 'react'; // <-- useContext import kiya
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // <-- CartContext import kiya

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  
  // Context se addToCart function nikala
  const { addToCart } = useContext(CartContext); 

  // Products ka data
  const products = [
    { id: 1, title: 'Siren Starter Pack', desc: 'Perfect for beginners. Get set up in minutes.', price: '$29', badge: 'Popular' },
    { id: 2, title: 'Siren Pro Node', desc: 'Run your own node with premium performance.', price: '$149', badge: 'Best Value' },
    { id: 3, title: 'Siren Hardware Wallet', desc: 'Cold storage, warm design. Secure your assets.', price: '$79', badge: null },
    { id: 4, title: 'Siren Merch Tee', desc: 'Rep the siren life. Soft organic cotton.', price: '$35', badge: 'New' },
    { id: 5, title: 'Annual Cloud Plan', desc: 'Unlimited sync, priority support, early access.', price: '$99/yr', badge: null },
    { id: 6, title: 'Siren Dev Kit', desc: 'Build on Simple Siren with our complete toolkit.', price: '$199', badge: null },
    { id: 7, title: 'Siren Pro Cable', desc: 'High-speed data transfer and durable build.', price: '$19', badge: 'Essential' },
    { id: 8, title: 'Siren Sticker Pack', desc: 'Decorate your gear with our premium vinyl stickers.', price: '$9', badge: null },
    { id: 9, title: 'Siren Coffee Mug', desc: 'Start your coding sessions with the perfect mug.', price: '$15', badge: 'New' }
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container text-center" style={{ paddingTop: '150px', minHeight: '100vh' }}>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="btn btn-warning mt-3 rounded-pill fw-bold">
          Go Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/shop')} 
        className="btn mb-4 d-flex align-items-center fw-bold hover-lift"
        style={{ color: '#555', backgroundColor: '#f8f9fa', borderRadius: '30px', padding: '10px 20px', border: '1px solid #ddd', transition: 'all 0.2s' }}
      >
        <svg className="me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Shop
      </button>

      {/* Product Detail Layout */}
      <div className="row g-5 align-items-center bg-white p-4 p-md-5" style={{ borderRadius: '24px', border: '1px solid #EAEAEA' }}>
        
        {/* Left Side: Big Image Box */}
        <div className="col-md-6 text-center">
          <div 
            className="w-100 position-relative d-flex align-items-center justify-content-center" 
            style={{ backgroundColor: '#F5F5F5', aspectRatio: '1 / 1', borderRadius: '20px' }}
          >
            <div style={{ width: '120px', height: '120px', backgroundColor: '#FCEEA7', borderRadius: '24px' }}></div>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="col-md-6">
          {product.badge && (
            <span className="px-3 py-1 fw-bold text-dark mb-3 d-inline-block" style={{ backgroundColor: '#FFD700', borderRadius: '20px', fontSize: '12px' }}>
              {product.badge}
            </span>
          )}
          <h1 className="display-5 fw-bold text-dark mb-3">{product.title}</h1>
          <h2 className="fw-bolder mb-4" style={{ color: '#333' }}>{product.price}</h2>
          <p className="fs-5 text-secondary mb-5" style={{ lineHeight: '1.6' }}>
            {product.desc} This is the detailed view. You can add more specs, features, or images here specifically for this product.
          </p>
          
          <button 
            onClick={() => addToCart(product)} // <-- Yahan addToCart function lagaya hai
            className="btn rounded-pill fw-bold d-flex align-items-center justify-content-center w-100 py-3"
            style={{ backgroundColor: '#FFD700', color: '#000', border: 'none', fontSize: '18px', transition: 'transform 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
             <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;