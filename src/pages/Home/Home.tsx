import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FaBars } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';

const Home: React.FC = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoText}>  
            कलाThread 
          </Link>
        </div>
        <button className={styles.hamburger} onClick={toggleSidenav} aria-label="Toggle menu">
          <FaBars />
        </button>
      </header>
      <div className={`${styles.sidenav} ${isSidenavOpen ? styles.sidenavOpen : ''}`}>
        <Navbar onLinkClick={() => setIsSidenavOpen(false)} />
      </div>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Timeless Elegance</h1>
          <p className={styles.heroSubtitle}>
            Discover the art of fashion through minimalist design and creative expression.
          </p>
          <Link to="/portfolio" className={styles.ctaButton}>
            Explore Portfolio
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;