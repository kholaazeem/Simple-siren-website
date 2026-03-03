import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- 1. useNavigate import kiya

const CallToAction = () => {
  const navigate = useNavigate(); // <-- 2. Hook initialize kiya

  return (
    // Upar aur neeche se margin taake baki sections se distance rahe
    <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
      
      {/* Yellow CTA Box */}
      <div 
        className="d-flex flex-column align-items-center justify-content-center text-center px-4 py-5 p-md-5 shadow-sm"
        style={{
          backgroundColor: '#FFD700', // Humara primary brand yellow color
          borderRadius: '32px',       // Image ki tarah bare rounded corners
          minHeight: '400px'
        }}
      >
        {/* Heading */}
        <h2 className="display-5 fw-bolder text-dark mb-3" style={{ letterSpacing: '-1px' }}>
          Ready to dive in?
        </h2>
        
        {/* Subheading */}
        <p className="fs-5 text-dark mb-5" style={{ maxWidth: '600px', opacity: '0.85' }}>
          Join thousands of happy users who've already made the switch to simple, friendly blockchain.
        </p>

        {/* Start Now Button */}
        <button 
          onClick={() => navigate('/shop')} // <-- 3. Button par click lagaya jo shop par le jayega
          className="btn rounded-pill px-5 py-3 fw-bold d-flex align-items-center"
          style={{ 
            backgroundColor: '#0F172A', // Almost black/dark navy color (image jaisa)
            color: '#FFFFFF', 
            border: 'none', 
            fontSize: '16px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          // Hover effects ke liye inline events
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0px)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Start Now 
          {/* Arrow Icon */}
          <svg className="ms-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

      </div>
    </div>
  );
};

export default CallToAction;