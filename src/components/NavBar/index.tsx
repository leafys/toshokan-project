import React from 'react';
import { INavBarProps, IObjectInterface } from './NavBar.props';

const NavBar: React.FC<INavBarProps> = ({ linkItems }) => {
  return (
    <nav className="flex">
      <ul className="flex items-center">
        {linkItems.map((item: IObjectInterface, index) => (
          <li
            className="pr-9 text-xl hover:text-purple transition ease-in-out duration-300"
            key={index}
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="w-80 h-10 relative">
        <div className="absolute"></div>

        <div className="w-full h-full">
          <input
            className="w-full h-full outline-0 bg-dark rounded-md"
            type="text"
            placeholder="search..."
          />
        </div>
      </div>

      <button>Sign up</button>
      <button>Sign in</button>
    </nav>
  );
};

export default NavBar;
