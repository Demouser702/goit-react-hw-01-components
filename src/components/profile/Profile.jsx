import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt={`${username} `}
        className={styles.avatar}
        width={70}
        height={70}
      />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.statsLabel}>Followers</span>
        <br />
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className={styles.statsLabel}>Views</span>
        <br />
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className={styles.statsLabel}>Likes</span>
        <br />
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired, // Specify the data type for the avatar prop
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
