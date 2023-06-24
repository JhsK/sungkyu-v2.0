import React, { useEffect, useRef, useState } from 'react';

interface UseScrollTocProps {
  ids: string[];
  options: object;
}

const useScrollToc = ({ ids, options }: UseScrollTocProps) => {
  const [activeId, setActiveId] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }, options);
    });

    elements.forEach((ele) => {
      if (ele) {
        observer.current?.observe(ele);
      }
    });

    return () => observer.current?.disconnect();
  }, [ids, options]);

  return activeId;
};

export default useScrollToc;
