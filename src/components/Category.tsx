import React from 'react';

const Category = () => {
  return (
    <div className="p-4 flex gap-4 border-solid border-b-[1px] border-gray-700 mb-4 text-neutral-400">
      <span className="cursor-pointer">전체</span>
      <span className="cursor-pointer">개발</span>
      <span className="cursor-pointer">디자인</span>
    </div>
  );
};

export { Category };
