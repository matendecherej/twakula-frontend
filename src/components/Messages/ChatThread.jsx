import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatThread = ({ conversation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/users/conversations/${conversation.id}/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [conversation]);

  return (
    <div className="chat-thread">
      <h2>{conversation.name}</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatThread;
