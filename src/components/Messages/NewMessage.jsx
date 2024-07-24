import React, { useState } from 'react';
import axios from 'axios';

const NewMessage = () => {
  const [text, setText] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    // Assume the selected conversation ID is available
    const conversationId = "id_of_selected_conversation";

    try {
      const response = await axios.post(`http://localhost:4000/api/users/conversations/${conversationId}/messages`, {
        text,
      });
      console.log('Message sent:', response.data);
      setText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form className="new-message" onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default NewMessage;
