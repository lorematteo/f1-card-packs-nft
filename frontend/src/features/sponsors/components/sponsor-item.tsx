import Image from 'next/image';
import React from 'react';

type SponsorItemProps = {
  img: string;
  href: string;
};

const SponsorItem: React.FC<SponsorItemProps> = ({ img, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className='opacity-50 hover:opacity-100 w-24 h-6 md:w-32 md:h-8 lg:w-48 lg:h-12 relative'
    >
      <Image
        src={img}
        alt="Sponsor Logo"
        fill
      />
    </a>
  );
};

export default SponsorItem;
