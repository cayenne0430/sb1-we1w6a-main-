import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Star, Clock } from 'lucide-react';

interface Chat {
  id: string;
  name: string;
  company: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isStarred: boolean;
}

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Beauty Co.',
    company: '株式会社ビューティー',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
    lastMessage: '案件の詳細について確認させていただきたい点がございます。',
    timestamp: '14:30',
    unread: 2,
    isStarred: true
  },
  {
    id: '2',
    name: 'Fitness Lab',
    company: 'フィットネスラボ株式会社',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100',
    lastMessage: '契約書の内容を確認いたしました。',
    timestamp: '昨日',
    unread: 0,
    isStarred: false
  }
];

interface ChatListProps {
  activeChatId?: string;
}

const ChatList: React.FC<ChatListProps> = ({ activeChatId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'starred'>('all');
  const navigate = useNavigate();

  const filteredChats = mockChats
    .filter(chat => 
      (filter === 'all' || (filter === 'starred' && chat.isStarred)) &&
      (chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="border-r h-full flex flex-col">
      {/* Search and Filter */}
      <div className="p-4 border-b">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="メッセージを検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium ${
              filter === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            すべて
          </button>
          <button
            onClick={() => setFilter('starred')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium ${
              filter === 'starred'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            スター付き
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <Link
            key={chat.id}
            to={`/messages/${chat.id}`}
            className={`block p-4 border-b hover:bg-gray-50 transition ${
              chat.id === activeChatId ? 'bg-purple-50' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="truncate">
                    <div className="font-medium text-gray-900">{chat.name}</div>
                    <div className="text-sm text-gray-500">{chat.company}</div>
                  </div>
                  <div className="flex items-center">
                    {chat.isStarred && (
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    )}
                    <div className="flex flex-col items-end">
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {chat.timestamp}
                      </div>
                      {chat.unread > 0 && (
                        <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full mt-1">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatList;