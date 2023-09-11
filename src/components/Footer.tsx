import React from 'react';
import Icon from './Icon';
import { FOOTER_ICONS, PROFILE_URL } from '@/const';

const Footer = () => {
  const renderIcon = (icon: string, index: number) => {
    const profileUrlKey = Object.entries(FOOTER_ICONS)[index][0];

    return (
      <Icon name={icon} key={icon} profileUrl={PROFILE_URL[profileUrlKey]} />
    );
  };

  return (
    <footer className="h-52 border-footerBorder border-t pt-8 mt-24 max-w-[1350px] mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-footerText">Copyright © 2023 Sungkyu Lim</span>
        <div className="flex items-center space-x-6">
          {Object.values(FOOTER_ICONS).map((icon, index) =>
            renderIcon(icon, index)
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
