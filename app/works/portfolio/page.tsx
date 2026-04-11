"use client";

import useInView from "@/hooks/useInView";

// 各行をスクロール時にフェード表示する共通コンポーネント
function FadeRow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 gap-8 border-b border-[#d9d6cf] py-10 transition-all duration-700 ease-out md:grid-cols-[140px_1fr] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
    >
      <h2 className="text-sm font-semibold tracking-[0.12em] text-[#9cc7d8]">
        {title}
      </h2>
      <div className="leading-9 ">{children}</div>
    </div>
  );
}

export default function PortfolioPage() {
  // 上部モックアップ表示用の監視
  const { ref: heroRef, isVisible: heroVisible } = useInView();

  return (
    <main className="bg-[#f7f5f2] text-gray-800">
      {/* =========================
          上部：ポートフォリオモックアップ
      ========================= */}
      <section
        ref={heroRef}
        className={`pt-24 pb-16 transition-all duration-700 ease-out ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="mx-auto max-w-5xl px-6">
          <img
            src="/portfolio.png"
            alt="ポートフォリオサイト"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* =========================
          下部：制作情報テーブル
      ========================= */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="border-t border-[#d9d6cf]">
            <FadeRow title="ターゲット">
              <p>採用担当者の方々、また制作物を通して私の雰囲気や考え方を知りたい方を想定しています。</p>
            </FadeRow>

            <FadeRow title="課題">
              <div className="space-y-3">
                <p>自分の制作物をまとめて見せられる場所がなく、応募時に魅力を十分に伝えにくい状態でした。</p>
                <p>書類だけでは伝わりにくい人柄やデザインの方向性も、あわせて表現できる形が必要だと感じていました。</p>
              </div>
            </FadeRow>

            <FadeRow title="目的">
              <p>
                制作物・スキル・人柄をひとつのサイトに整理し、採用担当者の方が短い時間でも全体像を把握しやすいポートフォリオを作ることを目的にしました。
                作品を見る流れの中で、私自身の強みや世界観も自然に伝わる構成を目指しています。
              </p>
            </FadeRow>

            <FadeRow title="情報設計">
              <p>
                トップページでは作品カテゴリを見やすく並べ、興味を持った制作物にすぐ遷移できる導線を意識しました。
                詳細ページでは、ビジュアルを最初に見せた上で、制作意図や工夫した点を順番に読める構成にすることで、見た目だけで終わらず中身まで伝わるように整理しています。
              </p>
            </FadeRow>

            <FadeRow title="デザインプロセス">
              <p>
                全体はシンプルで落ち着いたトーンを軸にし、余白や文字組みで見やすさを整えました。
                作品を引き立てるため装飾は控えめにしつつ、モックアップやフェードインを使って単調になりすぎないよう工夫しています。
                また、トップページと詳細ページでトーンを揃え、サイト全体に統一感が出るよう意識しました。
              </p>
            </FadeRow>

            <FadeRow title="制作期間">
              <div className="space-y-2">
                <p>構成・デザイン：1週間</p>
                <p>コーディング：2週間</p>
              </div>
            </FadeRow>

            <FadeRow title="使用ツール">
              <p>Figma / Illustrator / Canva / VS Code</p>
            </FadeRow>
          </div>
        </div>
      </section>
    </main>
  );
}
