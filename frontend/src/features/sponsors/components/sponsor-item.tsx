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
      className="relative h-6 w-24 opacity-50 hover:opacity-100 md:h-8 md:w-32 lg:h-12 lg:w-48"
    >
      <Image src={img} alt="Sponsor Logo" fill />
    </a>
  );
};

export default SponsorItem;
