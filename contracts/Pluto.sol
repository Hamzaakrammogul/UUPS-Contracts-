// SPDX-License-Identifier: MIT
pragma solidity >= 0.6.0 <0.9.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract PLUTO is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable{
    function initialize() public initializer {
        __ERC20_init("PLUTO", "PLT");
        __Ownable_init();
        _mint(msg.sender, 10000000 * 10 ** decimals());
    }
    function _authorizeUpgrade(address newImplementation) internal
    override
    onlyOwner{}
}  

contract PLUTOV2 is PLUTO{
 function version () pure public returns (string memory)
 {
    return "Version 2!";
 }
}  