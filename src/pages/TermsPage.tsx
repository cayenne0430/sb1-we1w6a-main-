import React from 'react';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-8">利用規約</h1>
        
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第1条（総則）</h2>
            <p className="mb-4">
              この利用規約（以下「本規約」といいます）は、株式会社カイエン（以下「当社」といいます）が提供するインフルエンサーマッチングプラットフォーム「VIPキャスティング」（以下「本サービス」といいます）の利用に関する条件を、本サービスを利用するお客様（以下「ユーザー」といいます）と当社との間で定めるものです。
            </p>
            <p className="mb-4">
              ユーザーは、本規約に同意の上、本サービスを利用するものとします。ユーザーが本サービスを利用した場合、本規約に同意したものとみなされます。
            </p>
            <p>
              当社は、必要に応じて、本規約を変更することができます。変更後の本規約は、当社ウェブサイト上に掲載された時点から効力を生じるものとし、ユーザーは、変更後の本規約に同意の上、本サービスを利用するものとします。当社は、重要な変更を行う場合には、事前にユーザーに告知するよう努めるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第2条（定義）</h2>
            <p className="mb-4">本規約において使用する用語の定義は、以下のとおりとします。</p>
            <ul className="list-disc pl-6">
              <li className="mb-2">「ユーザー」とは、本サービスを利用するすべての者をいいます。</li>
              <li className="mb-2">「企業ユーザー」とは、本サービスを利用してインフルエンサーに商品やサービスのPRを依頼する者をいいます。</li>
              <li className="mb-2">「インフルエンサーユーザー」とは、本サービスを利用して企業から商品やサービスのPRを受託する者をいいます。</li>
              <li className="mb-2">「案件」とは、企業ユーザーがインフルエンサーユーザーに対して依頼するPR業務をいいます。</li>
              <li className="mb-2">「コンテンツ」とは、ユーザーが本サービスに投稿または掲載する文章、画像、動画、音声その他の情報をいいます。</li>
              <li>「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）をいいます。</li>
            </ul>
          </section>

          {/* 以下、各条項を同様の形式で続ける */}
          {/* 第3条から第19条まで */}
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第19条（協議解決）</h2>
            <p>
              当社及びユーザーは、本規約に定めのない事項又は本規約の解釈に疑義が生じた場合には、互いに信義誠実の原則に従って協議の上速やかに解決を図るものとします。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;