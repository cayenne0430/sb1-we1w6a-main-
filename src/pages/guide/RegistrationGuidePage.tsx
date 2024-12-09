import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const RegistrationGuidePage = () => {
  const steps = [
    {
      title: '基本情報の入力',
      description: 'メールアドレス、パスワード、お名前など基本的な情報を入力します。',
      time: '約1分'
    },
    {
      title: 'SNSアカウントの連携',
      description: 'Instagram、Twitter、YouTubeなどのSNSアカウントを連携します。',
      time: '約1分'
    },
    {
      title: '本人確認書類のアップロード',
      description: '運転免許証、パスポート、マイナンバーカードのいずれかをアップロードします。',
      time: '約1分'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">登録方法</h1>
        
        {/* Overview */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">3ステップで簡単登録</h2>
          <div className="flex items-center gap-4 text-purple-600">
            <Clock className="w-5 h-5" />
            <span>所要時間：約3分</span>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">登録後のメリット</h2>
          <ul className="space-y-4">
            {[
              '人気ブランドの案件に応募可能',
              '報酬管理機能の利用',
              'メッセージ機能で企業と直接やり取り',
              '専属マネージャーによるサポート'
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notes */}
        <div className="bg-yellow-50 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">登録時の注意事項</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• 本人確認書類は必ず原本をご用意ください</li>
                <li>• SNSアカウントは実際に運用しているものを連携してください</li>
                <li>• 登録情報に虚偽があった場合、アカウントが停止される可能性があります</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationGuidePage;