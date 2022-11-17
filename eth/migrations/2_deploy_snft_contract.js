var SNFTContract = artifacts.require("ERC721SNFT");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    SNFTContract, 
    'SecondCollection', 
    'SNFTC2', 'https://gateway.pinata.cloud/ipfs/QmNidT7d9S1RNeHZBemfBTv1P3AKPKrMAbC4LN2g164piz/',
    { from: accounts[1]});
}