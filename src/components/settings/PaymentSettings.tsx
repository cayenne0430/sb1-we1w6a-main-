import React from 'react';
import { CreditCard } from 'lucide-react';

interface PaymentSettingsProps {
  onEditBankAccount: () => void;
}

const PaymentSettings: React.FC<PaymentSettingsProps> = ({ onEditBankAccount }) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-semibold">支払い設定</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
          <CreditCard className="w-8 h-8 text-purple-600" />
          <div>
            <div className="font-medium">みずほ銀行</div>
            <div className="text-gray-600">渋谷支店 普通 1234567</div>
            <div className="text-gray-600">タナカ タロウ</div>
          </div>
        </div>
        <button 
          onClick={onEditBankAccount}
          className="text-purple-600 hover:text-purple-500 font-medium"
        >
          振込先を変更する
        </button>
      </div>
    </section>
  );
};

export default PaymentSettings;