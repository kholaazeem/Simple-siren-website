import React from 'react';

const About = () => {
  // Center aligned Icon Box ka style
  const iconBoxStyle = {
    width: '56px',
    height: '56px',
    backgroundColor: '#FFFDF0', // Halka yellow background
    color: '#FFD700', // Dark yellow icon color
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem auto' // mx-auto taake center mein rahe
  };

  // Cards ka style (Pichle features card se milta julta lekin text-center ke sath)
  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #EAEAEA',
    borderRadius: '20px',
    padding: '3rem 2rem',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  };

  return (
    // Upar margin taake navbar ke neechay space bache
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
        <h1 className="display-5 fw-bold text-dark mb-4" style={{ letterSpacing: '-1px' }}>
          About <span style={{ color: '#FFD700' }}>Simple Siren</span>
        </h1>
        <p className="fs-5 text-secondary" style={{ lineHeight: '1.6' }}>
          We're a team of dreamers and builders who believe blockchain should feel like magic — not a maze. Simple Siren was born from the idea that powerful technology can also be friendly.
        </p>
      </div>

      {/* 3 Grid Cards Section */}
      <div className="row g-4 mb-4">
        
        {/* Card 1: Community First */}
        <div className="col-lg-4 col-md-6">
          <div style={cardStyle} className="hover-lift">
            <div style={iconBoxStyle}>
              {/* Users Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h5 className="fw-bold text-dark mb-3">Community First</h5>
            <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>
              We build for people, not profit. Every decision starts with our community.
            </p>
          </div>
        </div>

        {/* Card 2: Radical Simplicity */}
        <div className="col-lg-4 col-md-6">
          <div style={cardStyle} className="hover-lift">
            <div style={iconBoxStyle}>
              {/* Target/Concentric Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h5 className="fw-bold text-dark mb-3">Radical Simplicity</h5>
            <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>
              Complexity is the enemy. If your grandma can't use it, we redesign it.
            </p>
          </div>
        </div>

        {/* Card 3: Joyful Tech */}
        <div className="col-lg-4 col-md-6 mx-auto">
          <div style={cardStyle} className="hover-lift">
            <div style={iconBoxStyle}>
              {/* Sparkles Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M7 5H3"></path>
              </svg>
            </div>
            <h5 className="fw-bold text-dark mb-3">Joyful Tech</h5>
            <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>
              Technology should spark joy. We add delight to every interaction.
            </p>
          </div>
        </div>

      </div>

      {/* Our Mission (Wide Card) */}
      <div className="row">
        <div className="col-12">
          <div 
            style={{...cardStyle, padding: '4rem 2rem'}} 
            className="hover-lift"
          >
            <h3 className="fw-bold text-dark mb-4">Our Mission</h3>
            <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '800px', fontSize: '16px', lineHeight: '1.7' }}>
              To make decentralized technology so intuitive and delightful that anyone — regardless of technical background — can participate in the future of the open web. We're building bridges, not walls.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;