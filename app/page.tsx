"use client";

// React の state 管理
import { useState } from "react";

// スクロール位置を監視して、表示アニメーションを切り替えるカスタムフック
import useInView from "@/hooks/useInView";

// Next.js 標準の画像最適化コンポーネント
import Image from "next/image";

// Next.js の画面遷移用リンク
import Link from "next/link";

export default function Home() {
  // 各セクションの表示監視（スクロールでふわっと表示させるため）
  const { ref: portfolioRef, isVisible: portfolioVisible } = useInView();
  const { ref: logoRef, isVisible: logoVisible } = useInView();
  const { ref: bannerRef, isVisible: bannerVisible } = useInView();
  const { ref: contactRef, isVisible: contactVisible } = useInView();

  // お問い合わせフォーム用 state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-slate-900">
      {/* =========================
          Hero Section
          サイト最上部のメインビジュアル
      ========================= */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#f5f4ef] px-6">
        {/* 背景の装飾画像 */}
        <div className="fixed inset-0 flex items-center justify-center">
          <img
            src="/icon1.png"
            alt=""
            className="pointer-events-none w-[500px] max-w-[70vw] opacity-[0.2]"
          />
        </div>

        {/* ヒーローテキスト */}
        <div className="relative z-10 text-center">
          <p className="fade-in-hero mb-6 text-sm font-semibold tracking-[0.35em] text-[#b59a6a]">
            WEB DESIGNER / FRONTEND
          </p>

          <h2 className="fade-in-hero delay-1 mb-6 text-5xl font-black tracking-[0.08em] text-slate-900 md:text-7xl">
            PORTFOLIO
          </h2>

          <p className="fade-in-hero delay-2 mx-auto max-w-4xl text-base tracking-[0.25em] text-[#b59a6a] md:text-xl">
            SIMPLE, CLEAN, AND USER-FRIENDLY DESIGN.
          </p>
        </div>
      </section>

      {/* portfolio 用のアンカー位置調整 */}
      <section id="portfolio"></section>

      {/* =========================
          Website Works Section
          ポートフォリオサイト作品カード
      ========================= */}
      <section id="works" className="mx-auto max-w-6xl px-6 py-5 scroll-mt-32">
        <div className="section-box">
          {/* セクション見出し */}
          <div
            ref={portfolioRef}
            className={`mb-10 transition-all duration-500 ease-out ${portfolioVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
          >
            <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              WEBSITE
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              ポートフォリオサイト
            </h2>
          </div>

          {/* カード一覧 */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 01: Portfolio Website */}
            <div className={`card card-hover fade-in ${portfolioVisible ? "show" : ""}`}>
              {/* サムネイル画像 */}
              <div className="mb-5 h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/portfolio.png"
                  alt="ポートフォリオサイト"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* タイトル */}
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                ポートフォリオサイト
              </h3>

              {/* 説明 */}
              <p className="mb-5 text-sm leading-7 text-slate-600">
                自分のスキルや制作物をまとめたポートフォリオサイト。
                デザインから実装まで一貫して制作しました。
              </p>

              {/* 下部：技術タグ + 詳細ページリンク */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#ede7da] px-3 py-1 text-xs font-medium text-[#b59a6a]">
                    Next.js
                  </span>
                  <span className="rounded-full bg-[#ede7da] px-3 py-1 text-xs font-medium text-[#b59a6a]">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-[#ede7da] px-3 py-1 text-xs font-medium text-[#b59a6a]">
                    Tailwind CSS
                  </span>
                </div>

                <Link
                  href="/works/portfolio"
                  className="whitespace-nowrap text-sm font-medium tracking-[0.12em] text-[#b59a6a] hover:underline"
                >
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          Logo Works Section
          ロゴ制作カード一覧
      ========================= */}
      <section id="logo" className="mx-auto max-w-6xl px-6 py-5">
        <div className="section-box">
          {/* セクション見出し */}
          <div
            ref={logoRef}
            className={`mb-10 transition-all duration-500 ease-out ${logoVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
          >
            <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              LOGO
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              ロゴ制作
            </h2>
          </div>

          {/* カード一覧 */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 01: AIXIA */}
            <div className={`card card-hover fade-in delay-0 ${logoVisible ? "show" : ""}`}>
              <div className="mb-5 h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/AIXIA.png"
                  alt="作品サンプル"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                AIコンサル事業のロゴ
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#ede7da] px-3 py-1 text-xs font-medium text-[#b59a6a]">
                  Adobe Illustrator
                </span>

                <Link
                  href="/works/logo#logo-aixia"
                  className="text-sm font-medium tracking-[0.12em] text-[#b59a6a] hover:underline"
                >
                  詳しく見る →
                </Link>
              </div>
            </div>

            {/* Card 02: SYNAPSLINK */}
            <div className={`card card-hover fade-in delay-1 ${logoVisible ? "show" : ""}`}>
              <div className="mb-5 h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/SYNAPSLINK.png"
                  alt="作品サンプル"
                  width={500}
                  height={300}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                学会・研究コミュニティのロゴ
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#ede7da] px-3 py-1 text-xs font-medium text-[#b59a6a]">
                  Adobe Illustrator
                </span>
                <Link
                  href="/works/logo#logo-synapslink"
                  className="text-sm font-medium tracking-[0.12em] text-[#b59a6a] hover:underline"
                >
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* バナーセクション用アンカー位置調整 */}
      <section id="banner"></section>

      {/* =========================
          Banner Works Section
          バナー制作カード一覧
      ========================= */}
      <section id="banner" className="mx-auto max-w-6xl px-6 py-5">
        <div className="section-box">
          {/* セクション見出し */}
          <div
            ref={bannerRef}
            className={`mb-10 transition-all duration-500 ease-out ${bannerVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
          >
            <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              BANNER
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              バナー制作
            </h2>
          </div>

          {/* カード一覧 */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 01: IT企業向けバナー */}
            <div className={`card card-hover fade-in delay-0 ${bannerVisible ? "show" : ""}`}>
              <div className="mb-5 h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/banner-ai.webp"
                  alt="作品サンプル"
                  width={500}
                  height={300}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                IT企業向けのバナー
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#ede7da] px-3 py-1 text-xs font-medium text-[#b59a6a]">
                  Adobe Illustrator
                </span>
                <Link
                  href="/works/banner#banner-ai"
                  className="text-sm font-medium tracking-[0.12em] text-[#b59a6a] hover:underline whitespace-nowrap"
                >
                  詳しく見る →
                </Link>
              </div>
            </div>

            {/* Card 02: 美容・コスメ向けバナー */}
            <div className={`card card-hover fade-in delay-2 ${bannerVisible ? "show" : ""}`}>
              <div className="mb-5 h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/banner-skin.webp"
                  alt="バナーデザイン"
                  width={500}
                  height={300}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                美容・コスメのバナー
              </p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#ede7da] px-3 py-1 text-xs font-medium text-[#b59a6a]">
                    Illustrator
                  </span>
                </div>

                <Link
                  href="/works/banner#banner-02"
                  className="text-sm font-medium tracking-[0.12em] text-[#b59a6a] hover:underline"
                >
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          Contact Section
          お問い合わせフォーム
      ========================= */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-32">
        <div className="section-box" ref={contactRef}>
          {/* 見出し */}
          <div className={`mb-10 fade-in ${contactVisible ? "show" : ""}`}>
            <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              CONTACT
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              お問い合わせ
            </h2>
          </div>

          {/* フォーム本体 */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitted(true);

              // 3項目すべて入力されていない場合は送信しない
              if (!name || !email || !message) return;

              // 本送信処理は今後ここに追加する
              console.log("送信OK", { name, email, message });
            }}
            className={`fade-in delay-1 ${contactVisible ? "show" : ""}`}
          >
            <div className="space-y-8">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xl font-black tracking-[0.12em] text-slate-900 md:text-2xl"
                >
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-none border-0 bg-white px-5 py-4 text-base text-slate-900 outline-none ring-1 ring-[#e7dfcf] placeholder:text-slate-400 focus:ring-2 focus:ring-[#b59a6a]"
                />
                {isSubmitted && !name && (
                  <p className="mt-2 text-xs tracking-[0.18em] text-red-400">
                    NAMEが未入力です
                  </p>
                )}
              </div>

              {/* MAIL ADDRESS */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xl font-black tracking-[0.12em] text-slate-900 md:text-2xl"
                >
                  MAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-none border-0 bg-white px-5 py-4 text-base text-slate-900 outline-none ring-1 ring-[#e7dfcf] placeholder:text-slate-400 focus:ring-2 focus:ring-[#b59a6a]"
                />
                {isSubmitted && !email && (
                  <p className="mt-2 text-xs tracking-[0.18em] text-red-400">
                    MAILが未入力です
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xl font-black tracking-[0.12em] text-slate-900 md:text-2xl"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={8}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-none border-0 bg-white px-5 py-4 text-base text-slate-900 outline-none ring-1 ring-[#e7dfcf] placeholder:text-slate-400 focus:ring-2 focus:ring-[#b59a6a]"
                />
                {isSubmitted && !message && (
                  <p className="mt-2 text-xs tracking-[0.18em] text-red-400">
                    MESSAGEが未入力です
                  </p>
                )}
              </div>

              {/* 送信ボタン */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="inline-flex min-w-[200px] items-center justify-center bg-[#b59a6a] px-8 py-4 text-base font-semibold text-white transition hover:opacity-90"
                >
                  送信する
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
