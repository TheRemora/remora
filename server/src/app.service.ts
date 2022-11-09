import { Injectable } from '@nestjs/common';
import { SNFTViewModel } from './app.model';
//import Web3 from 'web3';
import { resolve } from 'node:path';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  solc = require('solc');

  getAllSNFTs(): Array<SNFTViewModel> {
    const result: Array<SNFTViewModel> = new Array<SNFTViewModel>();
    result.push(new SNFTViewModel('1', '0x123', 'kakao'));
    result.push(new SNFTViewModel('2', '0x234', 'bear'));
    return result;
  }

  compileContract(): string {
    const contractPath = resolve(__dirname, 'contracts', 'Test.sol'); //current working directory
    const source = readFileSync(contractPath, 'utf8'); //read raw source file

    const input = {
      language: 'Solidity',
      sources: {
        'Test.sol': {
          content: source,
        },
      },
      settings: {
        outputSelection: {
          '*': {
            '*': ['*'],
          },
        },
      },
    };

    const output = JSON.parse(this.solc.compile(JSON.stringify(input)));
    return output;
  }
}
