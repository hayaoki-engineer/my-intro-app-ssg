import React from "react";

const Introduction: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>自己紹介</h1>
      <p>
        こんにちは！私の名前は◯◯です。現在フロントエンドエンジニアとして働いています。
      </p>
      <h2>スキル</h2>
      <ul>
        <li>JavaScript / TypeScript</li>
        <li>React</li>
        <li>CSS / Sass</li>
      </ul>
      <h2>趣味</h2>
      <p>プログラミング、読書、映画鑑賞などが好きです。</p>
    </div>
  );
};

export default Introduction;
