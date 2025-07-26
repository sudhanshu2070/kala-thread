import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={styles.container}
  >
    <div className={styles.content}>
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        Welcome to DesignVibe
      </motion.h1>
      <p className={styles.description}>
        Crafting unique clothing designs that blend art, trends, and innovation. Explore my portfolio to see my creative journey!
      </p>
      <Link to="/portfolio">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.button}
        >
          View Portfolio
        </motion.button>
      </Link>
    </div>
  </motion.div>
);

export default Home;