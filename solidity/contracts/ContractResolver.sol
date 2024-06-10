// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

contract ContractResolver {
    enum Env {
        Dev,
        Staging,
        Prod
    }
    
    mapping(bytes32 => mapping(Env => address)) public typeAddresses;

    /* ========== CONSTRUCTOR ========== */

    constructor() {}

    function getContract(bytes32 typ, Env env) public view returns (address) {
        return (typeAddresses[typ][env]);
    }

    function setContract(bytes32 typ, Env env, address addr) public {
        typeAddresses[typ][env] = addr;
    }
}