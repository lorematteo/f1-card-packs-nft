'use client';
import Button from '@/components/button';
import Loader from '@/components/loader';
import { useMintNFT } from '@/hooks/useMint';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

const MintButton = () => {
  const { mintNFT, minted, isLoading, error } = useMintNFT();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="flex justify-center gap-4 lg:justify-start">
      <Button onClick={mintNFT} disabled={isLoading || minted}>
        {minted ? 'Minted !' : isLoading ? 'Minting..' : 'Mint a NFT'}
      </Button>
      {minted && <Button onClick={mintNFT} className='bg-transparent border border-primary text-white'>Mint another one ?</Button>}
      <Loader show={isLoading} />
      {minted && <Fireworks autorun={{ speed: 3, duration: 3000 }} />}
    </div>
  );
};

export default MintButton;
