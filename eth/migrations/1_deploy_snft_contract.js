var SNFTContract = artifacts.require("ERC721SNFT");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    SNFTContract, 
    'FirstCollection', 
    'SNFTC1', 
    'https://gateway.pinata.cloud/ipfs/QmdW5HdJAk49xkorTjd9ynCriDo8ygqzBXUxqNHL52qqMJ/',
    { from: accounts[0]});
}