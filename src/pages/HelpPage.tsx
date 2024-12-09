import React, { useState } from 'react';
import { Search, HelpCircle, Book, MessageSquare, AlertCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: '案件への応募方法を教えてください',
    answer: '案件一覧から興味のある案件を選択し、詳細ページの「応募する」ボタンをクリックしてください。応募フォームに必要事項を入力し、送信することで応募が完了します。',
    category: '案件応募'
  },
  {
    question: '報酬の受け取り方について教えてください',
    answer: '報酬は、案件完了後に登録された銀行口座へ振り込まれます。振込は毎月末締めの翌月15日払いとなります。振込先の登録は「設定」ページから行えます。',
    category: '報酬'
  },
  {
    question: '投稿の修正や削除はできますか？',
    answer: '投稿前の確認期間中であれば修正が可能です。投稿後の修正・削除は原則としてできませんので、投稿前に内容を十分ご確認ください。',
    category: '投稿管理'
  },
  {
    question: '企業とのやり取りで気をつけることは？',
    answer: 'メッセージは必ず専用のチャット機能を使用し、個人情報のやり取りは避けてください。また、返信は48時間以内を心がけましょう。',
    category: 'コミュニケーション'
  }
];

const guidelines = [
  {
    title: '投稿ガイドライン',
    description: '投稿時の注意事項や禁止事項について',
    link: '/guidelines/posting'
  },
  {
    title: 'コミュニケーションガイドライン',
    description: '企業とのやり取りにおける注意点',
    link: '/guidelines/communication'
  },
  {
    title: '報酬受け取りガイドライン',
    description: '報酬の受け取り方や確定申告について',
    link: '/guidelines/payment'
  }
];

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const categories = ['all', '案件応募', '報酬', '投稿管理', 'コミュニケーション'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">ヘルプセンター</h1>

        {/* Search and Categories */}
        <div className="mb-8">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="質問を検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'すべて' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <a
            href="#guidelines"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
          >
            <Book className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">ガイドライン</h3>
            <p className="text-sm text-gray-600">
              利用規約やガイドラインを確認する
            </p>
          </a>

          <Link
            to="/contact"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
          >
            <MessageSquare className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">お問い合わせ</h3>
            <p className="text-sm text-gray-600">
              カスタマーサポートに相談する
            </p>
          </Link>

          <a
            href="#faq"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
          >
            <HelpCircle className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">よくある質問</h3>
            <p className="text-sm text-gray-600">
              FAQ一覧を確認する
            </p>
          </a>
        </div>

        {/* Guidelines */}
        <section id="guidelines" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">ガイドライン</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {guidelines.map((guideline) => (
              <a
                key={guideline.title}
                href={guideline.link}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-purple-600">
                      {guideline.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {guideline.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.question ? null : faq.question)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-medium">{faq.question}</span>
                  {expandedFAQ === faq.question ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedFAQ === faq.question && (
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section id="contact" className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">お問い合わせ</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-blue-800">
                  お問い合わせの前に、FAQやガイドラインをご確認ください。
                  より早く解決できる可能性があります。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">カスタマーサポート</h3>
              <p className="text-gray-600 mb-4">
                平日 10:00 - 18:00<br />
                回答までの目安: 24時間以内
              </p>
              <Link
                to="/contact"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;