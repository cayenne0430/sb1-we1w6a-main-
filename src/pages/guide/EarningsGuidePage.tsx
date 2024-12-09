import React from 'react';
import { DollarSign, Calendar, AlertCircle, FileText, TrendingUp } from 'lucide-react';

const EarningsGuidePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">報酬について</h1>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">報酬システム</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <DollarSign className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">成果報酬制</h3>
                <p className="text-gray-600">
                  案件ごとに設定された報酬額をお支払いします。
                  投稿内容や成果に応じてボーナスが追加される場合もあります。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">支払いサイクル</h3>
                <p className="text-gray-600">
                  毎月末締め、翌月15日払いです。
                  報酬は登録された銀行口座へ振り込まれます。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Process */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">報酬受け取りまでの流れ</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: '案件完了',
                description: '契約書に記載された全ての deliverables を提出'
              },
              {
                step: 2,
                title: '企業の承認',
                description: '提出された内容について企業から承認を取得'
              },
              {
                step: 3,
                title: '報酬確定',
                description: '承認後、報酬が確定し支払い待ちステータスに'
              },
              {
                step: 4,
                title: '入金',
                description: '翌月15日に登録口座へ振込'
              }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-semibold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tax Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">確定申告について</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">確定申告の必要性</h3>
                <p className="text-gray-600">
                  年間の報酬合計が20万円を超える場合、確定申告が必要となります。
                  必要な書類は「収益管理」ページからダウンロードできます。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">経費について</h3>
                <p className="text-gray-600">
                  案件に関連する交通費、機材費、消耗品費などは経費として計上できます。
                  領収書は必ず保管しておきましょう。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">重要な注意事項</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• 報酬の受け取りには本人確認が必要です</li>
                <li>• 銀行口座は本人名義のものを登録してください</li>
                <li>• 不正や規約違反があった場合、報酬の支払いを停止することがあります</li>
                <li>• 確定申告は各自の責任で行ってください</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsGuidePage;