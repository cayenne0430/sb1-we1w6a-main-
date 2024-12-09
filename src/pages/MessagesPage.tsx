import React from 'react';
import ChatList from '../components/messages/ChatList';
import ChatRoom from '../components/messages/ChatRoom';
import { useParams } from 'react-router-dom';

const MessagesPage = () => {
  const { chatId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-3 h-[calc(100vh-12rem)]">
          <ChatList activeChatId={chatId} />
          {chatId ? (
            <ChatRoom chatId={chatId} />
          ) : (
            <div className="hidden md:flex md:col-span-2 items-center justify-center bg-gray-50 border-l">
              <div className="text-center text-gray-500">
                <p>チャットを選択してください</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;