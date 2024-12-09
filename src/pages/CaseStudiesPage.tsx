import React from 'react';
import { Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

// ... (previous imports and interfaces remain the same)

const CaseStudiesPage = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* ... (previous sections remain the same) ... */}

        {/* CTA - Only show when not authenticated */}
        {!isAuthenticated && (
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8 text-center">
            <h2 className="text-xl font-semibold mb-4">あなたも成功事例を作りませんか？</h2>
            <p className="text-gray-600 mb-6">
              VIPキャスティングでは、あなたの特性に合った案件をご紹介します。
              まずは無料会員登録から始めましょう。
            </p>
            <Link
              to="/register"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-500 transition inline-block"
            >
              無料会員登録する
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudiesPage;