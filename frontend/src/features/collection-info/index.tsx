import Button from '@/components/button';
import Wrapper from '@/components/wrapper';
import Image from 'next/image';
import React from 'react';

const CollectionInfo: React.FC = () => {
  return (
    <div className="relative flex justify-center bg-background pt-32" id="collection">
      <Image
        src="/details/detail1.png"
        alt="Detail 1"
        className="absolute right-32 top-0 z-10 h-auto opacity-25"
        width={150}
        height={150}
      />
      <Image
        src="/details/detail2.png"
        alt="Detail 2"
        className="absolute bottom-0 left-2 z-10 h-auto opacity-25 lg:left-32"
        width={150}
        height={150}
      />
      <Wrapper className="z-20 flex flex-col gap-8 lg:flex-row">
        <div className="flex w-full flex-col items-center lg:w-1/2">
          <div className="flex flex-col rounded-3xl bg-grey px-8 pt-8">
            <Image
              src="/nfts/3.svg"
              alt="NFT"
              className="rounded-3xl object-cover"
              width={350}
              height={350}
            />
            <h2 className="mt-4 text-center text-2xl font-extrabold">The Tires</h2>
            <p className="mb-4 mt-2 text-center font-mono font-semibold opacity-75">#3</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          <p className="text-center font-extrabold uppercase text-primary lg:text-left">
            About the collection
          </p>
          <h1 className="text-center text-5xl sm:text-5xl lg:text-left lg:text-6xl xl:text-6xl">
            Unique F1 Car Part NFTs
          </h1>
          <p className="text-center tracking-wide opacity-75 lg:text-left">
            Have you heard of non-fungible tokens (NFTs) ? They&apos;re like digital certificates
            that certify something to be one-of-a-kind and not interchangeable. NFTs are stored on a
            digital ledger called a blockchain and can represent all kinds of exciting digital
            assets—like our exclusive F1 car part collectibles. Best part? You can collect, sell,
            and trade these NFTs just like physical racing memorabilia. Cool, huh?
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button>Learn more</Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CollectionInfo;
