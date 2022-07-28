import { motion } from 'framer-motion';
import styles from './Spinner.module.scss';

const Spinner = (): JSX.Element => {
  return (
    <motion.div
      className={styles['ShowMore-loader']}
      initial={{ rotate: '0deg' }}
      animate={{ rotate: '360deg' }}
      transition={{
        duration: 1.2,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

export default Spinner;
