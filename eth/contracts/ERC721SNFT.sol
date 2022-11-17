// SPDX-License-Identifier: MIT

pragma solidity >=0.6.12;

import "@openzeppelin/contracts/utils/Strings.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ERC721SNFT is ERC721, Ownable, ReentrancyGuard {

  mapping(uint256 => uint256) private _tokenShares;
  string private _uri;

  constructor(string memory name, string memory symbol, string memory uri) ERC721(name, symbol) {
    setURI(uri);
  }

  function _baseURI() internal view override returns (string memory) {
    return _uri;
  }

  function setURI(string memory uri) public onlyOwner {
    _uri = uri;
  }

  function mint(uint256 tokenId, uint256 sharePercent) public onlyOwner {
    _tokenShares[tokenId] = sharePercent;
    _safeMint(owner(), tokenId);
  }

  function setTokenShare(uint256 tokenId, uint256 sharePercent) public {
    require(_msgSender() == ownerOf(tokenId), "Permission denied!");
    _tokenShares[tokenId] = sharePercent;
  }

  function getTokenShare(uint256 tokenId) public view returns(uint256) {
    return _tokenShares[tokenId];
  }
}