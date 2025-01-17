import Wrapper from '@/components/wrapper';
import { MARKETPLACES } from '@/const/marketplaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="relative flex justify-center bg-background pb-32 pt-32" id="cta">
      <Wrapper className="w-full gap-8">
        <div className="flex w-full flex-col gap-8 rounded-3xl bg-primary p-12 lg:flex-row">
          <div className="flex w-full flex-col gap-4 lg:w-3/5">
            <h2 className="text-3xl font-bold text-black">
              Our collection is now available on multiple secondary marketplaces.
            </h2>
            <h3 className="text-lg text-black">
              Choose your preferred marketplace and start browsing our collection today!
            </h3>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:w-2/5 lg:justify-end">
            {MARKETPLACES.map((marketplace) => (
              <Link href={marketplace.url} target="_blank" key={marketplace.name}>
                <div
                  className="h-12 w-12 overflow-hidden rounded-full grayscale transition-all hover:scale-110 hover:grayscale-0"
                  title={marketplace.name}
                >
                  <Image
                    src={marketplace.image}
                    alt={marketplace.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CTA;
