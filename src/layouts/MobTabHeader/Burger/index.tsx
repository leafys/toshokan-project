import React from 'react';
import cn from 'classnames';
import { IBurger } from './Burger.props';

const Burger: React.FC<IBurger> = ({ isNavOpen, toggleNav }) => {
  return (
    <div
      onClick={toggleNav}
      id="burger"
      className={cn([isNavOpen && 'active'])}
    >
      <button type="button" className="burger-button" title="Menu">
        <span className="hidden_menu">Toggle menu</span>
        <span className="burger-bar burger-bar--1"></span>
        <span className="burger-bar burger-bar--2"></span>
        <span className="burger-bar burger-bar--3"></span>
      </button>
    </div>
  );
};

export default Burger;
