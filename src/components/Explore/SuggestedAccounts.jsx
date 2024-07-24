import React from 'react';
import UserAvatar from '../Common/UserAvatar';

const SuggestedAccounts = ({ accounts }) => {
  return (
    <div className="suggested-accounts">
      <h2>Suggested Accounts</h2>
      {accounts.map((account) => (
        <UserAvatar key={account.id} user={account} />
      ))}
    </div>
  );
};

export default SuggestedAccounts;
