import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pub_area_cropped.jpeg)` }} />
      <div className="header-content">
        <img src={process.env.PUBLIC_URL + '/pub_logo.jpeg'} alt="Pub logo" className="logo-image" />
        <h1>Pub Purity Test</h1>
      </div>
    </div>
  );
}

export default Header;
