import Link from 'next/link';
import { memo } from 'react';

const HeroSection = memo(() => {
  return (
    <section className="text-center space-y-12">
      <div className="space-y-8">
        <h2 className="text-3xl text-gray-900 text-center font-bold">
          <span className="text-yellow-500">お気に入り</span>機能付き
          <span className="text-yellow-500">ポケモン</span>図鑑
        </h2>
        <div className="space-y-2 text-lg font-medium">
          <p>PokeAPIを活用したモダンなポケモン図鑑です。</p>
          <p>お気に入りのポケモンを見つけて、あなただけの特別な図鑑を作成しましょう。</p>
        </div>
      </div>
      <div>
        <Link
          href="/sign-in"
          className="bg-blue-500 text-lg text-white font-semibold py-3 px-9 rounded-full shadow-sm transition-opacity duration-300 hover:opacity-75"
        >
          Sign in
        </Link>
      </div>
    </section>
  );
});

export default HeroSection;
