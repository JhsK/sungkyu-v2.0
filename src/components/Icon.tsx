import Link from 'next/link';
import React, { lazy } from 'react';

interface IconProps {
  name: string;
  profileUrl: string;
}

const Icon = ({ name, profileUrl }: IconProps) => {
  const IconComponent = lazy(
    () => import(`../../public/assets/icons/${name}.svg`)
  );

  if (!IconComponent) return null;

  return (
    <Link href={profileUrl} className="cursor-pointer">
      <IconComponent />
    </Link>
  );
};

export default Icon;
