'use client';
import { useEffect } from 'react';

type Props = {};

const Utterances: React.FC<Props> = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const anchor = document.getElementById('comments');
    if (!anchor) return;

    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', `true`);
    script.setAttribute('theme', 'github-light');

    anchor.appendChild(script);
  }, []);

  return (
    <>
      <div id="comments" className=""></div>
    </>
  );
};

export default Utterances;
