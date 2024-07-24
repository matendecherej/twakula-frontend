import React, { useState } from 'react';
import axios from 'axios';

const PrivacySettings = () => {
  const [isPrivate, setIsPrivate] = useState(false);

  const handleUpdatePrivacy = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:4000/api/users/privacy', {
        isPrivate,
      });
      console.log('Privacy settings updated:', response.data);
    } catch (error) {
      console.error('Error updating privacy settings:', error);
    }
  };

  return (
    <form className="privacy-settings" onSubmit={handleUpdatePrivacy}>
      <label>
        <input
          type="checkbox"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)}
        />
        Private Account
      </label>
      <button type="submit">Update Privacy</button>
    </form>
  );
};

export default PrivacySettings;
