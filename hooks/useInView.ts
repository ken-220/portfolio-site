"use client";

import { useEffect, useRef, useState } from "react";

// 画面内に入った要素を検知して、表示アニメーション用の真偽値を返すカスタムフック
export default function useInView() {
  // 監視対象となる要素の参照
  const ref = useRef<HTMLDivElement | null>(null);

  // 画面内に入ったかどうか
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    // IntersectionObserver で要素の表示状態を監視
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 一度でも画面内に入ったら表示状態にする
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        // 要素が10%見えたら発火
        threshold: 0.1,

        // 少し早めに反応させるための余白調整
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(target);

    // コンポーネント破棄時に監視解除
    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
}
