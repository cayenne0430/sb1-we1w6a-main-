import React, { useState } from 'react';
import { DollarSign, TrendingUp, Calendar, Download, CreditCard, AlertCircle, ChevronDown } from 'lucide-react';

interface Transaction {
  id: string;
  campaignName: string;
  company: string;
  amount: number;
  status: 'pending' | 'completed' | 'processing';
  date: string;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    campaignName: '春の新作コスメPRキャンペーン',
    company: 'Beauty Co.',
    amount: 50000,
    status: 'completed',
    date: '2024-03-15'
  },
  {
    id: '2',
    campaignName: 'プロテインドリンク新商品PR',
    company: 'Fitness Lab',
    amount: 30000,
    status: 'pending',
    date: '2024-03-20'
  },
  {
    id: '3',
    campaignName: 'ワイヤレスイヤホンレビュー',
    company: 'Tech Gear',
    amount: 40000,
    status: 'processing',
    date: '2024-03-25'
  }
];

const EarningsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [showBankModal, setShowBankModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '入金済み';
      case 'pending':
        return '未入金';
      case 'processing':
        return '処理中';
      default:
        return status;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">今月の収益</h3>
              <DollarSign className="text-purple-600 w-5 h-5" />
            </div>
            <div className="text-3xl font-bold">¥120,000</div>
            <div className="flex items-center mt-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>先月比 +15%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">未入金の報酬</h3>
              <Calendar className="text-purple-600 w-5 h-5" />
            </div>
            <div className="text-3xl font-bold">¥70,000</div>
            <div className="text-sm text-gray-500 mt-2">
              3件の支払い待ち
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">完了した案件</h3>
              <TrendingUp className="text-purple-600 w-5 h-5" />
            </div>
            <div className="text-3xl font-bold">8件</div>
            <div className="text-sm text-gray-500 mt-2">
              今月の実績
            </div>
          </div>
        </div>

        {/* Bank Account Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">振込先口座</h2>
            <button
              onClick={() => setShowBankModal(true)}
              className="text-purple-600 hover:text-purple-500"
            >
              編集
            </button>
          </div>
          <div className="flex items-start gap-4">
            <CreditCard className="w-8 h-8 text-purple-600" />
            <div>
              <div className="font-medium">みずほ銀行</div>
              <div className="text-gray-600">渋谷支店 普通 1234567</div>
              <div className="text-gray-600">タナカ タロウ</div>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">取引履歴</h2>
              <div className="flex items-center gap-4">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="week">今週</option>
                  <option value="month">今月</option>
                  <option value="year">今年</option>
                </select>
                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-500">
                  <Download className="w-5 h-5" />
                  CSV出力
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="pb-4">案件名</th>
                    <th className="pb-4">企業名</th>
                    <th className="pb-4">金額</th>
                    <th className="pb-4">ステータス</th>
                    <th className="pb-4">日付</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {mockTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="py-4">{transaction.campaignName}</td>
                      <td className="py-4">{transaction.company}</td>
                      <td className="py-4">¥{transaction.amount.toLocaleString()}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(transaction.status)}`}>
                          {getStatusText(transaction.status)}
                        </span>
                      </td>
                      <td className="py-4">{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tax Information Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-blue-800">確定申告について</div>
            <div className="text-sm text-blue-700">
              年間の収入が20万円を超える場合、確定申告が必要となります。
              必要な書類は「収益管理」ページからダウンロードできます。
            </div>
            <button className="mt-2 text-blue-800 hover:text-blue-900 text-sm font-medium">
              詳しく見る →
            </button>
          </div>
        </div>
      </div>

      {/* Bank Account Modal */}
      {showBankModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
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
  );
};

export default EarningsPage;