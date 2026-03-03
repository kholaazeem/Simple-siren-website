import React from 'react';

const Features = () => {
  return (
    <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
      
      {/* Heading Section */}
      <div className="text-center mb-5 fade-in-up">
        <h2 className="display-5 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
          Why <span style={{ color: '#FFD700' }}>Simple Siren</span>?
        </h2>
        <p className="lead text-secondary mt-3 mx-auto" style={{ maxWidth: '600px', fontSize: '18px' }}>
          Everything you need for the decentralized world, wrapped in a friendly experience.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="row g-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
        
        {/* Left Side (Contains 3 Cards) */}
        <div className="col-lg-8">
          <div className="row g-4">
            
            {/* 1. Top Wide Card */}
            <div className="col-12">
              <div className="bento-card h-100">
                <div className="icon-box">
                  {/* Blockchain Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>
                </div>
                <h4 className="fw-bold mb-2">Blockchain Native</h4>
                <p className="text-secondary mb-0">Built on a robust, eco-friendly chain. Secure, transparent, and lightning fast.</p>
              </div>
            </div>

            {/* 2. Bottom Left Card */}
            <div className="col-md-6">
              <div className="bento-card h-100">
                <div className="icon-box">
                  {/* Phone Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </div>
                <h4 className="fw-bold mb-2">Portable & Light</h4>
                <p className="text-secondary mb-0">Fits in your pocket. Our app is designed for on-the-go simplicity.</p>
              </div>
            </div>

            {/* 3. Bottom Right Card */}
            <div className="col-md-6">
              <div className="bento-card h-100">
                <div className="icon-box">
                  {/* Open Nodes Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <h4 className="fw-bold mb-2">Open & Friendly</h4>
                <p className="text-secondary mb-0">No gatekeeping. Simple Siren is built for newcomers and pros alike.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side (Contains 1 Tall Card) */}
        <div className="col-lg-4">
          <div className="bento-card h-100 d-flex flex-column">
            <div className="icon-box">
              {/* Cloud Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
            </div>
            <h4 className="fw-bold mb-2">Cloud Synced</h4>
            <p className="text-secondary mb-0">
              Your assets follow you everywhere. Seamless sync across all your devices.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;