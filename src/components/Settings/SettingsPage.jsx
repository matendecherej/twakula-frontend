import React from 'react';
import AccountSettings from './AccountSettings';
import PrivacySettings from './PrivacySettings';
import NotificationSettings from './NotificationSettings';

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <AccountSettings />
      <PrivacySettings />
      <NotificationSettings />
    </div>
  );
};

export default SettingsPage;
