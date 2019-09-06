import React from 'react';
import './header.css';

const Header = () => (
  <div className="container">
    <div className="jumbotron bg text-center">
      <h1 className="logo">Clicky-Clicky!!</h1>
      <h3 className="desc">Click on a character to earn points, if you click the same character twice you lose!</h3>
    </div>
  </div>
);

export default Header;