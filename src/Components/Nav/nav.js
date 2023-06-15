import React, { useEffect, useState } from 'react';
import './nav.css';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? 'navMenu navbar-scrolled' : 'navMenu'}>
      <div className="container" onClick={toggleMenu}>
        <div className={`bar1 ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar2 ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar3 ${menuOpen ? 'change' : ''}`}></div>
      </div>
      <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        <a href="#container" onClick={handleClick}>
          Home
        </a>
        <a href="#about" onClick={handleClick}>
          About
        </a>

        <a href="#project" onClick={handleClick}>
          Projects
        </a>
        <a className="final" href="#contact" onClick={handleClick}>
          Contact
        </a>
        <div className="dot"></div>
      </div>
    </nav>
  );
}

export default Nav;
