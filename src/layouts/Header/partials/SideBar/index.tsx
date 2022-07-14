import { ISideBar } from './SideBar.props';
import styles from './SideBar.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const SideBar = ({ isNavOpen, children, toggleNav }: ISideBar): JSX.Element => {
  return (
    <AnimatePresence>
      {isNavOpen && (
        <div className={styles.sidebar}>
          <div onClick={toggleNav} className={styles.sidebar__backdrop} />

          <motion.div
            initial={{ transform: 'translateX(-100%)' }}
            animate={{
              transform: isNavOpen ? 'translateX(0%)' : 'translateX(-100%)',
            }}
            exit={{ transform: 'translateX(-100%)' }}
            className={styles.sidebar__panel}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
