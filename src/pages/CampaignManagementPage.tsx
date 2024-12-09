import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Calendar, DollarSign, MessageSquare, FileText, AlertCircle } from 'lucide-react';

interface Campaign {
  id: number;
  title: string;
  company: string;
  platform: string;
  status: 'draft' | 'pending' | 'ongoing' | 'completed' | 'cancelled';
  startDate: string;
  endDate: string;
  budget: string;
  deliverables: string[];
  nextDeadline?: string;
  nextTask?: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "春の新作コスメPRキャンペーン",
    company: "Beauty Co.",
    platform: "Instagram",
    status: "ongoing",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    budget: "¥50,000",
    deliverables: ["商品レビュー投稿", "ストーリーズ投稿"],
    nextDeadline: "2024-04-15",
    nextTask: "商品レビュー投稿"
  },
  {
    id: 2,
    title: "プロテインドリンク新商品PR",
    company: "Fitness Lab",
    platform: "TikTok",
    status: "completed",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    budget: "¥30,000",
    deliverables: ["商品紹介動画", "トレーニング動画"]
  },
  {
    id: 3,
    title: "ワイヤレスイヤホンレビュー",
    company: "Tech Gear",
    platform: "YouTube",
    status: "pending",
    startDate: "2024-02-01",
    endDate: "2024-02-28",
    budget: "¥40,000",
    deliverables: ["アンボックス動画", "使用レビュー動画"],
    nextDeadline: "2024-02-10",
    nextTask: "契約書の確認"
  }
];

const CampaignManagementPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'draft':
        return '下書き';
      case 'pending':
        return '確認待ち';
      case 'ongoing':
        return '対応中';
      case 'completed':
        return '完了';
      case 'cancelled':
        return 'キャンセル';
      default:
        return status;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesStatus = selectedStatus === 'all' || campaign.status === selectedStatus;
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleCampaignClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">案件管理</h1>
        <div className="flex gap-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition flex items-center gap-2">
            <FileText className="w-4 h-4" />
            レポート出力
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="案件を検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        >
          <option value="all">すべてのステータス</option>
          <option value="draft">下書き</option>
          <option value="pending">確認待ち</option>
          <option value="ongoing">対応中</option>
          <option value="completed">完了</option>
          <option value="cancelled">キャンセル</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  案件名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  企業名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  プラットフォーム
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  次回締切
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  報酬
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ステータス
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  アクション
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCampaigns.map((campaign) => (
                <tr 
                  key={campaign.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleCampaignClick(campaign)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{campaign.title}</div>
                    {campaign.nextTask && (
                      <div className="text-sm text-gray-500">
                        次のタスク: {campaign.nextTask}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {campaign.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {campaign.platform}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {campaign.nextDeadline || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {campaign.budget}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(campaign.status)}`}>
                      {getStatusText(campaign.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCampaignClick(campaign);
                      }}
                      className="text-purple-600 hover:text-purple-900"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campaign Details Modal */}
      {isDetailsModalOpen && selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedCampaign.title}</h2>
                  <p className="text-gray-600">{selectedCampaign.company}</p>
                </div>
                <button
                  onClick={() => setIsDetailsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">キャンペーン期間</div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedCampaign.startDate} 〜 {selectedCampaign.endDate}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">報酬</div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {selectedCampaign.budget}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">成果物</h3>
                <ul className="space-y-2">
                  {selectedCampaign.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  担当者にメッセージ
                </button>
                <button className="flex-1 border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  契約書を確認
                </button>
              </div>

              {selectedCampaign.status === 'ongoing' && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-yellow-800">次回の締切が近づいています</div>
                    <div className="text-sm text-yellow-700">
                      {selectedCampaign.nextTask}: {selectedCampaign.nextDeadline}まで
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignManagementPage;