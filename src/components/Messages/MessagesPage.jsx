import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatThread from './ChatThread';
import NewMessage from './NewMessage';

const MessagesPage = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/users/conversations');
        setConversations(response.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, []);

  return (
    <div className="messages-page">
      <div className="conversations">
        <h2>Conversations</h2>
        <ul>
          {conversations.map((conversation) => (
            <li key={conversation.id} onClick={() => setSelectedConversation(conversation)}>
              {conversation.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-thread">
        {selectedConversation ? (
          <ChatThread conversation={selectedConversation} />
        ) : (
          <p>Select a conversation to start chatting</p>
        )}
      </div>
      <NewMessage />
    </div>
  );
};

export default MessagesPage;
