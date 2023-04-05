import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header-container">
      <img src="/pub_logo.jpeg" alt="Pub logo" className="logo-image" />
      <p>Welcome to the Pub!</p>
    </div>
  );
}

export default Header;
