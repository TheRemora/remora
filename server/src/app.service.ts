import { Injectable } from '@nestjs/common';
import { resolve } from 'node:path';
import { readFileSync } from 'fs';
import { SNFTViewModel } from './app.model';
import { ethers } from "ethers";

@Injectable()
export class AppService {
  solc = require('solc');

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
    return output['contracts']['Test.sol']['TestContract'];
  }

  searchSNFT(searchString: string): SNFTViewModel {
    //TODO: do something
    return null;
  }
}
