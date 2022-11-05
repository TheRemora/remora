// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract ERC1155_Token is ERC1155, Ownable {

    string[] public names; //string array of names
    uint[] public ids; //uint array of ids
    string public baseMetadataURI; //the token metadata URI
    string public name; //the token mame
    uint public mintFee = 0.05 ether; 
    address payable public payments;
    
    mapping(string => uint) public nameToId; //name to id mapping
    mapping(uint => string) public idToName; //id to name mapping

    /*
    constructor is executed when the factory contract calls its own deployERC1155 method
    */
    constructor(string memory _contractName, string memory _uri, string[] memory _names, uint[] memory _ids, address _payments) ERC1155(_uri) {
        names = _names;
        ids = _ids;
        createMapping();
        setURI(_uri);
        baseMetadataURI = _uri;
        name = _contractName;
        payments = payable(_payments);
        transferOwnership(msg.sender);
    }  

    function createMapping() private {
        for (uint id = 0; id < ids.length; id++) {
            nameToId[names[id]] = ids[id];
            idToName[ids[id]] = names[id];
        }
    }


    function uri(uint256 _tokenid) override public view returns (string memory) {
        return string(
            abi.encodePacked(
                baseMetadataURI,
                Strings.toString(_tokenid),".json"
            )
        );
    }  


    function getName() public view returns(string memory) {
        return name;
    }

     function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    /*
    set a mint fee. only used for mint, not batch.
    */
    function setFee(uint _fee) public onlyOwner {
        mintFee = _fee;
    }


    function mint(address account, uint _id, uint256 amount) 
        public payable returns (uint)
        {
            _mint(account, _id, amount, "");
            return _id;
        }
    

    function withdraw() public payable onlyOwner {
    (bool success, ) = payable(payments).call{value: address(this).balance}("");
    require(success);
  }
}

/**
TEST
https://bafybeigrfsyjsgjcapbehtpfttm3z5arfs6amwo2ni4nz2pgcs65fb65di.ipfs.nftstorage.link/
["Mercury"]
[0]
**/