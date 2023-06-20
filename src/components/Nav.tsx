'use client';
import React, { Fragment } from 'react';
import Sungkyu from './SungkyuLim.svg';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from '@/const';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: '블로그', href: '/', current: true },
  { name: '소개', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const Nav = () => {
  return (
    <>
      <div className="min-h-full sticky top-0 w-full z-10 bg-white">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div
                className={classNames(
                  'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8',
                  open ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href={'/'}>
                        <Sungkyu
                          fill={open ? 'white' : 'black'}
                          width="150"
                          height="80"
                        />
                      </Link>
                    </div>
                    {/* <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div> */}
                  </div>
                  <div className="hidden md:flex">
                    <div className="flex items-center space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base"
                          // className={classNames(
                          //   item.current
                          //     ? 'bg-gray-900 text-white'
                          //     : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          //   'rounded-md px-3 py-2 text-sm font-medium'
                          // )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mx-4 mt-0.5 opacity-20 font-thin">|</div>
                    <div className="flex">
                      <Link href={GITHUB_PROFILE} target="_blank">
                        <RxGithubLogo
                          size={24}
                          className="flex cursor-pointer items-center opacity-50 mr-4 hover:opacity-100"
                        />
                      </Link>
                      <Link href={LINKEDIN_PROFILE}>
                        <RxLinkedinLogo
                          size={24}
                          className="flex cursor-pointer items-center opacity-50 hover:opacity-100"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-400">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel
                className={classNames(
                  'md:hidden',
                  open ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="h-5 bg-slate-300 w-full md:hidden"></div>
      </div>
    </>
  );
};

export { Nav };
