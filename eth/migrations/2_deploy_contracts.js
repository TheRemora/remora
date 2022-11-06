var contract = artifacts.require("ERC1155_Token");

module.exports = function(deployer){
  deployer.deploy(contract);
}