import { useSpring, animated } from 'react-spring';
import { ISideBar } from './SideBar.props';
import styles from './SideBar.module.scss';

const SideBar = ({ isNavOpen, children, toggleNav }: ISideBar): JSX.Element => {
  const { transform } = useSpring({
    from: { transform: 'translateX(-100%)' },
    transform: isNavOpen ? 'translateX(0%)' : 'translateX(-100%)',
  });
  return (
    <div className={styles.sidebar}>
      {isNavOpen && (
        <div onClick={toggleNav} className={styles.sidebar__backdrop}></div>
      )}
      <animated.div
        style={{ transform: transform }}
        className={styles.sidebar__panel}
      >
        {isNavOpen && <div className={styles.sidebar__panel}>{children}</div>}
      </animated.div>
    </div>
  );
};

export default SideBar;
