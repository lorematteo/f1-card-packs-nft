"use client";
import Button from '@/components/button';
import Loader from '@/components/loader';
import { useMintNFT } from '@/hooks/useMint';

const MintButton = () => {
  const { mintNFT, isLoading, error } = useMintNFT();

  return (
    <div className="flex justify-center lg:justify-start gap-4">
      <Button onClick={mintNFT} disabled={isLoading}>{isLoading ? "Minting.." : "Mint a NFT"}</Button>
      <Loader show={isLoading} />
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MintButton;
