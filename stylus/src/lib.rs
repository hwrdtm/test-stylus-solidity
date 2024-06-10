// Allow `cargo stylus export-abi` to generate a main function.
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

/// Use an efficient WASM allocator.
#[global_allocator]
static ALLOC: mini_alloc::MiniAlloc = mini_alloc::MiniAlloc::INIT;

use alloy_primitives::Address;
/// Import items from the SDK. The prelude contains common traits and macros.
use stylus_sdk::{alloy_primitives::*, call::Call, prelude::*};

sol_interface! {
    // Not sure how to define enum Env to work with the ContractResolver interface here,
    // so just using raw u8 for now.
    interface ContractResolver {
        function setContract(bytes32 typ, uint8 env, address addr) external;
        function getContract(bytes32 typ, uint8 env) external view returns (address);
    }
}

sol_storage! {
    #[entrypoint]
    pub struct EcOpsContract {
        address contract_resolver;
    }
}

#[external]
impl EcOpsContract {
    pub fn get_contract_resolver_typ(&mut self) -> Result<Address, Vec<u8>> {
        let contract_resolver = ContractResolver::new(self.contract_resolver.get());
        let typ = keccak256("ec_ops.hd_kdf_p256");
        let call = Call::new_in(self);
        let resolved_address = contract_resolver.get_contract(call, typ, 0)?;
        Ok(resolved_address)
    }

    pub fn set_contract_resolver(&mut self, address: Address) -> Result<(), Vec<u8>> {
        self.contract_resolver.set(address);
        Ok(())
    }
}
