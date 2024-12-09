import React from 'react';
import { Mail, Lock, User } from 'lucide-react';

interface BasicInfoStepProps {
  formData: {
    email: string;
    password: string;
    confirmPassword: string;
    publicName: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
}

const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ formData, onChange, onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          メールアドレス
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="example@email.com"
          />
          <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <p className="mt-1 text-sm text-gray-500">
          ※ビジネスメール推奨。連絡手段として使用します
        </p>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          パスワード
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            id="password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => onChange('password', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="8文字以上の英数字"
          />
          <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          パスワード（確認）
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) => onChange('confirmPassword', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="パスワードを再入力"
          />
          <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="publicName" className="block text-sm font-medium text-gray-700 mb-1">
          公開名（活動名）
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            id="publicName"
            type="text"
            required
            value={formData.publicName}
            onChange={(e) => onChange('publicName', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="SNSでの活動名など"
          />
          <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <p className="mt-1 text-sm text-gray-500">
          ※プロフィールページやメッセージで表示される名前です
        </p>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          次へ
        </button>
      </div>
    </form>
  );
};

export default BasicInfoStep;