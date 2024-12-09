import React from 'react';
import { Lock } from 'lucide-react';

interface PrivacySettingsProps {
  settings: {
    profileVisibility: string;
    showEarnings: boolean;
    allowMessages: boolean;
  };
  onChange: (key: string, value: any) => void;
}

const PrivacySettings: React.FC<PrivacySettingsProps> = ({ settings, onChange }) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Lock className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-semibold">プライバシー設定</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block mb-2">プロフィールの公開範囲</label>
          <select
            value={settings.profileVisibility}
            onChange={(e) => onChange('profileVisibility', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="public">全体に公開</option>
            <option value="private">非公開</option>
            <option value="connections">取引のある企業のみ</option>
          </select>
        </div>

        <label className="flex items-center justify-between">
          <span className="text-gray-700">収益情報を公開する</span>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              checked={settings.showEarnings}
              onChange={() => onChange('showEarnings', !settings.showEarnings)}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>
        </label>

        <label className="flex items-center justify-between">
          <span className="text-gray-700">メッセージの受信を許可する</span>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              checked={settings.allowMessages}
              onChange={() => onChange('allowMessages', !settings.allowMessages)}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>
        </label>
      </div>
    </section>
  );
};

export default PrivacySettings;