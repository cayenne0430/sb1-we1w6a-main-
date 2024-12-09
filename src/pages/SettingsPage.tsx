import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import NotificationSettings from '../components/settings/NotificationSettings';
import PrivacySettings from '../components/settings/PrivacySettings';
import PaymentSettings from '../components/settings/PaymentSettings';

const SettingsPage = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      newCampaigns: true,
      messages: true,
      statusUpdates: true,
      newsletter: false
    },
    push: {
      newCampaigns: true,
      messages: true,
      statusUpdates: false
    }
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEarnings: false,
    allowMessages: true
  });

  const [showBankModal, setShowBankModal] = useState(false);

  const handleNotificationChange = (type: 'email' | 'push', setting: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [setting]: !prev[type][setting as keyof typeof prev[typeof type]]
      }
    }));
  };

  const handlePrivacyChange = (key: string, value: any) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">設定</h1>

        <NotificationSettings 
          settings={notificationSettings}
          onChange={handleNotificationChange}
        />

        <PrivacySettings 
          settings={privacySettings}
          onChange={handlePrivacyChange}
        />

        <PaymentSettings 
          onEditBankAccount={() => setShowBankModal(true)}
        />

        {/* Security Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-yellow-800">セキュリティ保護のお願い</div>
            <div className="text-sm text-yellow-700">
              アカウントの安全性を高めるため、2段階認証の設定をお勧めします。
            </div>
            <button className="mt-2 text-yellow-800 hover:text-yellow-900 text-sm font-medium">
              2段階認証を設定する →
            </button>
          </div>
        </div>

        {/* Bank Account Modal */}
        {showBankModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-xl font-semibold mb-4">振込先口座の編集</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    銀行名
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="みずほ銀行"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    支店名
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="渋谷支店"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    口座種別
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500">
                    <option>普通</option>
                    <option>当座</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    口座番号
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="1234567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    口座名義（カタカナ）
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="タナカ タロウ"
                  />
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowBankModal(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    キャンセル
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500"
                  >
                    保存
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;