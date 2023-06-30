'use client';
import useScrollToc from '@/app/post/[category]/[id]/hooks/useScrollToc';
import React, { useEffect, useState } from 'react';

type ParseHeaders = {
  text: string | null;
  id: string;
  depth: number;
};

const Toc = () => {
  const [headers, setHeaders] = useState<ParseHeaders[]>([
    {
      text: '',
      id: '',
      depth: 0,
    },
  ]);
  const activeId = useScrollToc({
    ids: headers?.map((header) => header.id),
    options: { rootMargin: '0% 0% -25% 0%' },
  });

  useEffect(() => {
    const parseHeaders = Array.from(document.querySelectorAll('h2, h3')).map(
      (ele) => {
        return {
          text: ele.textContent,
          id: ele.id,
          depth: Number(ele.tagName.substring(1)),
        };
      }
    );
    setHeaders(parseHeaders);
  }, []);

  return (
    <ul className="fixed top-1/4 right-40 border-l border-slate-300 pl-4 hidden xl:block">
      {headers?.map((header) => (
        <li key={header.id} className={`ml-${(header.depth - 2) * 4}  pb-1`}>
          <a
            className={` ${
              activeId === header?.id ? 'font-bold' : 'opacity-50'
            }`}
            href={`#${header.id}`}
          >
            {header.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Toc;
