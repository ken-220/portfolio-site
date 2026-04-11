import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// グローバルで使うフォント設定
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// サイト全体のメタ情報
export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f4ef] text-slate-900">
        {/* =========================
            共通ヘッダー
            全ページで共通表示される上部ナビゲーション
        ========================= */}
        <header className="sticky top-0 z-50 bg-[#f5f4ef]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 md:py-6">
            {/* サイトロゴ */}
            <div className="flex items-center gap-3">
              <img
                src="/icon1.png"
                alt="Portfolio logo"
                className="h-9 w-9 rounded-full border border-slate-300 md:h-10 md:w-10"
              />
              <span className="text-base font-semibold tracking-[0.18em] text-slate-900 md:text-lg md:tracking-[0.22em]">
                PORTFOLIO
              </span>
            </div>

            {/* グローバルナビゲーション */}
            <nav className="flex items-center gap-4 text-sm font-semibold tracking-[0.12em] text-[#b59a6a] md:gap-10 md:text-lg md:tracking-[0.18em]">
              <a href="/#works" className="hover:text-slate-900">
                WORKS
              </a>
              <a href="/about" className="hover:text-slate-900">
                ABOUT
              </a>
              <a href="/#contact" className="hover:text-slate-900">
                CONTACT
              </a>
            </nav>
          </div>
        </header>

        {/* 各ページの中身 */}
        {children}

        {/* =========================
            共通フッター
            全ページ共通で表示する下部情報
        ========================= */}
        <footer className="mt-auto bg-[#111] py-26">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm tracking-[0.25em] text-[#d6cbb3]">
              © TSURUKAWA KENTA 2026
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
