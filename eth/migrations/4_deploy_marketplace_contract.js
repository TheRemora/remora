var MarketPlaceContract = artifacts.require("SplitRevenueMarketplace");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    MarketPlaceContract,
    { from: accounts[3]});
}