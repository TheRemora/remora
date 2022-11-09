// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.12;

contract TestContract {
  address owner;
  uint count;

  constructor() {
    owner = msg.sender;
    count = 0;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  function get() public view returns(uint) {
    return count;
  }

  function increase() public onlyOwner {
    count = count + 1;
  }
}