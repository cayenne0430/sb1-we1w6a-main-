import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, DollarSign, AlertCircle, Send } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface Campaign {
  id: number;
  company: string;
  title: string;
  budget: string;
  platform: string;
  followers: string;
  deadline: string;
  image: string;
  genre: string;
  description: string;
  period: {
    start: string;
    end: string;
  };
  requirements: string[];
  cautions: string[];
}

// 本来はAPIから取得するデータ
const campaignData: Campaign = {
  id: 1,
  company: "Beauty Co.",
  title: "春の新作コスメPRキャンペーン",
  budget: "¥50,000 - ¥100,000",
  platform: "Instagram",
  followers: "5,000+",
  deadline: "2024-04-30",
  image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=500",
  genre: "ビューティー",
  description: "春の新作コスメについて、実際に使用した感想とメイク方法を紹介していただきます。ナチュラルメイクからフルメイクまで、様々なスタイルに対応可能な商品となっています。",
  period: {
    start: "2024-05-01",
    end: "2024-05-31"
  },
  requirements: [
    "フォロワー5,000人以上",
    "化粧品関連の投稿実績がある方",
    "20代～30代の女性",
    "日本在住の方"
  ],
  cautions: [
    "投稿内容は事前に確認させていただきます",
    "ステルスマーケティングは禁止です",
    "投稿後30日間は削除禁止です",
    "他社の競合商品の紹介は禁止です"
  ]
};

const CampaignDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [message, setMessage] = useState('');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleApply = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setIsApplyModalOpen(true);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call to submit application
    setIsApplyModalOpen(false);
    // Show success message or redirect
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <img
              src={campaignData.image}
              alt={campaignData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                {campaignData.platform}
              </span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                {campaignData.genre}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">{campaignData.company}</div>
            <h1 className="text-2xl font-bold mb-4">{campaignData.title}</h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="text-purple-600 font-semibold text-xl">
                {campaignData.budget}
              </div>
              <button
                onClick={handleApply}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition"
              >
                この案件に応募する
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Campaign Overview */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">案件概要</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {campaignData.description}
              </p>
            </section>

            {/* Post Period */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">投稿期間</h2>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                {campaignData.period.start} 〜 {campaignData.period.end}
              </div>
            </section>

            {/* Cautions */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">注意事項</h2>
              <ul className="space-y-2">
                {campaignData.cautions.map((caution, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    {caution}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Requirements */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">応募条件</h2>
              <ul className="space-y-2">
                {campaignData.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>

            {/* Payment */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">報酬</h2>
              <div className="flex items-center text-gray-600">
                <DollarSign className="w-5 h-5 mr-2" />
                <span className="text-lg font-semibold text-purple-600">
                  {campaignData.budget}
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <h3 className="text-xl font-bold mb-4">応募メッセージ</h3>
            <form onSubmit={handleSubmitApplication}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="案件への意気込みや、これまでの実績などをご記入ください"
                className="w-full h-40 p-3 border border-gray-300 rounded-lg mb-4 focus:ring-purple-500 focus:border-purple-500"
                required
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  応募する
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetailPage;