"use client";

import Image from "next/image";
import useInView from "@/hooks/useInView";

export default function BannerWorksPage() {
  // 1作品目（IT企業向け）用アニメーション判定
  const { ref: banner1Ref, isVisible: banner1Visible } = useInView();

  // 2作品目（美容・コスメ）用アニメーション判定
  const { ref: banner2Ref, isVisible: banner2Visible } = useInView();

  // 各詳細テーブル用アニメーション判定
  const { ref: detail1Ref, isVisible: detail1Visible } = useInView();
  const { ref: detail2Ref, isVisible: detail2Visible } = useInView();

  return (
    <main className="min-h-screen bg-[#f5f4ef] px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-[960px]">

        {/* =========================
    BANNER 01 : IT企業向け
========================= */}
        <section
          id="banner-ai"
          className="grid items-center gap-12 scroll-mt-32 lg:grid-cols-[320px_minmax(0,1fr)]"
        >
          {/* 左：作品情報 */}
          <div
            className={`flex h-full flex-col justify-center transition-all duration-1000 ease-out ${banner1Visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
          >
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              WORKS / BANNER
            </p>

            <h1 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-[#333]">
              IT企業向けのバナー
            </h1>

            <p className="text-base text-slate-500">
              Webバナー / 広告クリエイティブ
            </p>
          </div>

          {/* 右：モックアップ画像 */}
          <div
            ref={banner1Ref}
            className={`flex justify-center md:justify-start lg:justify-end transition-all duration-1000 ease-out ${banner1Visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
          >
            <div className="w-full max-w-[620px] overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/banner-ai.webp"
                alt="バナー制作モックアップ"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>



        {/* 詳細情報 01 */}
        <section
          ref={detail1Ref}
          className={`mt-20 border-t border-[#d8d1c6] transition-all duration-700 ease-out ${detail1Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="grid border-b border-[#d8d1c6] py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作意図</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">
              限られたスペースの中で、情報の優先順位が直感的に伝わるようレイアウトを設計しました。
              キャッチコピーを最も目立つ位置に配置し、視線が自然と左から右へ流れるように構成しています。

              配色は信頼感を与える青をベースに、先進性やインパクトを表現するために紫のグラデーションを採用しました。
              また、背景に抽象的な光やデジタル要素を取り入れることで、「AIによる業務革新」というテーマを視覚的に補強しています。

              CTA（資料請求）部分はコントラストを強めることで、ユーザーの行動を促す導線として機能するよう意識しました。
            </p>
          </div>

          <div className="grid border-b border-[#d8d1c6] py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作期間</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">2時間</p>
          </div>

          <div className="grid py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">使用ツール</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">Adobe Photoshop / Figma</p>
          </div>
        </section>

        {/* 区切りラベル */}
        <div className="my-24 flex items-center gap-6">
          <div className="h-px flex-1 bg-[#d8d1c6]" />
          <p className="text-xs font-semibold tracking-[0.24em] text-[#b59a6a]">BANNER 02</p>
          <div className="h-px flex-1 bg-[#d8d1c6]" />
        </div>

        {/* =========================
            BANNER 02 : 美容・コスメ
        ========================= */}
        <section
          id="banner-02"
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_380px] scroll-mt-32"
        >
          {/* 左：モックアップ画像 */}
          <div
            ref={banner2Ref}
            className={`flex justify-center md:justify-start transition-all duration-1000 ease-out ${banner2Visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
          >
            <div className="w-full max-w-[620px] overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/banner-skin.webp"
                alt="バナー制作02"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* 右：作品情報 */}
          <div
            className={`min-w-0 flex h-full flex-col justify-center transition-all duration-1000 ease-out ${banner2Visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
          >
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              WORKS / BANNER
            </p>

            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-[#333]">
              美容・コスメのバナー
            </h2>

            <p className="text-base text-slate-500">Webバナー / 広告クリエイティブ</p>
          </div>
        </section>

        {/* 詳細情報 02 */}
        <section
          ref={detail2Ref}
          className={`mt-20 border-t border-[#d8d1c6] transition-all duration-700 ease-out ${detail2Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="grid border-b border-[#d8d1c6] py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作意図</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">
              商品の魅力と清潔感を直感的に伝えるため、ビジュアルを主役としたレイアウトに設計しました。
              人物の表情と商品を大きく配置し、視覚的な印象だけで価値が伝わる構成を意識しています。

              配色は水や透明感を連想させるブルーを基調とし、「清潔感」「爽やかさ」を強調しました。
              また、背景に水の流れを取り入れることで、スキンケア商品の使用感や効果を視覚的に表現しています。

              テキストは最小限に抑えつつも、価格や訴求ポイントはしっかり視認できるよう配置し、短時間で理解できる広告デザインを目指しました。
            </p>
          </div>

          <div className="grid border-b border-[#d8d1c6] py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作期間</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">2時間</p>
          </div>

          <div className="grid py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">使用ツール</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">Adobe Photoshop / Figma</p>
          </div>
        </section>

        {/* 区切りラベル */}
        <div className="my-24 flex items-center gap-6">
          <div className="h-px flex-1 bg-[#d8d1c6]" />
          <p className="text-xs font-semibold tracking-[0.24em] text-[#b59a6a]">BANNER 03</p>
          <div className="h-px flex-1 bg-[#d8d1c6]" />
        </div>

        {/* =========================
    BANNER 01 : IT企業向け
========================= */}
        <section
          id="autumn-banner"
          className="grid items-center gap-12 scroll-mt-32 lg:grid-cols-[320px_minmax(0,1fr)]"
        >
          {/* 左：作品情報 */}
          <div
            className={`flex h-full flex-col justify-center transition-all duration-1000 ease-out ${banner1Visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
          >
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#b59a6a]">
              WORKS / BANNER
            </p>

            <h1 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-[#333]">
              秋旅バスツアー
            </h1>

            <p className="text-base text-slate-500">
              旅行・観光バナー
            </p>
          </div>

          {/* 右：モックアップ画像 */}
          <div
            ref={banner1Ref}
            className={`flex justify-center md:justify-start lg:justify-end transition-all duration-1000 ease-out ${banner1Visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
          >
            <div className="w-full max-w-[620px] overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/秋旅.png"
                alt="秋旅バナー"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>



        {/* 詳細情報 01 */}
        <section
          ref={detail1Ref}
          className={`mt-20 border-t border-[#d8d1c6] transition-all duration-700 ease-out ${detail1Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="grid border-b border-[#d8d1c6] py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作意図</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">
              秋の魅力を視覚的に伝えるため、紅葉の鮮やかな写真を複数組み合わせ、季節感を強調しました。
              中央に円形のレイアウトを配置することで視線を集め、情報が一目で伝わる構成にしています。
              温かみのある配色とやわらかいフォントを使用し、旅行の楽しさや安心感を感じられるデザインを意識しました。
            </p>
          </div>

          <div className="grid border-b border-[#d8d1c6] py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">制作期間</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">3時間</p>
          </div>

          <div className="grid py-10 md:grid-cols-[160px_1fr]">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-500">使用ツール</h2>
            <p className="mt-4 leading-8 text-[#333] md:mt-0">Adobe Illustrator</p>
          </div>
        </section>

      </div>
    </main >
  );
}
