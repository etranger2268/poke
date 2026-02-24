import { memo } from 'react';
import FaqItem from '@/components/home/Faq/FaqItem';

const FAQ_LIST = [
  {
    id: 1,
    question: '無料で利用することはできますか？',
    answer: 'はい。すべての機能を無料で利用することができます。',
  },
  {
    id: 2,
    question: '機能を追加してほしい場合は？',
    answer: 'お問い合わせフォームにご連絡ください。',
  },
  {
    id: 3,
    question: 'おすすめの機能は？',
    answer: 'ポケモンのお気に入り機能です。',
  },
  {
    id: 4,
    question: 'お気に入り機能を使うのにログインは必要ですか？',
    answer:
      'はい。お気に入りリストを保存して後で確認するには、アカウント登録とログインが必要です。',
  },
  {
    id: 5,
    question: 'データは最新のものですか？',
    answer:
      '本サイトは PokeAPI と連携しており、常に最新のポケモンデータを提供できるよう努めています。',
  },
];

const Faq = memo(() => {
  return (
    <section className="space-y-8">
      <h3 className="text-center text-2xl font-bold text-gray-900">よくある質問</h3>
      <dl className="divide-y divide-gray-400 flex flex-col mx-auto w-fit">
        {FAQ_LIST.map((list) => (
          <FaqItem key={list.id} list={list} />
        ))}
      </dl>
    </section>
  );
});

export default Faq;
