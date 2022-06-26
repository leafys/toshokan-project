import React from 'react';
import Burger from './Burger';

const MobTabHeader: React.FC<{ className: string }> = ({ ...className }) => {
  return (
    <header {...className}>
      <div className="container mx-auto flex items-center px-5 py-4">
        <a href="/">
          <img className="max-w-logo" src="/logo.png" alt="header-logo" />
        </a>

        <input
          className="w-full text-purple"
          type="text"
          placeholder="test..."
        />

        <Burger />
      </div>
    </header>
  );
};

export default MobTabHeader;
