import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, variant }) => (
  <li
    className={`${styles.item} ${
      isOnline ? styles.isOnline : styles.isOffline
    }`}
  >
    <span className={`status ${styles[variant]}`}></span>
    <img
      className="avatar"
      src={avatar}
      alt={`Avatarul lui ${name}`}
      width="48"
    />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  variant: PropTypes.string, // New prop for styling variant
};

export default FriendListItem;
