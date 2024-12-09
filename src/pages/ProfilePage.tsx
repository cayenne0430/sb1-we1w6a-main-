import React, { useState } from 'react';
import { Camera, Instagram, Twitter, Youtube, Facebook, Link as LinkIcon, Save, AlertCircle, TrendingUp } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

// Available categories
const CATEGORIES = [
  'ビューティー',
  'ファッション',
  'フード',
  'テクノロジー',
  'ライフスタイル',
  'トラベル',
  'フィットネス',
  'エンタメ',
  'ゲーム',
  'ペット',
  'キッズ',
  'スポーツ',
  'アウトドア',
  'インテリア',
  'マネー',
  'ビジネス',
  'DIY',
  '音楽',
  'アート',
  'その他'
] as const;

// Available social platforms
const PLATFORMS = [
  'Instagram',
  'Twitter',
  'Youtube',
  'Facebook',
  'TikTok',
  'その他'
] as const;

interface SocialLink {
  platform: string;
  username: string;
  url: string;
  followers: number;
}

interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
}

const ProfilePage = () => {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200');
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: '美容とライフスタイルに関する情報を発信しています。自然派コスメと持続可能なライフスタイルに興味があります。',
    email: user?.email || '',
    phone: '090-1234-5678',
    location: '東京都',
    address: {
      postalCode: '',
      prefecture: '',
      city: '',
      street: '',
      building: ''
    },
    categories: ['ビューティー', 'ライフスタイル', 'サステナビリティ'],
    socialLinks: [
      { platform: 'Instagram', username: '@beauty_life', url: 'https://instagram.com/beauty_life', followers: 15000 },
      { platform: 'Twitter', username: '@beauty_life', url: 'https://twitter.com/beauty_life', followers: 8000 },
      { platform: 'Youtube', username: 'Beauty Life Channel', url: 'https://youtube.com/c/beautylife', followers: 5000 }
    ] as SocialLink[],
    achievements: [
      {
        id: '1',
        title: '化粧品ブランドAのアンバサダー就任',
        date: '2024-01',
        description: '年間を通じて商品開発やプロモーションに参加'
      },
      {
        id: '2',
        title: 'ビューティーアワード2023受賞',
        date: '2023-12',
        description: 'インフルエンサー部門で優秀賞を受賞'
      }
    ] as Achievement[]
  });

  const handleSave = () => {
    // TODO: API call to save profile data
    setIsEditing(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSocialLinkChange = (index: number, field: keyof SocialLink, value: string | number) => {
    const newLinks = [...formData.socialLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setFormData({ ...formData, socialLinks: newLinks });
  };

  const addSocialLink = () => {
    setFormData({
      ...formData,
      socialLinks: [
        ...formData.socialLinks,
        { platform: 'Instagram', username: '', url: '', followers: 0 }
      ]
    });
  };

  const removeSocialLink = (index: number) => {
    const newLinks = formData.socialLinks.filter((_, i) => i !== index);
    setFormData({ ...formData, socialLinks: newLinks });
  };

  const addAchievement = () => {
    const newAchievement = {
      id: Date.now().toString(),
      title: '',
      date: '',
      description: ''
    };
    setFormData({
      ...formData,
      achievements: [...formData.achievements, newAchievement]
    });
  };

  const removeAchievement = (id: string) => {
    setFormData({
      ...formData,
      achievements: formData.achievements.filter(achievement => achievement.id !== id)
    });
  };

  const handleAchievementChange = (id: string, field: keyof Achievement, value: string) => {
    setFormData({
      ...formData,
      achievements: formData.achievements.map(achievement =>
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      )
    });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5" />;
      case 'Facebook':
        return <Facebook className="w-5 h-5" />;
      default:
        return <LinkIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="relative h-48 bg-gradient-to-r from-purple-600 to-purple-900">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer hover:bg-purple-500 transition">
                    <Camera className="w-5 h-5" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="absolute top-4 right-4">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  保存
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition"
                >
                  編集
                </button>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 px-8 pb-8">
            <div className="mb-8">
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-2xl font-bold mb-2 px-2 py-1 border border-gray-300 rounded"
                />
              ) : (
                <h1 className="text-2xl font-bold mb-2">{formData.name}</h1>
              )}
              {isEditing ? (
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                  rows={3}
                />
              ) : (
                <p className="text-gray-600">{formData.bio}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-lg font-semibold mb-4">連絡先情報</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">メールアドレス</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    ) : (
                      <div className="text-gray-800">{formData.email}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">電話番号</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    ) : (
                      <div className="text-gray-800">{formData.phone}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">活動地域</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    ) : (
                      <div className="text-gray-800">{formData.location}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Section */}
              {isEditing && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">住所（任意）</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">郵便番号</label>
                      <input
                        type="text"
                        value={formData.address.postalCode}
                        onChange={(e) => setFormData({
                          ...formData,
                          address: { ...formData.address, postalCode: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">都道府県</label>
                      <input
                        type="text"
                        value={formData.address.prefecture}
                        onChange={(e) => setFormData({
                          ...formData,
                          address: { ...formData.address, prefecture: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">市区町村</label>
                      <input
                        type="text"
                        value={formData.address.city}
                        onChange={(e) => setFormData({
                          ...formData,
                          address: { ...formData.address, city: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">番地</label>
                      <input
                        type="text"
                        value={formData.address.street}
                        onChange={(e) => setFormData({
                          ...formData,
                          address: { ...formData.address, street: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">建物名・部屋番号</label>
                      <input
                        type="text"
                        value={formData.address.building}
                        onChange={(e) => setFormData({
                          ...formData,
                          address: { ...formData.address, building: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">カテゴリー</h2>
              {isEditing ? (
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        const newCategories = formData.categories.includes(category)
                          ? formData.categories.filter(c => c !== category)
                          : [...formData.categories, category];
                        setFormData({ ...formData, categories: newCategories });
                      }}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        formData.categories.includes(category)
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {formData.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">SNSアカウント</h2>
                {isEditing && (
                  <button
                    onClick={addSocialLink}
                    className="text-purple-600 hover:text-purple-500"
                  >
                    + アカウントを追加
                  </button>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {formData.socialLinks.map((link, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    {isEditing ? (
                      <div className="space-y-3">
                        <select
                          value={link.platform}
                          onChange={(e) => handleSocialLinkChange(index, 'platform', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        >
                          {PLATFORMS.map((platform) => (
                            <option key={platform} value={platform}>
                              {platform}
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          value={link.username}
                          onChange={(e) => handleSocialLinkChange(index, 'username', e.target.value)}
                          placeholder="ユーザーネーム"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="url"
                          value={link.url}
                          onChange={(e) => handleSocialLinkChange(index, 'url', e.target.value)}
                          placeholder="URL"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="number"
                          value={link.followers}
                          onChange={(e) => handleSocialLinkChange(index, 'followers', parseInt(e.target.value))}
                          placeholder="フォロワー数"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <button
                          onClick={() => removeSocialLink(index)}
                          className="text-red-600 hover:text-red-500 text-sm"
                        >
                          削除
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-2">
                          {getSocialIcon(link.platform)}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-500"
                          >
                            {link.username}
                          </a>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          フォロワー: {link.followers.toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">実績</h2>
                {isEditing && (
                  <button
                    onClick={addAchievement}
                    className="text-purple-600 hover:text-purple-500"
                  >
                    + 実績を追加
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {formData.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="border-l-4 border-purple-600 pl-4 py-2"
                  >
                    {isEditing ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={achievement.title}
                          onChange={(e) => handleAchievementChange(achievement.id, 'title', e.target.value)}
                          placeholder="タイトル"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="text"
                          value={achievement.date}
                          onChange={(e) => handleAchievementChange(achievement.id, 'date', e.target.value)}
                          placeholder="日付 (例: 2024-01)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <textarea
                          value={achievement.description}
                          onChange={(e) => handleAchievementChange(achievement.id, 'description', e.target.value)}
                          placeholder="説明"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          rows={2}
                        />
                        <button
                          onClick={() => removeAchievement(achievement.id)}
                          className="text-red-600 hover:text-red-500 text-sm"
                        >
                          削除
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="font-medium">{achievement.title}</div>
                        <div className="text-sm text-gray-500">{achievement.date}</div>
                        <div className="text-gray-600 mt-1">
                          {achievement.description}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verification Notice */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-yellow-800">本人確認が必要です</div>
            <div className="text-sm text-yellow-700">
              より多くの案件に応募するために、本人確認書類を提出してください。
            </div>
            <button className="mt-2 text-yellow-800 hover:text-yellow-900 text-sm font-medium">
              本人確認を開始する →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;