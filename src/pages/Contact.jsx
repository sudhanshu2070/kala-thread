import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={styles.container}
  >
    <h2 className={styles.title}>Contact Me</h2>
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles.input}
        />
        <textarea
          placeholder="Your Message"
          className={styles.textarea}
          rows="5"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.button}
        >
          Send Message
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default Contact;