require('dotenv').config();
const { ethers } = require("ethers");
const contractJSON = require("../contracts/F1CardPacks.json");

const { API_URL, PRIVATE_KEY, CONTRACT_ADDRESS, CONTRACT_ABI } = process.env;

const contractAddress = CONTRACT_ADDRESS;
const abi = contractJSON.abi;

// Alchemy provider
const provider = new ethers.providers.JsonRpcProvider(API_URL);

// Signer (your wallet)
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Contract instance
const contract = new ethers.Contract(contractAddress, abi, wallet);

async function mintNFT() {
    const packPrice = await contract.packPrice();

    try {
        const tx = await contract.buyPack({ value: packPrice, gasLimit: 200000 });
        console.log("Transaction sent:", tx.hash);
        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt.transactionHash);
    } catch (err) {
        console.error("Minting failed:", err);
    }
}

mintNFT();
