import React from 'react';
import { Calendar, Star, TrendingUp, Clock } from 'lucide-react';

const DashboardPage = () => {
  // Mock data - replace with actual API data
  const activeCampaigns = [
    {
      id: 1,
      title: "春の新作コスメPRキャンペーン",
      company: "Beauty Co.",
      deadline: "2024-04-30",
      status: "進行中"
    },
    {
      id: 2,
      title: "プロテインドリンク新商品PR",
      company: "Fitness Lab",
      deadline: "2024-04-15",
      status: "確認待ち"
    }
  ];

  const schedule = [
    {
      date: "2024-04-10",
      title: "Beauty Co. 商品レビュー投稿",
      type: "投稿"
    },
    {
      date: "2024-04-15",
      title: "Fitness Lab ミーティング",
      type: "ミーティング"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">ダッシュボード</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Active Campaigns Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">進行中の案件</h2>
            <TrendingUp className="text-purple-600 w-5 h-5" />
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {activeCampaigns.length}
          </div>
          <p className="text-gray-600 text-sm">件の案件を実施中</p>
        </div>

        {/* Average Rating Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">平均評価</h2>
            <Star className="text-yellow-400 w-5 h-5" />
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-2">4.8</div>
          <p className="text-gray-600 text-sm">過去30日間の評価</p>
        </div>

        {/* Upcoming Deadlines Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">次回締切</h2>
            <Clock className="text-purple-600 w-5 h-5" />
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
          <p className="text-gray-600 text-sm">日以内の締切案件</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Active Campaigns List */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">対応中の案件</h2>
          <div className="space-y-4">
            {activeCampaigns.map(campaign => (
              <div key={campaign.id} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{campaign.title}</h3>
                    <p className="text-sm text-gray-600">{campaign.company}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    campaign.status === "進行中" 
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  締切: {campaign.deadline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">今月のスケジュール</h2>
          <div className="space-y-4">
            {schedule.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">{event.title}</div>
                  <div className="text-sm text-gray-600">
                    {event.date} - {event.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;