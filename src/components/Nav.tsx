import React from 'react';
import { AvatarIcon, StorageIcon } from './common/Icon';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="h-[72px] bg-white z-40 border-b border-navBorder sticky top-0">
      <div className="flex justify-between items-center max-w-[1350px] h-full my-0 mx-auto">
        <Link href={'/'}>
          <h1 className="m-0">개발자로 살아남기</h1>
        </Link>
        <div className="flex items-center space-x-5">
          <Link href="/post" className="cursor-pointer">
            <StorageIcon />
          </Link>
          <AvatarIcon />
        </div>
      </div>
    </div>
  );
};

export default Nav;
