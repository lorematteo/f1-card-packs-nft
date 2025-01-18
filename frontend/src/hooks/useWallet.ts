"use client";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

interface WalletState {
  account: string | null;
  balance: string | null;
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useWallet = (): WalletState => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isConnected = !!account;

  // Try to load saved wallet from localStorage on page load
  useEffect(() => {
    const savedAccount = localStorage.getItem("account");
    const savedBalance = localStorage.getItem("balance");
    if (savedAccount && savedBalance) {
      setAccount(savedAccount);
      setBalance(savedBalance);
    }
  }, []);

  useEffect(() => {
    if (error) {
      setError(null);
    }
  }, [error]);

  // Connect to the user's wallet
  const connectWallet = async () => {
    setIsLoading(true);
    try {
      if (typeof window.ethereum === "undefined") {
        throw new Error("MetaMask is not installed");
      }

      const browserProvider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await browserProvider.send("eth_requestAccounts", []);
      const userSigner = await browserProvider.getSigner();

      const userBalance = await browserProvider.getBalance(accounts[0]);

      // Save account info to localStorage for persistence
      localStorage.setItem("account", accounts[0]);
      localStorage.setItem("balance", ethers.formatEther(userBalance));

      setProvider(browserProvider);
      setSigner(userSigner);
      setAccount(accounts[0]);
      setBalance(ethers.formatEther(userBalance));
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

  // Disconnect wallet (reset state and clear localStorage)
  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    setProvider(null);
    setSigner(null);
    setError(null);
    localStorage.removeItem("account");
    localStorage.removeItem("balance");
  };

  // Auto-connect if the wallet was connected before
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else {
          setAccount(accounts[0]);
          localStorage.setItem("account", accounts[0]);
        }
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  return { account, balance, provider, signer, connectWallet, disconnectWallet, isConnected, isLoading, error };
};
