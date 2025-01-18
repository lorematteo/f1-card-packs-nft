import { useEffect, useState } from "react";
import { ethers } from "ethers";
import CONTRACT_ABI from "@/const/contract-abi.json";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
const abi = CONTRACT_ABI;

export const useMintNFT = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  useEffect(() => {
      if (error) {
        setError(null);
      }
    }, [error]);

  // Function to mint NFT
  const mintNFT = async () => {
    if (typeof window.ethereum === "undefined") {
      setError("Please install MetaMask or use a web3-enabled browser.");
      return;
    }

    // Create a provider from the user's MetaMask wallet
    const provider = new ethers.BrowserProvider(window.ethereum);

    // Request the user's wallet to connect (MetaMask)
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      setIsLoading(true);
      const packPrice = await contract.packPrice();

      // Send the transaction to mint the NFT
      const tx = await contract.buyPack({ value: packPrice, gasLimit: 200000 });
      console.log("Transaction sent:", tx.hash);
      setTransactionHash(tx.hash);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt.transactionHash);

      setIsLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("4001")) {
          setError("Transaction was rejected. Please review the request and approve it in your MetaMask wallet.");
        } else {
          setError(err.message);
        }
      } else {
        setError("Failed to connect wallet");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { mintNFT, isLoading, error, transactionHash };
};
