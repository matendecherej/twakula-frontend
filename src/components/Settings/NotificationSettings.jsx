import React, { useState } from 'react';
import axios from 'axios';

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleUpdateNotifications = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:4000/api/users/notifications', {
        emailNotifications,
      });
      console.log('Notification settings updated:', response.data);
    } catch (error) {
      console.error('Error updating notification settings:', error);
    }
  };

  return (
    <form className="notification-settings" onSubmit={handleUpdateNotifications}>
      <label>
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={(e) => setEmailNotifications(e.target.checked)}
        />
        Email Notifications
      </label>
      <button type="submit">Update Notifications</button>
    </form>
  );
};

export default NotificationSettings;
