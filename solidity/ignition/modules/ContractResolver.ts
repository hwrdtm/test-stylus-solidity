import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ContractResolverModule = buildModule("ContractResolverModule", (m) => {
  const contractResolver = m.contract("ContractResolver", []);

  return { contractResolver };
});

export default ContractResolverModule;
