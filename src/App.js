import { Fragment } from 'react/cjs/react.production.min';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './frends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <Fragment>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}
