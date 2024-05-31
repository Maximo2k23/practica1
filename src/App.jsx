import React from 'react';
import LoginForm from './components/LoginForm';
import ChatHeader from './components/ChatHeader';
import ChatSidebar from './components/ChatSidebar';
import ChatMain from './components/ChatMain';
import ChatFooter from './components/ChatFooter';
import { useAuth } from './hooks/useAuth';

const App = () => {
    const user = useAuth();

    if (!user) {
        return <LoginForm />;
    }

    return (
        <div className="flex flex-col h-screen">
            <ChatHeader />
            <div className="flex flex-1">
                <ChatSidebar />
                <ChatMain />
            </div>
            <ChatFooter />
        </div>
    );
};

export default App;
