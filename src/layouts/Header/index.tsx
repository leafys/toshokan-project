import React from 'react';
import DescHeader from '@layouts/Header/DescHeader';
import MobTabHeader from '@layouts/Header/MobTabHeader';

const Header = () => {
  return (
    <>
      <DescHeader className="xl:hidden xl:flex-col" />
      <MobTabHeader className="hidden xl:block" />
    </>
  );
};

export default Header;
