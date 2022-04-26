import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Form() {
  const router = useRouter();
  // 初回表示か否かを判定するステートを定義しておく
  const [isFirst, setIsFirst] = useState(true);

  // フォーム回答後はリダイレクトさせる
  const redirect = () => {
    // 初回表示時はリダイレクトさせない
    if (isFirst) {
      setIsFirst(false);
      return;
    }

    router.push({
      // リダイレクト先のページ
      pathname: `/`,
    });
  };

  return (
    // onLoadイベントを設定
    <div onLoad={redirect}>
      <iframe
        title="apply"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdw0h2DzaimN6AGeH7PclWqVj6XZepmEfGpC8Ku_xxlmS7dBA/viewform?usp=sf_link" // 対象のGoogleフォームURL
        width="640"
        height="1800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        読み込んでいます…
      </iframe>
    </div>
  );
}