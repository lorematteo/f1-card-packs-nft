import { CircleButton } from '@/components/button';
import Wrapper from '@/components/wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CreatorInfo: React.FC = () => {
  return (
    <div className="relative flex justify-center bg-background pt-32" id="creator">
      <Image
        src="/details/detail3.png"
        alt="Detail 3"
        width={150}
        height={150}
        className="absolute -bottom-20 right-8 z-10 h-auto opacity-25 lg:right-64"
      />
      <Wrapper className="z-20 flex flex-col-reverse gap-8 lg:flex-row">
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          <p className="text-center font-extrabold uppercase text-primary lg:text-left">
            About the creator
          </p>
          <h1 className="text-center text-5xl sm:text-5xl lg:text-left lg:text-6xl xl:text-6xl">
            Lukas Moretti
          </h1>
          <p className="text-center tracking-wide opacity-75 lg:text-justify">
            Lukas Moretti is a visionary digital artist and motorsport enthusiast, merging the
            excitement of Formula 1 with the innovation of blockchain technology. His exclusive NFT
            collection of iconic F1 car parts offers collectors a unique opportunity to own a piece
            of racing history and celebrate the engineering marvels of the sport.
          </p>
          <div className="flex justify-center gap-2 lg:justify-start">
            <Link href="https://twitter.com" target="_blank">
              <CircleButton className="items-center justify-center">
                <Image src={'/socials/twitter.svg'} alt="Twitter" width={24} height={24} />
              </CircleButton>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <CircleButton className="flex items-center justify-center">
                <Image src={'/socials/instagram.svg'} alt="Instagram" width={24} height={24} />
              </CircleButton>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center lg:w-1/2">
          <Image
            src="/backgrounds/f1car2K.png"
            alt="Mia Fene"
            width={500}
            height={500}
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default CreatorInfo;
