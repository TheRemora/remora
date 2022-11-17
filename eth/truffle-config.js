const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const QUICKNODE_PRIVATE_KEYS = [
  "8544799ac1d1f9a92d83b6c00c0247165073670a277ac9552909c212f9a39d73",
  "b236c1593b74ed87ca711b8abec0090923a60750b1ee0b4207dbdea651d7c9d9",
  "3ff7b57ca4ff40c144af9dc11af5b618c03aa9b407585b0bf557fb41628a7005",
  "b3d25544faa430eee738bf821ff177d5a38bc2309e2b11bfe434f24a5cad1c00",
];
//const QUICKNODE_PROVIDER = "https://thrilling-smart-star.ethereum-goerli.discover.quiknode.pro/8a50027d11462efbcfeb46b5b9be15e4d6f33dad/"
const QUICKNODE_PROVIDER = "https://goerli.infura.io/v3/2c46136c6a4c47c89ace2bba58cd2c23"

const GANACHE_PRIVATE_KEYS = [
  "fcef08de775186387c1552c25c96fc5df2a4b1d579b415aeb470322b50b8bb09",
  "f1710255cc6001c3fb60a3c1ece0f339eec105ae76a79b1575edb5c6efe41491",
  "ebad6aa1b81f6afc669593823150a6a0831fbb85d6d23f5942df3c005644fe0a",
  "6de5db5d43ac019f4d9d11b71629eef09de319d04d648985151e3fd4a543cc96",
  "12c8564a1f722d95e54df1318af3ee6d4409affc8821190933a9cbe228027fc5",
];
const GANACHE_PROVIDER = "http://127.0.0.1:8545";

module.exports = {
  networks: {
    goerli: {
        provider: () => new HDWalletProvider(QUICKNODE_PRIVATE_KEYS, QUICKNODE_PROVIDER),
        network_id: 5,
        confirmations: 1,
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    },
    test: {
        provider: () => new HDWalletProvider(GANACHE_PRIVATE_KEYS, GANACHE_PROVIDER),
        host: "127.0.0.1", // Localhost (default: none)
        port: 8545, // Standard Ethereum port (default: none)
        network_id: "*", // Any network (default: none)
        confirmations: 1,
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true 
    },
  },
  compilers: {             // Configure your compilers
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: 'NHRGTXADP3YY1Q1EKDNN5QVQEIDS1NNSNH'
  }
};