import ScrollProgress from '@/components/Post/ScrollProgress';
import React from 'react';

const DetailPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
};

export default DetailPostLayout;
