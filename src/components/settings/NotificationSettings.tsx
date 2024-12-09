import React from 'react';
import { Bell, Mail, Smartphone } from 'lucide-react';

interface NotificationSettingsProps {
  settings: {
    email: {
      newCampaigns: boolean;
      messages: boolean;
      statusUpdates: boolean;
      newsletter: boolean;
    };
    push: {
      newCampaigns: boolean;
      messages: boolean;
      statusUpdates: boolean;
    };
  };
  onChange: (type: 'email' | 'push', setting: string) => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ settings, onChange }) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-semibold">通知設定</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            メール通知
          </h3>
          <div className="space-y-4">
            {Object.entries(settings.email).map(([key, value]) => (
              <label key={key} className="flex items-center justify-between">
                <span className="text-gray-700">
                  {key === 'newCampaigns' && '新規案件の通知'}
                  {key === 'messages' && 'メッセージの通知'}
                  {key === 'statusUpdates' && 'ステータス更新の通知'}
                  {key === 'newsletter' && 'ニュースレター'}
                </span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => onChange('email', key)}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            プッシュ通知
          </h3>
          <div className="space-y-4">
            {Object.entries(settings.push).map(([key, value]) => (
              <label key={key} className="flex items-center justify-between">
                <span className="text-gray-700">
                  {key === 'newCampaigns' && '新規案件の通知'}
                  {key === 'messages' && 'メッセージの通知'}
                  {key === 'statusUpdates' && 'ステータス更新の通知'}
                </span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => onChange('push', key)}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationSettings;