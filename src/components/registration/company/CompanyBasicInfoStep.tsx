import React from 'react';
import { Building2, User, Globe } from 'lucide-react';

interface CompanyBasicInfoStepProps {
  formData: {
    companyName: string;
    clientName: string;
    registrationNumber: string;
    ceoName: string;
    establishedDate: string;
    capital: string;
    employeeCount: string;
    industry: string;
    website: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
}

const CompanyBasicInfoStep: React.FC<CompanyBasicInfoStepProps> = ({
  formData,
  onChange,
  onNext
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
          法人名（正式名称）
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            id="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={(e) => onChange('companyName', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="株式会社〇〇"
          />
          <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">
          クライアント名（プロフィール表示名）
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            id="clientName"
            type="text"
            required
            value={formData.clientName}
            onChange={(e) => onChange('clientName', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="〇〇ブランド"
          />
          <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <p className="mt-1 text-sm text-gray-500">
          ※インフルエンサーに表示される名称です
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-1">
            法人番号
          </label>
          <input
            id="registrationNumber"
            type="text"
            value={formData.registrationNumber}
            onChange={(e) => onChange('registrationNumber', e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="1234567890123"
          />
        </div>

        <div>
          <label htmlFor="ceoName" className="block text-sm font-medium text-gray-700 mb-1">
            代表取締役氏名
          </label>
          <input
            id="ceoName"
            type="text"
            value={formData.ceoName}
            onChange={(e) => onChange('ceoName', e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="establishedDate" className="block text-sm font-medium text-gray-700 mb-1">
            設立年月日
          </label>
          <input
            id="establishedDate"
            type="date"
            value={formData.establishedDate}
            onChange={(e) => onChange('establishedDate', e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label htmlFor="capital" className="block text-sm font-medium text-gray-700 mb-1">
            資本金
          </label>
          <input
            id="capital"
            type="text"
            value={formData.capital}
            onChange={(e) => onChange('capital', e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="1000万円"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
            従業員数
          </label>
          <input
            id="employeeCount"
            type="text"
            value={formData.employeeCount}
            onChange={(e) => onChange('employeeCount', e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="100名"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
            業種
          </label>
          <select
            id="industry"
            value={formData.industry}
            onChange={(e) => onChange('industry', e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">選択してください</option>
            <option value="retail">小売業</option>
            <option value="manufacturing">製造業</option>
            <option value="service">サービス業</option>
            <option value="it">IT・通信</option>
            <option value="finance">金融・保険</option>
            <option value="real_estate">不動産</option>
            <option value="food">飲食業</option>
            <option value="entertainment">エンターテインメント</option>
            <option value="other">その他</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
          会社HP URL
        </label>
        <div className="relative">
          <input
            id="website"
            type="url"
            value={formData.website}
            onChange={(e) => onChange('website', e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="https://www.example.com"
          />
          <Globe className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          次へ
        </button>
      </div>
    </form>
  );
};

export default CompanyBasicInfoStep;