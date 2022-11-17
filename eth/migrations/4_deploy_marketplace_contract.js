var MarketPlaceContract = artifacts.require("SplitRevenueMarketPlace");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    MarketPlaceContract,
    { from: accounts[3]});
}