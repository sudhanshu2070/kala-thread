import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.name} className={styles.navItem}>
            <Link to={item.path} className={styles.navLink} onClick={onLinkClick}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;