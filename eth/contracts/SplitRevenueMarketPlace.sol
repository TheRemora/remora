// SPDX-License-Identifier: MIT

pragma solidity >=0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./ERC721CNFT.sol";
import "./ERC721SNFT.sol";

contract SplitRevenueMarketplace is Ownable, ReentrancyGuard {

  // event PayoutOrderCreated(address snftContract, uint256 snftTokenId, uint256 amount);
  // event PayoutOrderFullfiled(address payee, uint256 amount);

  struct PayoutOrder {
    bool payed;
    address[] payees;
    uint256[] amounts;
  }

  mapping(address => mapping(uint256 => uint256)) private _listings;
  PayoutOrder[] private payoutOrders;

  function listings(address nftContract, uint256 tokenId, uint256 price) public { // price in wei
    ERC721CNFT targetContract = ERC721CNFT(nftContract);
    require(msg.sender == targetContract.ownerOf(tokenId), "Permission denied!");
    _listings[nftContract][tokenId] = price;
  }

  function buy(address cnftContract, uint256 tokenId) public payable nonReentrant {
    uint256 listingPrice = _listings[cnftContract][tokenId];
    uint256 buyPrice = msg.value;
    require(buyPrice >= listingPrice, "Not enough money!");

    ERC721CNFT targetContract = ERC721CNFT(cnftContract);
    address cnftOwner = targetContract.ownerOf(tokenId);
    (address[] memory componentContracts, uint256[] memory componentTokenIds) = targetContract.getTokenSNFTComponents(tokenId);
    address[] memory _payees = new address[](componentContracts.length + 1);
    uint256[] memory _amounts = new uint256[](componentContracts.length + 1);
    uint256 remain = buyPrice;
    uint256 i = 0;
    for (; i < componentContracts.length; i++) {
      address componentContract = componentContracts[i];
      uint256 componentTokenId = componentTokenIds[i];
      ERC721SNFT sContract = ERC721SNFT(componentContract);
      uint256 share = sContract.getTokenShare(componentTokenId);
      address snftOwner = sContract.ownerOf(componentTokenId);
      _payees[i] = snftOwner;
      _amounts[i] = (buyPrice * share) / 100;
      remain -= _amounts[i];
      // emit PayoutOrderCreated(componentContract, componentTokenId, _amounts[i]);
    }
    _payees[i] = cnftOwner;
    _amounts[i] = remain;
    payoutOrders.push(PayoutOrder(false, _payees, _amounts));
    targetContract.safeTransferFrom(cnftOwner, msg.sender, tokenId);
  }

  function payout() public onlyOwner nonReentrant {
    for (uint i = 0; i < payoutOrders.length; i++) {
      PayoutOrder memory payoutOrder = payoutOrders[i];
      if (!payoutOrder.payed) {
        address[] memory payees = payoutOrder.payees;
        uint256[] memory amounts =  payoutOrder.amounts;
        for (uint j = 0; j < payees.length; j++) {
          address _payee = payees[j];
          uint256 _amount = amounts[j];
          (bool success,)= _payee.call{ value : _amount }("");
          require(success, "Transfer failed!");
          // emit PayoutOrderFullfiled(_payee, _amount);
        }
        delete payoutOrders[i];
      }
    }
  }
}