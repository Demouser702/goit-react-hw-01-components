import './App.css';
import Profile from './profile/Profile';
import user from './profile/user.json';
import data from './statistics/data.json';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import transactions from './transactionhistory/transactions.json';
import TransactionHystory from './transactionhistory/TransactionHistory';

function transformDataArrayToObject(dataArray) {
  const dataObject = {};
  dataArray.forEach(item => {
    dataObject[item.label] = item.percentage;
  });
  return dataObject;
}

function App() {
  return (
    <div>
      <div>
        <h1>Profile</h1>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics
          title="upload stats"
          stats={transformDataArrayToObject(data)}
        />
      </div>
      <div>
        <FriendList friends={friends}></FriendList>
      </div>
      <div>
        <TransactionHystory items={transactions} />;
      </div>
    </div>
  );
}

export default App;
