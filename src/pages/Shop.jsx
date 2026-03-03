import React, { useState, useContext } from 'react'; // <-- useContext import kiya
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // <-- CartContext import kiya

const Shop = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  
  // Context se addToCart function nikala
  const { addToCart } = useContext(CartContext); 

  // Products ka Data
  const products = [
    {
      id: 1,
      title: 'Siren Starter Pack',
      desc: 'Perfect for beginners. Get set up in minutes.',
      price: '$29',
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'Siren Pro Node',
      desc: 'Run your own node with premium performance.',
      price: '$149',
      badge: 'Best Value'
    },
    {
      id: 3,
      title: 'Siren Hardware Wallet',
      desc: 'Cold storage, warm design. Secure your assets.',
      price: '$79',
      badge: null 
    },
    {
      id: 4,
      title: 'Siren Merch Tee',
      desc: 'Rep the siren life. Soft organic cotton.',
      price: '$35',
      badge: 'New'
    },
    {
      id: 5,
      title: 'Annual Cloud Plan',
      desc: 'Unlimited sync, priority support, early access.',
      price: '$99/yr',
      badge: null
    },
    {
      id: 6,
      title: 'Siren Dev Kit',
      desc: 'Build on Simple Siren with our complete toolkit.',
      price: '$199',
      badge: null
    },
    {
      id: 7,
      title: 'Siren Pro Cable',
      desc: 'High-speed data transfer and durable build.',
      price: '$19',
      badge: 'Essential'
    },
    {
      id: 8,
      title: 'Siren Sticker Pack',
      desc: 'Decorate your gear with our premium vinyl stickers.',
      price: '$9',
      badge: null
    },
    {
      id: 9,
      title: 'Siren Coffee Mug',
      desc: 'Start your coding sessions with the perfect mug.',
      price: '$15',
      badge: 'New'
    }
  ];

  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
        <h1 className="display-5 fw-bold text-dark mb-3" style={{ letterSpacing: '-1px' }}>
          The <span style={{ color: '#FFD700' }}>Shop</span>
        </h1>
        <p className="fs-5 text-secondary">
          Everything you need to start your Simple Siren journey.
        </p>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {displayedProducts.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-12">
            <div 
              onClick={() => navigate(`/shop/${product.id}`)} 
              className="card h-100 border-0 hover-lift" 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '20px', 
                border: '1px solid #EAEAEA !important',
                padding: '1.2rem',
                cursor: 'pointer', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              
              {/* Product Image Box */}
              <div 
                className="w-100 mb-4 position-relative d-flex align-items-center justify-content-center" 
                style={{ 
                  backgroundColor: '#F5F5F5',
                  aspectRatio: '1 / 1', 
                  borderRadius: '16px' 
                }}
              >
                {product.badge && (
                  <span 
                    className="position-absolute px-3 py-1 fw-bold text-dark"
                    style={{
                      top: '12px',
                      right: '12px',
                      backgroundColor: '#FFD700',
                      borderRadius: '20px',
                      fontSize: '11px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {product.badge}
                  </span>
                )}

                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FCEEA7', 
                    borderRadius: '16px'
                  }}
                ></div>
              </div>

              {/* Product Details */}
              <div className="d-flex flex-column flex-grow-1">
                <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '18px' }}>
                  {product.title}
                </h5>
                <p className="text-secondary mb-4" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  {product.desc}
                </p>
                
                <div className="d-flex align-items-center justify-content-between mt-auto">
                  <span className="fw-bolder text-dark" style={{ fontSize: '20px' }}>
                    {product.price}
                  </span>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      addToCart(product); // <-- Yahan alert hata kar Cart ka function laga diya
                    }}
                    className="btn rounded-pill fw-bold d-flex align-items-center px-4 py-2"
                    style={{ 
                      backgroundColor: '#FFD700', 
                      color: '#000', 
                      border: 'none', 
                      fontSize: '14px',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Add
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && (
        <div className="text-center mt-5">
          <button 
            onClick={() => setShowAll(true)}
            className="btn rounded-pill fw-bold px-5 py-3"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#000', 
              border: 'none', 
              fontSize: '16px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.3)';
            }}
          >
            View All
          </button>
        </div>
      )}

    </div>
  );
};

export default Shop;