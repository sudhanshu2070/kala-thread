import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.text}>&copy; 2025 DesignVibe. All rights reserved.</p>
      <div className={styles.socialLinks}>
        <a href="https://instagram.com" className={styles.socialLink}>Instagram</a>
        <a href="https://linkedin.com" className={styles.socialLink}>LinkedIn</a>
        <a href="https://pinterest.com" className={styles.socialLink}>Pinterest</a>
      </div>
    </div>
  </footer>
);

export default Footer;