import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // <-- 1. Import kiya

const CartSidebar = () => {
  const { cartItems, removeFromCart, isSidebarOpen, setIsSidebarOpen } = useContext(CartContext);
  const navigate = useNavigate(); // <-- 2. Hook initialize kiya

  const totalAmount = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(item.price.replace('$', '').replace('/yr', ''));
    return total + (numericPrice * item.quantity);
  }, 0);

  return (
    <>
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1040 }}></div>
      )}

      <div style={{ position: 'fixed', top: 0, right: isSidebarOpen ? '0' : '-450px', width: '100%', maxWidth: '400px', height: '100vh', backgroundColor: '#fff', boxShadow: '-4px 0 15px rgba(0,0,0,0.1)', zIndex: 1050, transition: 'right 0.3s ease-in-out', display: 'flex', flexDirection: 'column' }}>
        
        <div className="p-4 d-flex justify-content-between align-items-center border-bottom">
          <h4 className="fw-bold m-0">Your Cart</h4>
          <button onClick={() => setIsSidebarOpen(false)} className="btn-close" aria-label="Close"></button>
        </div>

        <div className="p-4 flex-grow-1" style={{ overflowY: 'auto' }}>
          {cartItems.length === 0 ? (
            <div className="text-center text-secondary mt-5"><p>Your cart is currently empty.</p></div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                <div>
                  <h6 className="fw-bold mb-1" style={{ fontSize: '15px' }}>{item.title}</h6>
                  <span className="text-secondary" style={{ fontSize: '14px' }}>{item.price} x {item.quantity}</span>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-sm btn-outline-danger rounded-pill px-3" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-top" style={{ backgroundColor: '#F5F5F5' }}>
          <div className="d-flex justify-content-between mb-3">
            <span className="fs-5 fw-bold text-secondary">Total:</span>
            <span className="fs-5 fw-bolder text-dark">${totalAmount.toFixed(2)}</span>
          </div>
          
          {/* <-- 3. Checkout Button Update Kiya --> */}
          <button 
            onClick={() => {
              setIsSidebarOpen(false); // Sidebar close karo
              navigate('/checkout'); // Checkout page par jao
            }}
            className="btn w-100 py-3 fw-bold rounded-pill" 
            style={{ backgroundColor: '#FFD700', color: '#000', fontSize: '16px' }}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;