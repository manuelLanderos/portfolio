import React, { useEffect, useState } from 'react';
import './nav.css';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

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

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={scrolled ? 'navMenu navbar-scrolled' : 'navMenu'}>
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
    </nav>
  );
}

export default Nav;