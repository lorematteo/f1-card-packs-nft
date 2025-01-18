import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.API_URL,
  network: Network.ETH_SEPOLIA,
}

export const alchemy = new Alchemy(config);