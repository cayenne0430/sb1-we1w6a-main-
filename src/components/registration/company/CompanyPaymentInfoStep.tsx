import React from 'react';
import { CreditCard, MapPin, Send, User } from 'lucide-react';

interface CompanyPaymentInfoStepProps {
  formData: {
    bankAccount: {
      bankName: string;
      branchName: string;
      accountType: string;
      accountNumber: string;
      accountHolder: string;
    };
    billingAddress: {
      postalCode: string;
      prefecture: string;
      city: string;
      address: string;
      buildingName: string;
      contactPerson: string;
    };
    platformUsagePurpose: string;
    notes: string;
  };
  onChange: (field: string, value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

const CompanyPaymentInfoStep: React.FC<CompanyPaymentInfoStepProps> = ({
  formData,
  onChange,
  onSubmit,
  onBack
}) => {
  const updateBankAccount = (field: string, value: string) => {
    onChange('bankAccount', {
      ...formData.bankAccount,
      [field]: value
    });
  };

  const updateBillingAddress = (field: string, value: string) => {
    onChange('billingAddress', {
      ...formData.billingAddress,
      [field]: value
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Bank Account Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          銀行口座情報
          <span className="text-red-500 ml-1">*</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              銀行名
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.bankAccount.bankName}
                onChange={(e) => updateBankAccount('bankName', e.target.value)}
                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              <CreditCard className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              支店名
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.bankAccount.branchName}
              onChange={(e) => updateBankAccount('branchName', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              口座種別
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              required
              value={formData.bankAccount.accountType}
              onChange={(e) => updateBankAccount('accountType', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">選択してください</option>
              <option value="ordinary">普通</option>
              <option value="current">当座</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              口座番号
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.bankAccount.accountNumber}
              onChange={(e) => updateBankAccount('accountNumber', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              口座名義（カナ）
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.bankAccount.accountHolder}
              onChange={(e) => updateBankAccount('accountHolder', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          請求書送付先情報
          <span className="text-red-500 ml-1">*</span>
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                郵便番号
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.billingAddress.postalCode}
                  onChange={(e) => updateBillingAddress('postalCode', e.target.value)}
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="123-4567"
                />
                <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                都道府県
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                required
                value={formData.billingAddress.prefecture}
                onChange={(e) => updateBillingAddress('prefecture', e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">選択してください</option>
                <option value="tokyo">東京都</option>
                <option value="osaka">大阪府</option>
                {/* 他の都道府県をここに追加 */}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              市区町村
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.billingAddress.city}
              onChange={(e) => updateBillingAddress('city', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              番地
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.billingAddress.address}
              onChange={(e) => updateBillingAddress('address', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              建物名・階数
            </label>
            <input
              type="text"
              value={formData.billingAddress.buildingName}
              onChange={(e) => updateBillingAddress('buildingName', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              担当者名
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.billingAddress.contactPerson}
                onChange={(e) => updateBillingAddress('contactPerson', e.target.value)}
                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">その他</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              プラットフォーム利用目的
            </label>
            <textarea
              value={formData.platformUsagePurpose}
              onChange={(e) => onChange('platformUsagePurpose', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              備考
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => onChange('notes', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          戻る
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
        >
          <Send className="w-4 h-4" />
          登録する
        </button>
      </div>
    </form>
  );
};

export default CompanyPaymentInfoStep;