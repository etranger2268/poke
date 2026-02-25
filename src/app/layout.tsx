import type { Metadata } from 'next';
import '@/styles/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { inter, notoSansJP } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'PokeSearch',
  description: 'お気に入りのポケモンを見つけ出す、シンプルで使いやすいポケモン図鑑アプリ。',
  icons: {
    icon: '/icon.png',
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}>
        <div className="bg-slate-50 text-gray-600">
          <div className="flex flex-col min-h-screen">
            <div className="shrink-0">
              <Header />
            </div>
            <main className="flex-1 flex flex-col">{children}</main>
            <div className="shrink-0">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
