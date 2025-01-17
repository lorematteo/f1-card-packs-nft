import SponsorItem from './components/sponsor-item';
import Wrapper from '@/components/wrapper';
import { SPONSORS } from '@/const/sponsors';
import React from 'react';

const Sponsors = () => {
  return (
    <div className="flex justify-center bg-background" id="sponsors">
      <Wrapper className="flex w-full flex-col">
        <hr className="mb-8 border-white opacity-15" />
        <div className="mb-32 flex flex-wrap items-center justify-center gap-16 lg:justify-between">
          {SPONSORS.map((item, index) => (
            <SponsorItem key={index} {...item} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Sponsors;
