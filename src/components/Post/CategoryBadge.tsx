import React from 'react';

interface CategoryBadgeProps {
  children: React.ReactNode;
  active?: boolean;
  handleClick?: () => void;
}

const CategoryBadge = ({
  children,
  active,
  handleClick,
}: CategoryBadgeProps) => {
  const style = active ? 'bg-black text-white' : 'bg-badgeGray';

  return (
    <div
      onClick={handleClick}
      className={`rounded-3xl text-base py-[9px] px-[13px] inline cursor-pointer ${style}`}
    >
      {children}
    </div>
  );
};

export default CategoryBadge;
