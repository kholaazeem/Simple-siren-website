import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- 1. useNavigate import kiya
// Apne path ke hisaab se Features ko import karein
import Features from '../components/Features'; 
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';

const Home = () => {
  const navigate = useNavigate(); // <-- 2. Hook initialize kiya

  return (
    <>
      {/* Hero Section Container */}
      <div className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', marginTop: '80px' }}>
        <div className="row align-items-center w-100">
          
          {/* Left Column: Text aur Buttons */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 fade-in-up">
            
            {/* Top Badge */}
            <div 
              className="d-inline-flex align-items-center rounded-pill px-3 py-1 mb-4" 
              style={{ border: '1px solid #EAEAEA', backgroundColor: '#FDFBF4' }}
            >
              <span style={{ color: '#FFCC00', marginRight: '8px', fontSize: '12px' }}>●</span>
              <span className="fw-medium text-dark" style={{ fontSize: '14px' }}>Blockchain-powered simplicity</span>
            </div>

            {/* Main Heading */}
            <h1 className="display-4 fw-bolder text-dark mb-4" style={{ letterSpacing: '-1.5px', lineHeight: '1.1' }}>
              The friendly <br />
              <span style={{ color: '#FFCC00' }}>blockchain</span> <br />
              for everyone.
            </h1>

            {/* Subheading */}
            <p className="lead text-secondary mb-5" style={{ fontSize: '18px', maxWidth: '450px' }}>
              Simple Siren makes decentralized technology accessible, portable, and delightfully easy to use. No jargon, just magic.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button 
                onClick={() => navigate('/shop')} // <-- 3. Get Started par /shop navigate
                className="btn rounded-pill px-4 py-2 fw-bold d-flex align-items-center"
                style={{ backgroundColor: '#FFCC00', color: '#000', border: 'none', fontSize: '16px' }}
              >
                Get Started <span className="ms-2 fs-5">→</span>
              </button>
              
              <button 
                onClick={() => navigate('/about')} // <-- 4. Learn More par /about navigate
                className="btn rounded-pill px-4 py-2 fw-medium"
                style={{ backgroundColor: 'transparent', color: '#000', border: '1px solid #CCC', fontSize: '16px' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Mobile Phone Image */}
          <div className="col-lg-6 col-md-12 text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Path updated: /public hata diya gaya hai */}
            <img 
              src="/mobile-mokup.png" 
              alt="Simple Siren App" 
              className="img-fluid floating-phone"
              style={{ maxWidth: '300px', borderRadius: '35px' }} 
            />
          </div>

        </div>
      </div>

      {/* Grid Features Section (Jo humne pehle banaya tha) */}
      <Features />
      <CallToAction/>
      <Contact/>
    </>
  );
};

export default Home;