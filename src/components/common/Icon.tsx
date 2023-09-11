import Link from 'next/link';
import React, { lazy } from 'react';

interface IconProps {
  name: string;
  profileUrl?: string;
  self?: boolean;
}

const Icon = ({ name, profileUrl, self }: IconProps) => {
  const IconComponent = lazy(
    () => import(`../../../public/assets/icons/${name}.svg`)
  );

  if (!IconComponent) return null;

  return (
    <Link
      href={profileUrl || '#'}
      target={self ? '_self' : '_blank'}
      className="cursor-pointer"
    >
      <IconComponent />
    </Link>
  );
};

export default Icon;
