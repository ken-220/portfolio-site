// =========================
// Client Component宣言
// ※ クリックイベントやフックを使うため必須
// =========================
"use client";

// =========================
// 必要なライブラリの読み込み
// =========================
import Link from "next/link";
import { usePathname } from "next/navigation";

// =========================
// ヘッダーコンポーネント
// =========================
export default function SiteHeader() {

  // =========================
  // 現在のURLパスを取得
  // 例: "/" や "/about"
  // =========================
  const pathname = usePathname();

  // =========================
  // ロゴクリック時の処理
  // ・トップページにいる場合 → スクロールだけする
  // ・それ以外 → 通常の遷移
  // =========================
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault(); // ページ遷移をキャンセル
      window.scrollTo({
        top: 0,
        behavior: "smooth", // なめらかスクロール
      });
    }
  };

  return (
    // =========================
    // ヘッダー全体（固定表示）
    // =========================
    <header className="sticky top-0 z-50 bg-[#f5f4ef]/80 backdrop-blur-md">

      {/* =========================
          コンテナ（中央寄せ + 横並び）
      ========================= */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 md:py-6">

        {/* =========================
            ロゴ + サイト名
            クリックでトップへ
        ========================= */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className="flex items-center gap-3 transition hover:opacity-70"
        >
          <img
            src="/icon1.png"
            alt="Portfolio logo"
            className="h-9 w-9 rounded-full border border-slate-300 md:h-10 md:w-10"
          />
          <span className="text-base font-semibold tracking-[0.18em] text-[#333] md:text-lg md:tracking-[0.22em]">
            PORTFOLIO
          </span>
        </Link>

        {/* =========================
            ナビゲーションメニュー
        ========================= */}
        <nav className="flex items-center gap-4 text-sm font-semibold tracking-[0.12em] text-[#b59a6a] md:gap-10 md:text-lg md:tracking-[0.18em]">

          {/* WORKS（トップページ内リンク） */}
          <a href="/#works" className="hover:text-slate-900">
            WORKS
          </a>

          {/* ABOUT（別ページ） */}
          <a href="/about" className="hover:text-slate-900">
            ABOUT
          </a>

          {/* CONTACT（トップページ内リンク） */}
          <a href="/#contact" className="hover:text-slate-900">
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}