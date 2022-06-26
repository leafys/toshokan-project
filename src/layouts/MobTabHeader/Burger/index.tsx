import React from 'react';
import './Burger.scss';

const Burger = () => {
  return (
    <div id="burger">
      <button type="button" className="burger-button" title="Menu">
        <span className="hidden">Toggle menu</span>
        <span className="burger-bar burger-bar--1"></span>
        <span className="burger-bar burger-bar--2"></span>
        <span className="burger-bar burger-bar--3"></span>
      </button>
    </div>
  );
};

export default Burger;
