/** @type import('hardhat/config').HardhatUserConfig */
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const RINKEYBY_RPC_URL = process.env.RINKEYBY_RPC_URL;
const PRIVATE_KEY= process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  defaultNetworks:"rinkeby",
  networks:{
    rinkeby:{
    url: RINKEYBY_RPC_URL,
    accounts: [PRIVATE_KEY]
  }
}
};
