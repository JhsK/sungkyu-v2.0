import React, { lazy } from 'react';

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  const IconComponent = lazy(
    () => import(`../../public/assets/icons/${name}.svg`)
  );

  if (!IconComponent) return null;

  return (
    <div className="cursor-pointer">
      <IconComponent />
    </div>
  );
};

export default Icon;
