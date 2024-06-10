import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    arbitrumStylusTestnet: {
      url: "https://stylusv2.arbitrum.io/rpc",
      ...(process.env["PRIVATE_KEY"] && {
        accounts: [process.env["PRIVATE_KEY"]],
      }),
      chainId: 13331371,
    },
  },
};

export default config;
