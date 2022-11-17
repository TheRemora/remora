var CNFTContract = artifacts.require("ERC721CNFT");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    CNFTContract,
    "CNFT",
    "CNFT",
    "http://localhost:8080/",
    { from: accounts[2]});
}