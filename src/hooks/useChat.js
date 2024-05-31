import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export const useChat = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newSocket = io('http://localhost:3001');
        setSocket(newSocket);

        newSocket.on('messageFromServer', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => newSocket.close();
    }, []);

    const sendMessage = (message) => {
        socket.emit('messageFromClient', message);
    };

    return { messages, sendMessage };
};
