import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, MoreVertical, Star } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: 'user' | 'company';
  read: boolean;
}

interface ChatRoomProps {
  chatId: string;
}

const mockMessages: Message[] = [
  {
    id: '1',
    content: 'はじめまして。案件に興味を持っていただき、ありがとうございます。',
    timestamp: '14:00',
    sender: 'company',
    read: true
  },
  {
    id: '2',
    content: '商品の使用方法について、詳しく説明していただけますでしょうか？',
    timestamp: '14:15',
    sender: 'user',
    read: true
  },
  {
    id: '3',
    content: 'もちろんです。商品は朝晩の洗顔後にご使用いただくことをお勧めしています。',
    timestamp: '14:30',
    sender: 'company',
    read: false
  }
];

const ChatRoom: React.FC<ChatRoomProps> = ({ chatId }) => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isStarred, setIsStarred] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: 'user',
        read: false
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full md:col-span-2">
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
            alt="Company"
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <h2 className="font-medium">Beauty Co.</h2>
            <div className="text-sm text-gray-500">株式会社ビューティー</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsStarred(!isStarred)}
            className={`${isStarred ? 'text-yellow-400' : 'text-gray-400'} hover:text-yellow-500`}
          >
            <Star className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] ${
                message.sender === 'user'
                  ? 'bg-purple-600 text-white rounded-l-lg rounded-tr-lg'
                  : 'bg-gray-100 text-gray-900 rounded-r-lg rounded-tl-lg'
              } p-3`}
            >
              <p className="text-sm">{message.content}</p>
              <div className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-purple-100' : 'text-gray-500'
              }`}>
                {message.timestamp}
                {message.sender === 'user' && (
                  <span className="ml-2">
                    {message.read ? '既読' : '未読'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t">
        <div className="flex items-end gap-4">
          <button className="text-gray-400 hover:text-gray-600">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="メッセージを入力..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 resize-none"
              rows={1}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;