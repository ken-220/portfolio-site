// =========================
// 型定義・フォント・スタイルの読み込み
// =========================
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// =========================
// 共通ヘッダー（Client Component）を読み込み
// =========================
import SiteHeader from "@/components/SiteHeader";

// =========================
// フォント設定（全ページ共通）
// =========================
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS変数として使用
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =========================
// ページメタ情報（SEO対策）
// ※ Server Componentでのみ使用可能
// =========================
export const metadata: Metadata = {
  title: "Portfolio", // ブラウザタブ・検索結果のタイトル
  description: "My Portfolio Site", // 検索結果の説明文
};

// =========================
// ルートレイアウト（全ページ共通の枠）
// =========================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // =========================
    // HTMLルート設定
    // =========================
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* =========================
          body全体の設定（背景・文字色・レイアウト）
      ========================= */}
      <body className="min-h-full flex flex-col bg-[#f5f4ef] text-slate-900">

        {/* =========================
            共通ヘッダー（全ページで表示）
        ========================= */}
        <SiteHeader />

        {/* =========================
            各ページのコンテンツがここに入る
        ========================= */}
        {children}

        {/* =========================
            共通フッター
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