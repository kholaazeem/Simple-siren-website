import React, { useState } from 'react';
// React Router se Link aur useLocation import kiya
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const navItems = ['Home', 'About', 'Shop', 'Blog'];
  
  // Ye humein batayega ke abhi hum kis page par hain
  const location = useLocation(); 

  return (
    <div className="fixed-top d-flex justify-content-center mt-3 mt-md-4 px-3" style={{ zIndex: 1050 }}>
      <nav 
        className="navbar navbar-expand-md bg-white px-3 px-md-4 py-2 w-100"
        style={{
          maxWidth: '750px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          borderRadius: isMobileMenuOpen ? '20px' : '50px', 
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container-fluid p-0">
          
          {/* Logo par click karne se wapas Home ('/') par chala jaye */}
          <Link to="/" className="navbar-brand fs-5 text-dark m-0 text-decoration-none" style={{ letterSpacing: '-0.5px' }}>
            <span className="fw-bolder">Simple</span>
            <span className="fw-bolder" style={{ color: '#FFD700' }}>Siren</span>
          </Link>

          <button 
            className="navbar-toggler border-0 shadow-none px-0" 
            type="button" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span style={{ fontSize: '26px', color: '#FFD700', lineHeight: '1' }}>
              {isMobileMenuOpen ? '✖' : '☰'}
            </span>
          </button>

          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show text-center mt-3' : ''} justify-content-end`}>
            <ul className="navbar-nav align-items-center" style={{ gap: '0.2rem' }}>
              {navItems.map((item) => {
                // Rasta (path) banayen: Home ke liye '/', baqi ke liye '/about', '/shop' etc.
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                // Check karein kya ye link abhi active hai
                const isActive = location.pathname === path;

                return (
                  <li key={item} className="nav-item w-100">
                    {/* Yahan humne <a> ki jagah <Link> use kiya hai */}
                    <Link
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`nav-link rounded-pill px-4 py-2 text-decoration-none ${
                        isActive ? 'text-dark fw-semibold' : 'text-secondary fw-medium'
                      }`}
                      style={{
                        backgroundColor: isActive ? '#FFD700' : 'transparent',
                        transition: 'all 0.3s ease',
                        fontSize: '15px',
                        display: 'inline-block',
                        width: isMobileMenuOpen ? '100%' : 'auto'
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;