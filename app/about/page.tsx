export default function About() {
  return (
    <main className="min-h-screen bg-[#f5f4ef]">
      <div className="mx-auto max-w-[760px] px-10 pt-16 pb-24">
        {/* =========================
            プロフィール見出しエリア
        ========================= */}
        <div className="grid grid-cols-1 items-start md:grid-cols-[1fr_180px]">
          {/* 名前 */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#111]">
              ツルカワ ケンタ
            </p>

            <h1 className="text-4xl font-black leading-none tracking-[0.06em] text-[#111] md:text-5xl">
              TSURUKAWA KENTA
            </h1>
          </div>

          {/* 右側の肩書き */}
          <div className="hidden items-center justify-end gap-6 pt-6 md:flex">
            <div className="h-16 w-px bg-[#b9b1a4]" />
            <p className="text-xs font-semibold tracking-[0.22em] text-[#b59a6a]">
              DESIGNER
            </p>
          </div>
        </div>

        {/* =========================
            自己紹介文
        ========================= */}
        <div className="mt-20 max-w-xl text-[15px] leading-[2.2] text-[#111]">
          <p className="mb-10">1995年、熊本県生まれ。</p>

          <p className="mb-10">
            これまで不動産営業、飲食業、療育分野など、さまざまな職種を経験してきました。
            現在はフロントエンドを中心に、Web制作・開発スキルを磨いています。
          </p>

          <p className="mb-10">
            デザインと開発の両面から価値を提供できるデザイナー兼エンジニアを目指しています。
          </p>

          <p className="mb-10">
            趣味はゲーム、漫画、アニメ、旅行、カフェ巡り、写真など、幅広い分野に興味があります。
            日常の中で得た感性やアイデアも、制作に活かしていきたいと考えています。
          </p>
        </div>

        {/* 区切り線 */}
        <div className="mt-24 border-t border-[#d8d1c6]" />

        {/* =========================
            スキル一覧
        ========================= */}
        <section className="mt-28">
          <h2 className="mb-8 text-[20px] font-semibold tracking-[0.24em] text-[#b59a6a]">
            SKILLS
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* フロントエンド */}
            <div className="card min-h-[200px]">
              <h3 className="mb-6 text-[18px] font-semibold tracking-[0.08em] text-[#111]">
                フロントエンド
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">HTML</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">CSS</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Java Script</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">React</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Next.js</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">TypeScript</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Tailwind CSS</span>
              </div>
            </div>

            {/* デザイン */}
            <div className="card min-h-[200px]">
              <h3 className="mb-6 text-[18px] font-semibold tracking-[0.08em] text-[#111]">
                デザイン
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Figma</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Wix</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">WordPress</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Adobe Illustrator</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Adobe Photoshop</span>
              </div>
            </div>

            {/* バックエンド */}
            <div className="card min-h-[200px]">
              <h3 className="mb-6 text-[18px] font-semibold tracking-[0.08em] text-[#111]">
                バックエンド
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Node.js</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Express</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">C#</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">SQL</span>
              </div>
            </div>

            {/* その他ツール */}
            <div className="card min-h-[200px]">
              <h3 className="mb-6 text-[18px] font-semibold tracking-[0.08em] text-[#111]">
                その他
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">Git</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">GitHub</span>
                <span className="rounded-full bg-[#eee3cf] px-4 py-2 text-[14px] font-medium text-[#b38f52]">VS Code</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
