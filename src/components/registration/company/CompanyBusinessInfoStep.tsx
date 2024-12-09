import React from 'react';
import { User, DollarSign, Target, Users } from 'lucide-react';

interface CompanyBusinessInfoStepProps {
  formData: {
    contactPerson: {
      name: string;
      department: string;
      position: string;
      phone: string;
      email: string;
    };
    budget: {
      min: number;
      max: number;
    };
    targetGenres: string[];
    targetDemographics: {
      ageGroups: string[];
      gender: string;
      regions: string[];
    };
    pastExperience: string;
    productDescription: string;
    campaignObjectives: string[];
  };
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const genres = [
  'ビューティー',
  'ファッション',
  'フード',
  'テクノロジー',
  'ライフスタイル',
  'トラベル',
  'フィットネス',
  'エンタメ'
];

const ageGroups = [
  '10代', '20代前半', '20代後半', '30代前半', '30代後半', '40代以上'
];

const regions = [
  '全国', '関東', '関西', '東海', '北海道', '東北', '中国', '四国', '九州'
];

const objectives = [
  '認知拡大',
  '商品販売促進',
  'ブランドイメージ向上',
  'エンゲージメント獲得',
  'リード獲得',
  'サービス利用促進'
];

const CompanyBusinessInfoStep: React.FC<CompanyBusinessInfoStepProps> = ({
  formData,
  onChange,
  onNext,
  onBack
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const updateContactPerson = (field: string, value: string) => {
    onChange('contactPerson', {
      ...formData.contactPerson,
      [field]: value
    });
  };

  const updateBudget = (field: 'min' | 'max', value: number) => {
    onChange('budget', {
      ...formData.budget,
      [field]: value
    });
  };

  const toggleGenre = (genre: string) => {
    const newGenres = formData.targetGenres.includes(genre)
      ? formData.targetGenres.filter(g => g !== genre)
      : [...formData.targetGenres, genre];
    onChange('targetGenres', newGenres);
  };

  const toggleAgeGroup = (age: string) => {
    const newAgeGroups = formData.targetDemographics.ageGroups.includes(age)
      ? formData.targetDemographics.ageGroups.filter(a => a !== age)
      : [...formData.targetDemographics.ageGroups, age];
    onChange('targetDemographics', {
      ...formData.targetDemographics,
      ageGroups: newAgeGroups
    });
  };

  const toggleRegion = (region: string) => {
    const newRegions = formData.targetDemographics.regions.includes(region)
      ? formData.targetDemographics.regions.filter(r => r !== region)
      : [...formData.targetDemographics.regions, region];
    onChange('targetDemographics', {
      ...formData.targetDemographics,
      regions: newRegions
    });
  };

  const toggleObjective = (objective: string) => {
    const newObjectives = formData.campaignObjectives.includes(objective)
      ? formData.campaignObjectives.filter(o => o !== objective)
      : [...formData.campaignObjectives, objective];
    onChange('campaignObjectives', newObjectives);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Person */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">担当者情報</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              担当者名
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.contactPerson.name}
                onChange={(e) => updateContactPerson('name', e.target.value)}
                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              部署名
            </label>
            <input
              type="text"
              value={formData.contactPerson.department}
              onChange={(e) => updateContactPerson('department', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              役職
            </label>
            <input
              type="text"
              value={formData.contactPerson.position}
              onChange={(e) => updateContactPerson('position', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              電話番号
            </label>
            <input
              type="tel"
              value={formData.contactPerson.phone}
              onChange={(e) => updateContactPerson('phone', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              value={formData.contactPerson.email}
              onChange={(e) => updateContactPerson('email', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Budget */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">想定予算</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              最小予算（円）
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.budget.min}
                onChange={(e) => updateBudget('min', parseInt(e.target.value))}
                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="30000"
              />
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              最大予算（円）
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.budget.max}
                onChange={(e) => updateBudget('max', parseInt(e.target.value))}
                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="100000"
              />
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Target Demographics */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">ターゲット層</h3>
        
        {/* Age Groups */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            年齢層
          </label>
          <div className="flex flex-wrap gap-2">
            {ageGroups.map((age) => (
              <button
                key={age}
                type="button"
                onClick={() => toggleAgeGroup(age)}
                className={`px-4 py-2 rounded-full text-sm ${
                  formData.targetDemographics.ageGroups.includes(age)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            性別
          </label>
          <select
            value={formData.targetDemographics.gender}
            onChange={(e) => onChange('targetDemographics', {
              ...formData.targetDemographics,
              gender: e.target.value
            })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">指定なし</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </div>

        {/* Regions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            地域
          </label>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => toggleRegion(region)}
                className={`px-4 py-2 rounded-full text-sm ${
                  formData.targetDemographics.regions.includes(region)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Target Genres */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          希望するインフルエンサーのジャンル
        </h3>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => toggleGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm ${
                formData.targetGenres.includes(genre)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Campaign Objectives */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          キャンペーンの目的
        </h3>
        <div className="flex flex-wrap gap-2">
          {objectives.map((objective) => (
            <button
              key={objective}
              type="button"
              onClick={() => toggleObjective(objective)}
              className={`px-4 py-2 rounded-full text-sm ${
                formData.campaignObjectives.includes(objective)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {objective}
            </button>
          ))}
        </div>
      </div>

      {/* Past Experience */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          過去のインフルエンサーマーケティング実績
        </h3>
        <textarea
          value={formData.pastExperience}
          onChange={(e) => onChange('pastExperience', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          rows={4}
          placeholder="過去に実施したキャンペーンの内容や成果について記載してください"
        />
      </div>

      {/* Product Description */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          PR希望商品・サービス概要
        </h3>
        <textarea
          value={formData.productDescription}
          onChange={(e) => onChange('productDescription', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          rows={4}
          placeholder="PRしたい商品やサービスの特徴、セールスポイントなどを記載してください"
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

export default CompanyBusinessInfoStep;