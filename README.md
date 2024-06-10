# Getting Started

1. Start `anvil` locally:
    - Run `anvil -a 10`.
2. In the `solidity` directory:
    - Install dependencies with `yarn install`
    - Deploy the `ContractResolver` contract to the Arbitrum Stylus Testnet: `PRIVATE_KEY=<your-private-key-with-funds> npx hardhat --network arbitrumStylusTestnet ignition deploy ./ignition/modules/ContractResolver.ts`.
3. In the `stylus` directory:
    - Check that the Stylus contract is valid: `cargo stylus check`.
    - Deploy the Stylus contract: `cargo stylus deploy --private-key <your-private-key-with-funds>`.
4. In the `test-scripts` directory:
    - Install dependencies with `yarn install`
    - Run `PRIVATE_KEY=<your-private-key-with-funds> STYLUS_ADDRESS=<address-from-step-4> CONTRACT_RESOLVER_ADDRESS=<address-from-step-2> npx ts-node src/testRouter.ts`.