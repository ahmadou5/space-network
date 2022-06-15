//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import '@openzeppelin/contracts/tokens/ERC20.sol';

contract  SPACE is ERC20 {
    constructor () ERC20('Space Network Token','SPACE') {
        _mint(msg.sender,100000000 * 10 ** 18);
    }
}