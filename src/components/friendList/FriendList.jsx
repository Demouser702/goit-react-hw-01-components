import styles from './FriendList.module.css';
import FriendListItem from '../friendlistitem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends, variant }) => (
  <ul className={styles['friend-list']}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} variant={variant} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  variant: PropTypes.string,
};

export default FriendList;
export { FriendList };
