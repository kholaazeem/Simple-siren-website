import React from 'react';
import Swal from 'sweetalert2'; // <-- SweetAlert import kiya

const Contact = () => {
  // Inputs ke liye custom styling taake image jaisa light grey look aaye
  const inputStyle = {
    backgroundColor: '#F5F5F5',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 20px',
    fontSize: '15px',
    outline: 'none', // Click karne par aam outline hata dega
    boxShadow: 'none'
  };

  // Form submit handle karne ka function
  const handleSubmit = (e) => {
    e.preventDefault(); // Page ko refresh hone se rokne ke liye
    
    // SweetAlert Popup
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. We'll get back to you shortly.",
      icon: "success",
      confirmButtonColor: "#FFD700",
      confirmButtonText: "Done"
    });

    e.target.reset(); // Message send hone ke baad form ko khali (clear) karne ke liye
  };

  return (
    <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
      
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
          Get in <span style={{ color: '#FFD700' }}>touch</span>
        </h2>
        <p className="fs-5 text-secondary mt-2">
          Questions? Ideas? We'd love to hear from you.
        </p>
      </div>

      {/* Form Card */}
      <div 
        className="mx-auto bg-white p-4 p-md-5" 
        style={{ 
          maxWidth: '800px', 
          borderRadius: '24px', 
          border: '1px solid #EAEAEA',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)' // Bohot halka sa shadow image ki tarah
        }}
      >
        <form onSubmit={handleSubmit}> {/* <-- Yahan onSubmit laga diya */}
          {/* Bootstrap Row for Layout */}
          <div className="row g-4">
            
            {/* Name Input (Desktop pe half, Mobile pe full) */}
            <div className="col-md-6">
              <label className="form-label fw-semibold text-dark mb-2" style={{ fontSize: '14px' }}>Name</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Your name" 
                style={inputStyle} 
                required // <-- Field ko required kar diya
              />
            </div>

            {/* Email Input (Desktop pe half, Mobile pe full) */}
            <div className="col-md-6">
              <label className="form-label fw-semibold text-dark mb-2" style={{ fontSize: '14px' }}>Email</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="you@email.com" 
                style={inputStyle} 
                required // <-- Field ko required kar diya
              />
            </div>

            {/* Message Textarea (Hamesha full width) */}
            <div className="col-12">
              <label className="form-label fw-semibold text-dark mb-2" style={{ fontSize: '14px' }}>Message</label>
              <textarea 
                className="form-control" 
                rows="5" 
                placeholder="Tell us what's on your mind..." 
                style={inputStyle}
                required // <-- Field ko required kar diya
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-12 mt-4">
              <button 
                type="submit" 
                className="btn rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center"
                style={{ 
                  backgroundColor: '#FFD700', 
                  color: '#000', 
                  border: 'none', 
                  fontSize: '15px',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Send Message
                {/* Send Paper Plane Icon */}
                <svg className="ms-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>

          </div>
        </form>
      </div>

    </div>
  );
};

export default Contact;