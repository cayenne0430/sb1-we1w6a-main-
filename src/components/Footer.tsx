import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* インフルエンサー向け */}
          <div>
            <h4 className="text-white font-semibold mb-4">インフルエンサー向け</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/campaigns" className="hover:text-white transition">
                  案件を探す
                </Link>
              </li>
              <li>
                <Link to="/guide/registration" className="hover:text-white transition">
                  登録方法
                  <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                    簡単3分
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 企業向け */}
          <div>
            <h4 className="text-white font-semibold mb-4">企業向け</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/company/post" className="hover:text-white transition">
                  案件を掲載する
                </Link>
              </li>
              <li>
                <Link to="/company/guide" className="hover:text-white transition">
                  登録方法
                </Link>
              </li>
              <li>
                <Link to="/company/pricing" className="hover:text-white transition">
                  料金
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition">
                  成功事例
                  <span className="ml-2 text-xs bg-yellow-600 text-white px-2 py-0.5 rounded-full">
                    実績多数
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 会社情報 */}
          <div>
            <h4 className="text-white font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  会社概要
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  利用規約
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  採用情報
                  <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                    積極採用中
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* サポート */}
          <div>
            <h4 className="text-white font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="hover:text-white transition">
                  ヘルプセンター
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/guide/verification" className="hover:text-white transition">
                  本人確認について
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2024 VIPキャスティング. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://twitter.com/vipcasting" className="hover:text-white transition">
                Twitter
              </a>
              <a href="https://instagram.com/vipcasting" className="hover:text-white transition">
                Instagram
              </a>
              <a href="https://www.youtube.com/vipcasting" className="hover:text-white transition">
                YouTube
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            VIPキャスティングは、インフルエンサーマーケティングの健全な発展を目指し、
            業界ガイドラインに準拠したサービス運営を行っています。
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;