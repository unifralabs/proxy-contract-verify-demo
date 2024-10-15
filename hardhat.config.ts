import * as dotenv from "dotenv";

import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import '@openzeppelin/hardhat-upgrades';

import type { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
	solidity: {
		version: "0.8.9",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	networks: {
		merlinTestnet: {
			url: process.env.RPC || "",
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
	},
	etherscan: {
		apiKey: {
			merlinTestnet: "no-need-apikey",
		},
		customChains: [
			{
				network: "merlinTestnet",
				chainId: 686868,
				urls: {
					apiURL: "https://testnet-scan.merlinchain.io/api",
					browserURL: "https://testnet-scan.merlinchain.io/",
				},
			},
		],
	},
};

export default config;
