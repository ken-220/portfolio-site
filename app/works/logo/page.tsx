"use client";

import Image from "next/image";
import useInView from "@/hooks/useInView";

export default function LogoWorksPage() {
  // 1作品目（AIXIA）用アニメーション判定
  const { ref: aixiaRef, isVisible: aixiaVisible } = useInView();

  // 2作品目（SYNAPSLINK）用アニメーション判定
  const { ref: synapsRef, isVisible: synapsVisible } = useInView();

  // 2作品目の詳細テーブル用アニメーション判定
  const { ref: detailRef, isVisible: detailVisible } = useInView();

  return (
    <main className="min-h-screen bg-[#f5f4ef] px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-[960px]">
        {/* =========================
            LOGO 01 : AIXIA
        ========================= */}

        {/* アンカー位置 */}
        <section id="logo-aixia" className="grid items-center gap-12 md:grid-cols-[240px_1fr] scroll-mt-32"></section>

        {/* 上部：テキスト左 / 画像右 */}
        <section className="grid items-center gap-12 md:grid-cols-[240px_1fr]">
          {/* 左：作品情報 */}
          <div
            ref={aixiaRef}
            className={`flex h-full flex-col justify-center transition-all duration-1000 ease-out ${aixiaVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
          >
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              WORKS / LOGO
            </p>

            <h1 className="mb-4 whitespace-nowrap text-3xl font-bold tracking-tight md:text-4xl">
              株式会社 AIXIA
            </h1>

            <p className="text-base text-slate-500">IT事業</p>
          </div>

          {/* 右：モックアップ画像 */}
          <div
            className={`flex justify-center md:justify-end transition-all duration-1000 ease-out ${aixiaVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
          >
            <div className="w-full max-w-[520px] overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/AXIA_mockup.png"
                alt="株式会社 AIXIA ロゴモックアップ"
                width={1000}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 詳細情報 01 */}
        <section className="fade-in-hero delay-2 mt-24 border-t border-[#d8d1c6]">
          <div className="grid grid-cols-1 border-b border-[#d8d1c6] py-10 md:grid-cols-[180px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作意図</h2>
            <p className="mt-4 leading-9 text-slate-700 md:mt-0">
              サービス名の「A」と「X」を掛け合わせてシンボルを作成。信頼感を伝えるために青系のカラーを使用し、
              アクセントカラーとしてオレンジを使用。オブジェクト全体を斜めに引き上げることで、AIの力でビジネスの未来を加速させる、
              といったイメージを表現しています。
            </p>
          </div>

          <div className="grid grid-cols-1 border-b border-[#d8d1c6] py-10 md:grid-cols-[180px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作期間</h2>
            <p className="mt-4 leading-9 text-slate-700 md:mt-0">2時間</p>
          </div>

          <div className="grid grid-cols-1 py-10 md:grid-cols-[180px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">使用ツール</h2>
            <p className="mt-4 leading-9 text-slate-700 md:mt-0">Adobe Illustrator</p>
          </div>
        </section>

        {/* 区切りラベル */}
        <div className="my-24 flex items-center gap-6">
          <div className="h-px flex-1 bg-[#d8d1c6]" />
          <p className="text-xs font-semibold tracking-[0.24em] text-[#b59a6a]">LOGO 02</p>
          <div className="h-px flex-1 bg-[#d8d1c6]" />
        </div>

        {/* =========================
            LOGO 02 : SYNAPSLINK
        ========================= */}

        {/* アンカー位置 */}
        <section id="logo-synapslink" className="grid items-center gap-12 md:grid-cols-[1fr_240px] scroll-mt-32"></section>

        {/* 上部：画像左 / テキスト右 */}
        <section className="grid items-center gap-12 md:grid-cols-[1fr_240px]">
          {/* 左：モックアップ画像 */}
          <div
            ref={synapsRef}
            className={`flex justify-center md:justify-start transition-all duration-1000 ease-out ${synapsVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
          >
            <div className="w-full max-w-[520px] overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/SYNAPSLINK_mockup.png"
                alt="SYNAPSLINK ロゴモックアップ"
                width={1000}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* 右：作品情報 */}
          <div
            className={`flex h-full flex-col justify-center md:items-start transition-all duration-1000 ease-out ${synapsVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
          >
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              WORKS / LOGO
            </p>

            <h1 className="mb-4 whitespace-nowrap text-3xl font-bold tracking-tight md:text-4xl">
              SYNAPSLINK
            </h1>

            <p className="text-base text-slate-500">学会・研究コミュニティ</p>
          </div>
        </section>

        {/* 詳細情報 02 */}
        <section
          ref={detailRef}
          className={`mt-20 border-t border-[#d8d1c6] transition-all duration-700 ease-out ${detailVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="grid border-b border-[#d8d1c6] py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作意図</h2>
            <p className="mt-4 leading-8 text-slate-700 md:mt-0">
              視認性と先進性を両立できるよう、シンプルで構造的な文字設計を意識しました。
              学術・研究分野にふさわしい信頼感を持たせつつ、デジタルらしいシャープさも感じられるロゴを目指しています。
            </p>
          </div>

          <div className="grid border-b border-[#d8d1c6] py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作期間</h2>
            <p className="mt-4 leading-8 text-slate-700 md:mt-0">2時間</p>
          </div>

          <div className="grid py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">使用ツール</h2>
            <p className="mt-4 leading-8 text-slate-700 md:mt-0">Adobe Illustrator</p>
          </div>
        </section>
      </div>
    </main>
  );
}
