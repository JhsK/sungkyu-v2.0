import React, { useEffect, useState } from 'react';

type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const useDevice = () => {
  const [size, setSize] = useState<BreakPoint>('xl');

  const calculateSize = (width: number) => {
    if (width >= 1400) {
      return 'xxl';
    } else if (width >= 1200 && width < 1400) {
      return 'xl';
    } else if (width >= 992 && width < 1200) {
      return 'lg';
    } else if (width >= 768 && width < 992) {
      return 'md';
    } else if (width >= 576 && width < 768) {
      return 'sm';
    } else {
      return 'xs';
    }
  };

  const handleResize = () => {
    const width = window.innerWidth;
    const newSize = calculateSize(width);
    setSize(newSize);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onresize = function () {
        handleResize();
      };
      handleResize();
    }
  }, [handleResize]);

  return size;
};
