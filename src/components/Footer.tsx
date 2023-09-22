import React from 'react';
import { PROFILE_URL } from '@/const';
import {
  GithubIcon,
  GmailIcon,
  InstargramIcon,
  LinkedinIcon,
} from './common/Icon';
import Link from 'next/link';

const Footer = () => {
  const colorAndHover = 'text-[#98A2B3] hover:text-[#474747]';
  const renderIcon = [
    {
      component: <GithubIcon className={colorAndHover} />,
      url: PROFILE_URL.github,
    },
    {
      component: <LinkedinIcon className={colorAndHover} />,
      url: PROFILE_URL.linkedIn,
    },
    {
      component: <GmailIcon className={`w-6 h-6 ${colorAndHover}`} />,
      url: PROFILE_URL.gmail,
    },
    {
      component: <InstargramIcon className={`w-6 h-6 ${colorAndHover}`} />,
      url: PROFILE_URL.instargram,
    },
  ];

  return (
    <footer className="h-52 border-footerBorder border-t pt-8 mt-24 2xl:max-w-[1350px] lg:max-w-[1050px] md:max-w-[700px] max-w-[450px] mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-footerText">Copyright © 2023 Sungkyu Lim</span>
        <div className="flex items-center space-x-6">
          {renderIcon.map((icon) => (
            <Link href={icon.url} target="_blank" className="cursor-pointer">
              {icon.component}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
