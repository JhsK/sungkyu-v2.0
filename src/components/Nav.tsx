import React from 'react';
import Icon from './common/Icon-regecy';

const Nav = () => {
  return (
    <div className="h-[72px] bg-white z-50 border-b border-navBorder sticky top-0">
      <div className="flex justify-between items-center max-w-[1350px] h-full my-0 mx-auto">
        <h1 className="m-0">개발자로 살아남기</h1>
        <div className="flex items-center space-x-5">
          <Icon name="carbon_archive" self profileUrl="/post" />
          <Icon name="carbon_user-avatar" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
