import React, { useState } from 'react';
import { Mail, Phone, AlertCircle, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    privacyAgreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">お問い合わせ</h1>
        <p className="text-gray-600 mb-8">
          ご不明な点やご要望がございましたら、以下のフォームよりお気軽にお問い合わせください。
        </p>

        {/* Contact Information */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">お問い合わせ窓口</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-medium">カスタマーサポート</div>
                <div className="text-sm text-gray-600">平日 10:00-18:00</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-medium">メールでのお問い合わせ</div>
                <div className="text-sm text-gray-600">24時間受付</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                お問い合わせ種別
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">選択してください</option>
                <option value="service">サービスについて</option>
                <option value="account">アカウントについて</option>
                <option value="payment">お支払いについて</option>
                <option value="campaign">案件について</option>
                <option value="bug">不具合の報告</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                お問い合わせ内容
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacyAgreed"
                name="privacyAgreed"
                checked={formData.privacyAgreed}
                onChange={handleCheckboxChange}
                className="mt-1"
              />
              <label htmlFor="privacyAgreed" className="text-sm text-gray-600">
                <a href="/privacy" className="text-purple-600 hover:text-purple-500">プライバシーポリシー</a>
                に同意の上、送信します。
              </label>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center text-sm text-gray-500">
                <AlertCircle className="w-4 h-4 mr-1" />
                <span>必須項目</span>
              </div>
              <button
                type="submit"
                disabled={!formData.privacyAgreed}
                className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                送信する
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            よくあるご質問は
            <a href="/help" className="text-purple-600 hover:text-purple-500">
              ヘルプセンター
            </a>
            をご確認ください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;