import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className={styles.container}
  >
    <h2 className={styles.title}>About Me</h2>
    <div className={styles.content}>
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        src="https://via.placeholder.com/300?text=Designer+Profile"
        alt="Designer"
        className={styles.image}
      />
      <div>
        <p className={styles.description}>
          I'm a passionate clothing designer with a love for blending art and modern trends. My work focuses on creating unique, sustainable designs that resonate with individuality and style.
        </p>
        <h3 className={styles.subtitle}>Achievements</h3>
        <ul className={styles.list}>
          <li>Featured in Vogue's Emerging Designers 2024</li>
          <li>Winner of Sustainable Fashion Award 2023</li>
          <li>Collaborated with top brands like EcoWear</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

export default About;