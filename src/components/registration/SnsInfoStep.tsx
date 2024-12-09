import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';

interface SnsInfoStepProps {
  formData: {
    platforms: {
      instagram?: { username: string; followers: number };
      youtube?: { username: string; followers: number };
      tiktok?: { username: string; followers: number };
      twitter?: { username: string; followers: number };
    };
    categories: string[];
    description: string;
  };
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const categories = [
  'ビューティー',
  'ファッション',
  'フード',
  'テクノロジー',
  'ライフスタイル',
  'トラベル',
  'フィットネス',
  'エンタメ'
];

const SnsInfoStep: React.FC<SnsInfoStepProps> = ({ formData, onChange, onNext, onBack }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const updatePlatform = (platform: string, field: string, value: string | number) => {
    onChange('platforms', {
      ...formData.platforms,
      [platform]: {
        ...formData.platforms[platform as keyof typeof formData.platforms],
        [field]: value
      }
    });
  };

  const toggleCategory = (category: string) => {
    const newCategories = formData.categories.includes(category)
      ? formData.categories.filter(c => c !== category)
      : [...formData.categories, category];
    onChange('categories', newCategories);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* SNS Accounts */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">SNSアカウント</h3>
        <div className="space-y-4">
          {/* Instagram */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-6 h-6 text-purple-600" />
              <h4 className="font-medium">Instagram</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ユーザーネーム
                </label>
                <input
                  type="text"
                  value={formData.platforms.instagram?.username || ''}
                  onChange={(e) => updatePlatform('instagram', 'username', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="@username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  フォロワー数
                </label>
                <input
                  type="number"
                  value={formData.platforms.instagram?.followers || ''}
                  onChange={(e) => updatePlatform('instagram', 'followers', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="10000"
                />
              </div>
            </div>
          </div>

          {/* YouTube */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="w-6 h-6 text-purple-600" />
              <h4 className="font-medium">YouTube</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  チャンネル名
                </label>
                <input
                  type="text"
                  value={formData.platforms.youtube?.username || ''}
                  onChange={(e) => updatePlatform('youtube', 'username', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  登録者数
                </label>
                <input
                  type="number"
                  value={formData.platforms.youtube?.followers || ''}
                  onChange={(e) => updatePlatform('youtube', 'followers', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Twitter */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Twitter className="w-6 h-6 text-purple-600" />
              <h4 className="font-medium">Twitter</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ユーザーネーム
                </label>
                <input
                  type="text"
                  value={formData.platforms.twitter?.username || ''}
                  onChange={(e) => updatePlatform('twitter', 'username', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="@username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  フォロワー数
                </label>
                <input
                  type="number"
                  value={formData.platforms.twitter?.followers || ''}
                  onChange={(e) => updatePlatform('twitter', 'followers', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">得意ジャンル</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                formData.categories.includes(category)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">自己PR</h3>
        <textarea
          value={formData.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={4}
          placeholder="得意分野や実績、PRしたい点などを自由にご記入ください"
        />
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
          className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
        >
          次へ
        </button>
      </div>
    </form>
  );
};

export default SnsInfoStep;