'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Test = () => {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  return (
    <div className="relative">
      <header className="container mx-auto flex items-center justify-between">
        <img
          src="/SungkyuLim.svg"
          className="w-[150px] cursor-pointer"
          alt="logo"
        />
        <img
          src="/assets/icons/hamberger.svg"
          className="w-[32px] cursor-pointer"
          onClick={() => setIsShow(true)}
          alt="menu"
        />
      </header>
      {isShow && (
        <div className="transition duration-3000 ease-in-out">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default Test;
