import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button';
import Wrapper from '@/components/wrapper';

const Header = () => {
  return (
    <div
      className="min-w-screen flex min-h-screen items-center justify-center bg-background bg-circle-glow bg-cover bg-center bg-no-repeat pb-8 lg:pb-0"
      id="header"
    >
      <Wrapper className="flex w-full flex-col gap-12 lg:flex-row">
        {/* Mobile View Images */}
        <div className="relative mt-12 flex h-[450px] lg:hidden">
          <Image
            src="/nfts/2.jpg"
            width={240}
            height={320}
            alt="NFT 2"
            className="absolute left-1/4 top-24 z-20 rounded-3xl shadow-lg"
            priority={true}
          />
          <Image
            src="/nfts/1.jpg"
            width={240}
            height={320}
            alt="NFT 1"
            className="absolute right-1/4 top-0 z-10 rounded-3xl shadow-lg"
            priority={true}
          />
        </div>

        {/* Text Section */}
        <div className="relative flex w-full flex-col gap-6 lg:w-1/2">
          <p className="text-center font-extrabold text-primary lg:text-left">
            GET ON THE WHITELIST NOW
          </p>
          <h1 className="text-center text-5xl font-bold lg:text-left lg:text-7xl">
            OWN AN <span className="text-primary">NFT PIECE</span> OF RACING HISTORY
          </h1>
          <p className="text-center font-light tracking-widest lg:text-left">
            Unleash the thrill of Formula 1 with exclusive NFT cards featuring iconic F1 car parts.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="#collection">
              <Button>Mint a NFT</Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 lg:mt-auto lg:flex-row">
            <p className="text-5xl font-bold">8K+</p>
            <p className="ml-4 font-normal uppercase">Minted</p>
            <div className="mx-4 h-8 w-px bg-white opacity-25 max-lg:hidden"></div>
            <p className="text-5xl font-bold">3K+</p>
            <p className="ml-4 font-normal uppercase">Unique Holders</p>
          </div>
        </div>

        {/* Desktop View Images */}
        <div className="relative hidden h-[600px] w-full lg:flex lg:w-1/2">
          <Image
            src="/nfts/2.jpg"
            width={360}
            height={480}
            alt="NFT 2"
            className="absolute bottom-0 left-0 z-30 rounded-3xl shadow-lg"
            priority={true}
          />
          <Image
            src="/nfts/1.jpg"
            width={360}
            height={480}
            alt="NFT 1"
            className="absolute right-0 top-0 z-10 rounded-3xl shadow-lg"
            priority={true}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
