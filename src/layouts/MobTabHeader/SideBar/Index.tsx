import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ISideBar } from './SideBar.props';
import styles from './SideBar.module.scss';

const SideBar: React.FC<ISideBar> = ({ isNavOpen, children, toggleNav }) => {
  const { transform } = useSpring({
    from: { transform: 'translateX(-100%)' },
    transform: isNavOpen ? 'translateX(0%)' : 'translateX(-100%)',
  });
  return (
    <>
      {isNavOpen && (
        <div onClick={toggleNav} className={styles.sidebar_backdrop}></div>
      )}
      <animated.div style={{ transform: transform }} className={styles.sidebar}>
        {isNavOpen && <div className="sidebar-panel">{children}</div>}
      </animated.div>
    </>
  );
};

export default SideBar;
