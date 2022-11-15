// SPDX-License-Identifier: MIT

pragma solidity >=0.6.12;

import "@openzeppelin/contracts/utils/Strings.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ERC721SNFT is ERC721URIStorage, Ownable, ReentrancyGuard {

  event ReceivedSplitShare(address from);

  uint256 private _maxSupply;
  uint256 private _sharePercent;
  string private _uri;
  

  constructor(string memory name, string memory symbol, string memory uri, uint256 maxSupply) ERC721(name, symbol) {
    _maxSupply = maxSupply;
    setURI(uri);
  }

  // function (<parameter types>) {internal|external|public|private} [pure|constant|view|payable] [(modifiers)] [returns (<return types>)]
  function _baseURI() internal view override returns (string memory) {
    return _uri;
  }

  function setURI(string memory uri) public onlyOwner {
    _uri = uri;
  }

  function sharePercent() public view returns (uint256) {
    return _sharePercent;
  }

  function setSharePercent(uint256 newSharePercent) public onlyOwner {
    _sharePercent = newSharePercent;
  }

  receive() external payable {
    emit ReceivedSplitShare(_msgSender());
  }

  // fallback for when ceived splited shared from CNFT
  fallback() external payable {
    emit ReceivedSplitShare(_msgSender());
  }

  function withDraw() public payable onlyOwner {

  }
}