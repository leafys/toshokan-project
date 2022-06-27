import React from 'react';
import NavBar from '@components/NavBar';
import MyInput from '@UI/Inputs/MainInput';
import Burger from './Burger';
import SideBar from './SideBar';
import { IMobTabHeader } from './MobTabHeader.props';

const MobTabHeader = ({
  routeItems,
  ...className
}: IMobTabHeader): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header {...className}>
      <div className="container mx-auto flex items-center px-5 py-4">
        <a href="/">
          <img
            className="w-mobile-tablet-logo"
            src="images/mob-logo.png"
            alt="logo"
          />
        </a>

        <MyInput
          className="w-full mx-3 p-4 h-12 text-gray-light bg-dark rounded-md"
          placeholder="Search..."
          type="search"
        />

        <SideBar toggleNav={toggleNav} isNavOpen={isNavOpen}>
          <NavBar
            className="xl:flex xl:flex-col xl:items-center"
            routeItems={routeItems}
          />
        </SideBar>

        <Burger toggleNav={toggleNav} isNavOpen={isNavOpen} />
      </div>
    </header>
  );
};

export default MobTabHeader;
