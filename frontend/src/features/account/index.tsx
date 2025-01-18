'use client';

import Loader from '@/components/loader';
import { useWallet } from '@/hooks/useWallet';
import Image from 'next/image';

const Account = () => {
  const { balance, connectWallet, disconnectWallet, isConnected, isLoading, error } = useWallet();

  return (
    <div className="absolute top-0 right-0 p-4 items-end flex flex-col">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg bg-[#0377c9] hover:bg-[#1565c0] px-4 py-2.5 transition-colors text-center text-white text-sm font-medium"
        onClick={isConnected ? disconnectWallet : connectWallet}
      >
        <Image src="/brands/metamask-fox.svg" alt="MetaMask" width={24} height={24} />
        <Loader show={isLoading} size='sm' />
        {isLoading ? "" : (isConnected ? "Disconnect wallet" : "Connect with MetaMask")}
      </button>
      {balance && <p className='opacity-90 text-sm pt-1'>Balance: {Math.round((parseFloat(balance) + Number.EPSILON) * 100000) / 100000}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Account;
