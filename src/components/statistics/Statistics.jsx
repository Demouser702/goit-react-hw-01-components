import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {Object.keys(stats).map(key => (
        <li
          key={key}
          className={styles.item}
          style={{ '--stat-color': getRandomHexColor() }}
        >
          <span className={styles.label}>{key}</span>
          <br></br>
          <span className={styles.percentage}>{stats[key]}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object, // Change PropTypes to object
};

export default Statistics;
