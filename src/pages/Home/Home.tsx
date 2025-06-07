import Layout from '../../components/Layout/Layout';
import styles from './Home.module.css';

const Home = () => (
  <Layout>
    <section className={styles.hero}>
      <h1>Welcome to My Fashion Portfolio</h1>
      <p>Explore my latest collections and designs.</p>
    </section>
  </Layout>
);

export default Home;