# Getting Started

1. Start `anvil` locally: `anvil -a 10`.
2. In the `solidity` directory, install dependencies with `yarn install`, then deploy the `ContractResolver` contract to the Arbitrum Stylus Testnet: `PRIVATE_KEY=<your-private-key-with-funds> npx hardhat --network arbitrumStylusTestnet ignition deploy ./ignition/modules/ContractResolver.ts`.
3. In the `stylus` directory, check that the Stylus contract is valid: `cargo stylus check`.
4. Deploy the Stylus contract: `cargo stylus deploy --private-key <your-private-key-with-funds>`.
5. In the `test-scripts` directory, install dependencies with `yarn install`, then run `PRIVATE_KEY=<your-private-key-with-funds> STYLUS_ADDRESS=<address-from-step-4> CONTRACT_RESOLVER_ADDRESS=<address-from-step-2> npx ts-node src/testRouter.ts`.