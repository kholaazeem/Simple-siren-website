import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '100px' }}>
      
      {/* 1. Animated Wave Top */}
      <div className="wave-wrapper">
        <div className="animated-wave">
          {/* Pehli Wave SVG */}
          <svg className="wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#0F172A" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
          {/* Dusri Wave SVG (Loop ko complete karne ke liye) */}
          <svg className="wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#0F172A" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* 2. Main Footer Content (Dark Background) */}
      <div style={{ backgroundColor: '#0F172A', position: 'relative', overflow: 'hidden', paddingBottom: '30px' }}>

        {/* Giant Faded Text Background (Jo peechay nazar aa rha hai) */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '5%',
          fontSize: 'min(18vw, 250px)', // Screen ke hisaab se text bara/chota hoga
          fontWeight: '900',
          color: 'rgba(255, 255, 255, 0.03)', // Bohot halka white color
          lineHeight: '0.8',
          userSelect: 'none', // Text select na ho sake
          zIndex: 0
        }}>
          Simple<br/>Siren
        </div>

        {/* Asal Links aur Text */}
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '60px' }}>
          <div className="row g-4 mb-5">
            
            {/* Left Side: Brand Info */}
            <div className="col-lg-6 col-md-12 pe-md-5">
              <h4 className="fw-bolder text-white mb-3" style={{ letterSpacing: '-0.5px' }}>
                Simple<span style={{ color: '#FFD700' }}>Siren</span>
              </h4>
              <p style={{ color: '#94A3B8', maxWidth: '380px', fontSize: '15px', lineHeight: '1.6' }}>
                Making blockchain technology friendly, portable, and accessible for everyone on the planet.
              </p>
            </div>

            {/* Middle: Navigate Links */}
            <div className="col-lg-3 col-6">
              <h6 className="fw-bold mb-4" style={{ color: '#64748B', fontSize: '12px', letterSpacing: '1px' }}>NAVIGATE</h6>
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#shop" className="footer-link">Shop</a></li>
                <li><a href="#blog" className="footer-link">Blog</a></li>
              </ul>
            </div>

            {/* Right Side: Connect Links */}
            <div className="col-lg-3 col-6">
              <h6 className="fw-bold mb-4" style={{ color: '#64748B', fontSize: '12px', letterSpacing: '1px' }}>CONNECT</h6>
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li><a href="#twitter" className="footer-link">Twitter</a></li>
                <li><a href="#discord" className="footer-link">Discord</a></li>
                <li><a href="#github" className="footer-link">GitHub</a></li>
                <li><a href="#telegram" className="footer-link">Telegram</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="mb-2 mb-md-0" style={{ color: '#64748B', fontSize: '13px' }}>
              © 2026 Simple Siren. All rights reserved.
            </p>
            <p className="mb-0" style={{ color: '#64748B', fontSize: '13px' }}>
              Built with 💛 for a decentralized future.
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;