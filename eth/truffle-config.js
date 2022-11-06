const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
const QUICKNODE_PROVIDER = "https://thrilling-smart-star.ethereum-goerli.discover.quiknode.pro/8a50027d11462efbcfeb46b5b9be15e4d6f33dad/"
const ganachePrivateKeys = ["faadff48ebae3445f44bd55e9d6d90a1588165ce1226cb9aecb4c39962692f43"]


module.exports = {
  networks: {
    goerli: {
        provider: () => new HDWalletProvider(privateKey, QUICKNODE_PROVIDER),
        network_id: 5,
        confirmations: 1,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    test: {
        provider: () => new HDWalletProvider(ganachePrivateKeys, "http://127.0.0.1:8545"),
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