import React from 'react';
import Icon from './Icon';
import { FOOTER_ICONS } from '@/const';

const Footer = () => {
  return (
    <footer className="h-52 border-footerBorder border-t pt-8 mt-24 max-w-[1350px] mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-footerText">Copyright © 2023 Sungkyu Lim</span>
        <div className="flex items-center space-x-6">
          {FOOTER_ICONS.map((icon) => (
            <Icon name={icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
