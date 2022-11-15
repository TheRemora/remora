// SPDX-License-Identifier: MIT

pragma solidity >=0.6.12;

import "./SNFT.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CNFT is ERC721, PaymentSplitter, Ownable, ReentrancyGuard {

  string private _uri;

  constructor(string memory name, string memory symbol, SNFT[] memory snfts) {
    
  }


}