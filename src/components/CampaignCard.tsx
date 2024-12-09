import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Crown } from 'lucide-react';

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
  isVip?: boolean;
}

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition group">
      <div className="relative h-48">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
            {campaign.platform}
          </span>
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
            {campaign.genre}
          </span>
        </div>
        {campaign.isVip && (
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
              <Crown className="w-4 h-4" />
              VIP
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{campaign.company}</div>
        <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors">
          {campaign.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            必要フォロワー数: {campaign.followers}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            応募締切: {campaign.deadline}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-purple-600 font-semibold">{campaign.budget}</div>
          <Link
            to={`/campaigns/${campaign.id}`}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition text-sm"
          >
            詳細を見る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;