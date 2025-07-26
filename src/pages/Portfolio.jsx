import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const designs = [
    { id: 1, title: "Urban Elegance", img: "https://via.placeholder.com/600x400?text=Urban+Elegance", desc: "A modern streetwear collection blending bold patterns and sleek silhouettes." },
    { id: 2, title: "Bohemian Rhapsody", img: "https://via.placeholder.com/600x400?text=Bohemian+Rhapsody", desc: "Vibrant, free-spirited designs with intricate embroidery." },
    { id: 3, title: "Minimalist Chic", img: "https://via.placeholder.com/600x400?text=Minimalist+Chic", desc: "Clean lines and neutral tones for timeless elegance." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={styles.container}
    >
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.grid}>
        {designs.map((design) => (
          <motion.div
            key={design.id}
            whileHover={{ scale: 1.05 }}
            className={styles.card}
          >
            <img src={design.img} alt={design.title} className={styles.image} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{design.title}</h3>
              <p className={styles.cardDescription}>{design.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;