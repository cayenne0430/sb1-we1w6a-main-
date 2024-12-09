import React from 'react';
import { Crown, Menu, LogOut, Search } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSidebarStore } from '../store/sidebarStore';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const { toggleSidebar } = useSidebarStore();
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // トップページにいる場合は、スムーズにスクロールトップへ
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // 他のページにいる場合は、トップページへ遷移
      navigate('/');
    }
  };

  return (
    <nav className="bg-gray-800 shadow-sm fixed w-full top-0 z-50 border-b border-gray-700">
      <div className="max-w-full px-4">
        <div className="flex items-center h-16">
          {/* Left Section */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="メニューを開く/閉じる"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={handleLogoClick}
              className="flex items-center text-xl font-bold text-white ml-4 hover:text-gray-200 transition-colors"
            >
              <Crown className="w-6 h-6 mr-2" />
              <span>VIPキャスティング</span>
            </button>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center ml-8">
              {isAuthenticated && (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-300 hover:text-white font-medium transition-colors mr-6"
                  >
                    ダッシュボード
                  </Link>
                  <Link 
                    to="/campaigns" 
                    className="text-gray-300 hover:text-white font-medium transition-colors mr-6"
                  >
                    案件を探す
                  </Link>
                  <Link 
                    to="/campaign-management" 
                    className="text-gray-300 hover:text-white font-medium transition-colors mr-6"
                  >
                    案件管理
                  </Link>
                  <Link 
                    to="/messages" 
                    className="text-gray-300 hover:text-white font-medium transition-colors"
                  >
                    メッセージ
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 ml-auto">
            <button 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="検索"
            >
              <Search className="w-5 h-5" />
            </button>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">ログアウト</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"
              >
                ログイン
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;