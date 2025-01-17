import Wrapper from '@/components/wrapper';
import { MENU } from '@/const/menu';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center bg-background bg-green-gradient">
      <Wrapper className="my-32 flex w-full flex-col-reverse justify-between gap-16 lg:flex-row lg:gap-0">
        <div className="mx-auto lg:mx-0">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()}{' '}
            <Link href="" target="_blank">
              <span className="text-primary hover:underline">F1NFTs</span>
            </Link>
            . All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {MENU.map((item, index) => (
            <Link href={item.href} key={index}>
              <p className="cursor-pointer text-center text-sm font-semibold opacity-75 transition-colors duration-200 hover:text-primary lg:text-left">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
