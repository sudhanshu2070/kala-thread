import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/art-pieces">Art Pieces</Link></li>
      <li><Link to="/paris-fashion-week">Paris Fashion Week</Link></li>
      <li><Link to="/copenhagen-fashion-week">Copenhagen Fashion Week</Link></li>
      <li><Link to="/cv">CV</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;