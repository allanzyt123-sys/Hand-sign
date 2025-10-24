import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Education',
    path: '/education'
  }, {
    name: 'Translator',
    path: '/translator'
  }, {
    name: 'Team',
    path: '/team'
  }, {
    name: 'Vision',
    path: '/vision'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container glass rounded-xl">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <span className="gradient-text font-bold text-2xl">
              SignBridge
            </span>
          </Link>
          <div className="nav-links">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                {link.name}
              </Link>)}
          </div>
          <div className="mobile-menu-button">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;