import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  UserCircle,
  MessageSquare,
  Wallet,
  Settings,
  X,
  Crown,
  Search
} from 'lucide-react';
import { useSidebarStore } from '../store/sidebarStore';
import { useAuthStore } from '../store/authStore';

const menuItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'ダッシュボード', requiresAuth: true },
  { path: '/campaigns', icon: Search, label: '案件を探す', requiresAuth: true },
  { path: '/campaign-management', icon: Briefcase, label: '案件管理', requiresAuth: true },
  { path: '/profile', icon: UserCircle, label: 'プロフィール', requiresAuth: true },
  { path: '/messages', icon: MessageSquare, label: 'メッセージ', requiresAuth: true },
  { path: '/earnings', icon: Wallet, label: '報酬管理', requiresAuth: true },
  { path: '/settings', icon: Settings, label: '設定', requiresAuth: true },
];

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { user, isAuthenticated } = useAuthStore();

  const filteredMenuItems = menuItems.filter(item => 
    !item.requiresAuth || (item.requiresAuth && isAuthenticated)
  );

  return (
    <>
      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* サイドバー */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-50 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } border-r border-gray-200`}
      >
        {/* ユーザープロフィールセクション */}
        <div className="p-4 border-b border-gray-200">
          {isAuthenticated && user ? (
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <UserCircle className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-3 text-gray-700 hover:text-purple-600"
            >
              <UserCircle className="w-6 h-6" />
              <span>ログイン</span>
            </Link>
          )}
        </div>

        {/* ナビゲーションメニュー */}
        <nav className="p-4">
          <ul className="space-y-1">
            {filteredMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-purple-50 text-purple-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={toggleSidebar}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;