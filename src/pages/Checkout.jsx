import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // <-- SweetAlert import kiya

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Agar direct koi checkout page par aa jaye aur cart empty ho, toh wapas shop par bhej dein
  if (cartItems.length === 0) {
    return (
      <div className="container text-center" style={{ paddingTop: '150px', minHeight: '100vh' }}>
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/shop')} className="btn rounded-pill px-4 py-2 mt-3 fw-bold" style={{ backgroundColor: '#FFD700', color: '#000' }}>
          Go to Shop
        </button>
      </div>
    );
  }

  const totalAmount = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(item.price.replace('$', '').replace('/yr', ''));
    return total + (numericPrice * item.quantity);
  }, 0);

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
      <h1 className="display-5 fw-bold text-dark mb-5 text-center">Checkout</h1>
      
      <div className="row g-5">
        {/* Left Side: Checkout Form */}
        <div className="col-lg-7">
          <div className="bg-white p-4 p-md-5" style={{ borderRadius: '24px', border: '1px solid #EAEAEA' }}>
            <h4 className="fw-bold mb-4">Shipping Details</h4>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-secondary">First Name</label>
                  <input type="text" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="John" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary">Last Name</label>
                  <input type="text" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="Doe" required />
                </div>
                <div className="col-12">
                  <label className="form-label text-secondary">Email Address</label>
                  <input type="email" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="john@example.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label text-secondary">Shipping Address</label>
                  <input type="text" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="123 Main St, Apartment 4B" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary">City</label>
                  <input type="text" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="New York" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary">Zip Code</label>
                  <input type="text" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="10001" required />
                </div>
              </div>

              <h4 className="fw-bold mt-5 mb-4">Payment Information</h4>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label text-secondary">Card Number</label>
                  <input type="text" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="0000 0000 0000 0000" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary">Expiry Date</label>
                  <input type="text" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="MM/YY" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary">CVV</label>
                  <input type="text" className="form-control p-3" style={{ borderRadius: '12px', backgroundColor: '#F9F9F9', border: 'none' }} placeholder="123" required />
                </div>
              </div>

              {/* SweetAlert wala Button */}
              <button 
                type="button" 
                onClick={() => {
                  Swal.fire({
                    title: "Order Placed!",
                    text: "Your order has been placed successfully. Thank you!",
                    icon: "success",
                    confirmButtonColor: "#FFD700",
                    confirmButtonText: "Continue Shopping"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate('/shop'); // Alert band hoty hi wapas shop par
                    }
                  });
                }}
                className="btn w-100 mt-5 py-3 fw-bold rounded-pill hover-lift" 
                style={{ backgroundColor: '#FFD700', color: '#000', fontSize: '18px', transition: 'transform 0.2s ease' }}
              >
                Place Order (${totalAmount.toFixed(2)})
              </button>

            </form>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="col-lg-5">
          <div className="bg-white p-4" style={{ borderRadius: '24px', border: '1px solid #EAEAEA', position: 'sticky', top: '100px' }}>
            <h4 className="fw-bold mb-4">Order Summary</h4>
            <div className="mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="fw-bold">{item.title}</span>
                    <span className="text-secondary ms-2">x {item.quantity}</span>
                  </div>
                  <span className="fw-bold text-secondary">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="border-top pt-4">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary">Subtotal</span>
                <span className="fw-bold">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary">Shipping</span>
                <span className="fw-bold">Free</span>
              </div>
              <div className="d-flex justify-content-between mt-4 pt-3 border-top">
                <span className="fs-5 fw-bold text-dark">Total</span>
                <span className="fs-4 fw-bolder text-dark">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;