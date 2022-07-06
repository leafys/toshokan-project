import cn from 'classnames';
import { IBurger } from './Burger.props';

const Burger = ({ isNavOpen, toggleNav }: IBurger): JSX.Element => {
  return (
    <div
      onClick={toggleNav}
      className={cn(['burger', isNavOpen && 'burger__active'])}
    >
      <button type="button" className="burger__button" title="Menu">
        <span className="burger__hidden_menu">Toggle menu</span>
        <span className="burger__bar burger__bar--1"></span>
        <span className="burger__bar burger__bar--2"></span>
        <span className="burger__bar burger__bar--3"></span>
      </button>
    </div>
  );
};

export default Burger;
