import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface CompanyContactInfoStepProps {
  formData: {
    postalCode: string;
    prefecture: string;
    city: string;
    address: string;
    buildingName: string;
    phoneNumber: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const CompanyContactInfoStep: React.FC<CompanyContactInfoStepProps> = ({
  formData,
  onChange,
  onNext,
  onBack
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
          郵便番号
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            id="postalCode"
            type="text"
            required
            value={formData.postalCode}
            onChange={(e) => onChange('postalCode', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="123-4567"
          />
          <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700 mb-1">
          都道府県
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="prefecture"
          required
          value={formData.prefecture}
          onChange={(e) => onChange('prefecture', e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        >
          <option value="">選択してください</option>
          <option value="tokyo">東京都</option>
          <option value="osaka">大阪府</option>
          <option value="kanagawa">神奈川県</option>
          {/* 他の都道府県をここに追加 */}
        </select>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          市区町村
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="city"
          type="text"
          required
          value={formData.city}
          onChange={(e) => onChange('city', e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          placeholder="渋谷区"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          番地
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="address"
          type="text"
          required
          value={formData.address}
          onChange={(e) => onChange('address', e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          placeholder="道玄坂1-2-3"
        />
      </div>

      <div>
        <label htmlFor="buildingName" className="block text-sm font-medium text-gray-700 mb-1">
          建物名・階数
        </label>
        <input
          id="buildingName"
          type="text"
          value={formData.buildingName}
          onChange={(e) => onChange('buildingName', e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          placeholder="〇〇ビル 5階"
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
          電話番号
        </label>
        <div className="relative">
          <input
            id="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => onChange('phoneNumber', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="03-1234-5678"
          />
          <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          戻る
        </button>
        <button
          type="submit"
          className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          次へ
        </button>
      </div>
    </form>
  );
};

export default CompanyContactInfoStep;