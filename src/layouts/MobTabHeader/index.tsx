import React from 'react';
import NavBar from '../../components/NavBar';
import MyInput from '../../components/UI/MyInput/MyInput';
import Burger from './Burger';
import { IMobTabHeader } from './MobTabHeader.props';
import SideBar from './SideBar/Index';

const MobTabHeader: React.FC<IMobTabHeader> = ({
  routeItems,
  ...className
}) => {
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
            alt="header-logo"
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
