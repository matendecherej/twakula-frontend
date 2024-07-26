import React from 'react';

const SuggestedAccounts = ({ accounts }) => {
  return (
    <div className="suggested-accounts">
      <h2>Suggested Accounts</h2>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            <img src={account.profilePicture} alt={account.username} />
            <span>{account.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedAccounts;
