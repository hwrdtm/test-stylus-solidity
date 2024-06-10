import { Hex, parseAbi } from "viem";
import { getAccount, getPublicClient, getWalletClient } from "./common";

async function main() {
  const walletClient = getWalletClient();

  // Set the contract resolver address
  const { request: setRequest } = await getPublicClient().simulateContract({
    account: getAccount(),
    address: process.env.STYLUS_ADDRESS as Hex,
    abi: parseAbi([
      "function getContractResolverTyp() external returns (address)",
      "function setContractResolver(address addr) external",
    ]),
    functionName: "setContractResolver",
    args: [process.env.CONTRACT_RESOLVER_ADDRESS as Hex],
  });
  console.log(setRequest);
  const tx = await walletClient.writeContract(setRequest);
  console.log("tx hash", tx);

  // Send a transaction to call the contract resolver via the Stylus contract.
  const resolvedAddress = await getPublicClient().readContract({
    address: process.env.STYLUS_ADDRESS as Hex,
    abi: parseAbi([
      "function getContractResolverTyp() external returns (address)",
      "function setContractResolver(address addr) external",
    ]),
    functionName: "getContractResolverTyp",
  });
  console.log("resolved address", resolvedAddress);
}

main();
