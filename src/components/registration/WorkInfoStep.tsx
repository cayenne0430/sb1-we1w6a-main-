import React from 'react';
import { Briefcase, DollarSign, MapPin, AlertCircle, Send, Plus, X } from 'lucide-react';

interface WorkInfoStepProps {
  formData: {
    pastWorks: {
      company: string;
      description: string;
      period: string;
    }[];
    desiredFee: {
      post: number;
      video: number;
      live: number;
      event: number;
    };
    workTypes: string[];
    availableAreas: string[];
    ngList: {
      products: string[];
      companies: string[];
      others: string;
    };
  };
  onChange: (field: string, value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

const workTypeOptions = [
  '投稿作成',
  '動画制作',
  'ライブ配信',
  'イベント出演',
  'アンバサダー',
  'モデル撮影',
  'レビュー記事'
];

const areaOptions = [
  '全国対応可',
  '関東エリア',
  '関西エリア',
  '東海エリア',
  '北海道',
  '東北',
  '中国',
  '四国',
  '九州',
  'オンラインのみ'
];

const WorkInfoStep: React.FC<WorkInfoStepProps> = ({ formData, onChange, onSubmit, onBack }) => {
  const addPastWork = () => {
    onChange('pastWorks', [
      ...formData.pastWorks,
      { company: '', description: '', period: '' }
    ]);
  };

  const removePastWork = (index: number) => {
    const newPastWorks = formData.pastWorks.filter((_, i) => i !== index);
    onChange('pastWorks', newPastWorks);
  };

  const updatePastWork = (index: number, field: string, value: string) => {
    const newPastWorks = formData.pastWorks.map((work, i) => {
      if (i === index) {
        return { ...work, [field]: value };
      }
      return work;
    });
    onChange('pastWorks', newPastWorks);
  };

  const toggleWorkType = (type: string) => {
    const newTypes = formData.workTypes.includes(type)
      ? formData.workTypes.filter(t => t !== type)
      : [...formData.workTypes, type];
    onChange('workTypes', newTypes);
  };

  const toggleArea = (area: string) => {
    const newAreas = formData.availableAreas.includes(area)
      ? formData.availableAreas.filter(a => a !== area)
      : [...formData.availableAreas, area];
    onChange('availableAreas', newAreas);
  };

  const addNgItem = (type: 'products' | 'companies', value: string) => {
    if (value.trim()) {
      onChange('ngList', {
        ...formData.ngList,
        [type]: [...formData.ngList[type], value.trim()]
      });
    }
  };

  const removeNgItem = (type: 'products' | 'companies', index: number) => {
    const newList = formData.ngList[type].filter((_, i) => i !== index);
    onChange('ngList', {
      ...formData.ngList,
      [type]: newList
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Past Works */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">過去のPR実績</h3>
          <button
            type="button"
            onClick={addPastWork}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-500"
          >
            <Plus className="w-4 h-4" />
            実績を追加
          </button>
        </div>
        <div className="space-y-4">
          {formData.pastWorks.map((work, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg relative">
              <button
                type="button"
                onClick={() => removePastWork(index)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    企業名・ブランド名
                  </label>
                  <input
                    type="text"
                    value={work.company}
                    onChange={(e) => updatePastWork(index, 'company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    実施内容
                  </label>
                  <textarea
                    value={work.description}
                    onChange={(e) => updatePastWork(index, 'description', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    実施時期
                  </label>
                  <input
                    type="text"
                    value={work.period}
                    onChange={(e) => updatePastWork(index, 'period', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="2023年10月"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desired Fee */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">希望報酬単価（税抜）</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              投稿1件あたり
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.desiredFee.post}
                onChange={(e) => onChange('desiredFee', {
                  ...formData.desiredFee,
                  post: parseInt(e.target.value) || 0
                })}
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md"
                placeholder="30000"
              />
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              動画1本あたり
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.desiredFee.video}
                onChange={(e) => onChange('desiredFee', {
                  ...formData.desiredFee,
                  video: parseInt(e.target.value) || 0
                })}
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md"
                placeholder="50000"
              />
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ライブ配信1回あたり
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.desiredFee.live}
                onChange={(e) => onChange('desiredFee', {
                  ...formData.desiredFee,
                  live: parseInt(e.target.value) || 0
                })}
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md"
                placeholder="100000"
              />
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              イベント出演1回あたり
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.desiredFee.event}
                onChange={(e) => onChange('desiredFee', {
                  ...formData.desiredFee,
                  event: parseInt(e.target.value) || 0
                })}
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md"
                placeholder="150000"
              />
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Work Types */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">対応可能な案件の種類</h3>
        <div className="flex flex-wrap gap-2">
          {workTypeOptions.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => toggleWorkType(type)}
              className={`px-4 py-2 rounded-full text-sm ${
                formData.workTypes.includes(type)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Available Areas */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">活動可能エリア</h3>
        <div className="flex flex-wrap gap-2">
          {areaOptions.map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => toggleArea(area)}
              className={`px-4 py-2 rounded-full text-sm ${
                formData.availableAreas.includes(area)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      {/* NG List */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">NG設定</h3>
        <div className="space-y-4">
          {/* NG Products */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              NG商材（カンマ区切りで入力）
            </label>
            <input
              type="text"
              placeholder="例: タバコ, アダルト, ギャンブル"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addNgItem('products', (e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
            <div className="flex flex-wrap gap-2">
              {formData.ngList.products.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => removeNgItem('products', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* NG Companies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              NG企業（カンマ区切りで入力）
            </label>
            <input
              type="text"
              placeholder="例: 〇〇株式会社, △△商事"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addNgItem('companies', (e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
            <div className="flex flex-wrap gap-2">
              {formData.ngList.companies.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => removeNgItem('companies', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Other NGs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              その他のNG事項
            </label>
            <textarea
              value={formData.ngList.others}
              onChange={(e) => onChange('ngList', {
                ...formData.ngList,
                others: e.target.value
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="例: マッチング成立前の名前開示NG、深夜の撮影NG など"
            />
          </div>
        </div>
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
          className="flex items-center gap-2 px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
        >
          <Send className="w-4 h-4" />
          登録する
        </button>
      </div>
    </form>
  );
};

export default WorkInfoStep;