// SPDX-License-Identifier: MIT

pragma solidity >=0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ERC721CNFT is ERC721, Ownable, ReentrancyGuard {

  struct SNFTComponents {
    address[] snftContracts;
    uint256[] snftTokenIds;
  }

  event TokenPurchased(address to, uint256 tokenID);

  string private _uri;
  mapping(uint256 => SNFTComponents) private _snftComponents;
  

  constructor(string memory name, string memory symbol, string memory uri) ERC721(name, symbol) {
    setURI(uri);
  }

  function _baseURI() internal view override returns (string memory) {
    return _uri;
  }

  function setURI(string memory uri) public onlyOwner {
    _uri = uri;
  }

  function mint(uint256 tokenId, 
              address[] memory snftContracts, 
              uint256[] memory snftTokenIds) public onlyOwner {
    _snftComponents[tokenId] = SNFTComponents(snftContracts, snftTokenIds);
    _safeMint(owner(), tokenId);
  }

  function getTokenSNFTComponents(uint256 tokenId) public view returns(address[] memory, uint256[] memory) {
    return (_snftComponents[tokenId].snftContracts, _snftComponents[tokenId].snftTokenIds);
  }
}