import React from 'react';

interface CategoryBadgeProps {
  children: React.ReactNode;
}

const CategoryBadge = ({ children }: CategoryBadgeProps) => {
  return (
    <div className="bg-badgeGray rounded-3xl text-base py-[9px] px-[13px] inline cursor-pointer">
      {children}
    </div>
  );
};

export default CategoryBadge;
