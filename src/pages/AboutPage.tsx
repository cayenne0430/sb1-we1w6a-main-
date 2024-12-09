import React from 'react';
import { MapPin, Mail, Phone, Globe, Users, Calendar, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">会社概要</h1>

        {/* Company Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <table className="w-full">
            <tbody className="divide-y">
              <tr>
                <th className="py-4 text-left text-gray-600 w-1/3">会社名</th>
                <td className="py-4">株式会社カイエン</td>
              </tr>
              <tr>
                <th className="py-4 text-left text-gray-600">所在地</th>
                <td className="py-4 flex items-start">
                  <MapPin className="w-5 h-5 text-purple-600 mr-2 mt-0.5" />
                  <div>
                    〒106-6290<br />
                    東京都港区麻布台1-2-1<br />
                    麻布台ヒルズ
                  </div>
                </td>
              </tr>
              <tr>
                <th className="py-4 text-left text-gray-600">設立</th>
                <td className="py-4 flex items-center">
                  <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                  2020年4月1日
                </td>
              </tr>
              <tr>
                <th className="py-4 text-left text-gray-600">代表者</th>
                <td className="py-4 flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-2" />
                  代表取締役社長 佐藤 翔一
                </td>
              </tr>
              <tr>
                <th className="py-4 text-left text-gray-600">資本金</th>
                <td className="py-4">1億円</td>
              </tr>
              <tr>
                <th className="py-4 text-left text-gray-600">事業内容</th>
                <td className="py-4">
                  <ul className="space-y-2">
                    <li>• インフルエンサーマーケティングプラットフォームの運営</li>
                    <li>• デジタルマーケティングコンサルティング</li>
                    <li>• ソーシャルメディアマーケティング支援</li>
                    <li>• コンテンツクリエイター支援事業</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="py-4 text-left text-gray-600">連絡先</th>
                <td className="py-4 space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-2" />
                    03-1234-5678
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 mr-2" />
                    info@cayenne.co.jp
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-purple-600 mr-2" />
                    https://www.cayenne.co.jp
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Company Vision */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">企業理念</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              「クリエイターの可能性を広げ、新しい価値を創造する」をミッションに掲げ、
              インフルエンサーとブランドの最適なマッチングを実現します。
            </p>
            <p>
              テクノロジーとクリエイティビティの融合により、
              より効果的なマーケティングソリューションを提供し、
              クリエイターエコノミーの発展に貢献します。
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">認証・受賞歴</h2>
          <div className="space-y-4">
            {[
              {
                year: '2023',
                title: 'プライバシーマーク取得',
                description: '個人情報保護の取り組みが認められ、プライバシーマークを取得'
              },
              {
                year: '2022',
                title: 'Forbes JAPAN スタートアップ・オブ・ザ・イヤー選出',
                description: 'インフルエンサーマーケティング分野での革新的なサービスが評価'
              },
              {
                year: '2021',
                title: '経済産業省「J-Startup」選定企業',
                description: '高い成長性と革新性を持つスタートアップとして選定'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Award className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">{item.year}</div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;