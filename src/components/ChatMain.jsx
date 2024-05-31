import React, { useState, useEffect } from 'react';
import { useChat } from '../hooks/useChat';

const ChatMain = () => {
    const { messages, sendMessage } = useChat();
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        sendMessage(newMessage);
        setNewMessage('');
    };

    return (
        <div className="flex-1 p-4">
            <div className="mb-4">
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
                className="w-full p-2 border"
            />
            <button onClick={handleSend} className="bg-blue-500 text-white py-2 px-4">Send</button>
        </div>
    );
};

export default ChatMain;
