"use client";
import Button from '@/components/button';
import Loader from '@/components/loader';
import { useMintNFT } from '@/hooks/useMint';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const MintButton = () => {
  const { mintNFT, isLoading, error } = useMintNFT();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="flex justify-center lg:justify-start gap-4">
      <Button onClick={mintNFT} disabled={isLoading}>{isLoading ? "Minting.." : "Mint a NFT"}</Button>
      <Loader show={isLoading} />
    </div>
  );
};

export default MintButton;
