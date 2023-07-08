import React from 'react';

interface CategoryBadgeProps {
  children: React.ReactNode;
}

const CategoryBadge = ({ children }: CategoryBadgeProps) => {
  return (
    <div className="bg-badgeGray rounded-3xl text-13 py-[9px] px-[13px] inline">
      {children}
    </div>
  );
};

export default CategoryBadge;
