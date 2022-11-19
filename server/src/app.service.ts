import { Injectable } from '@nestjs/common';
import { resolve } from 'node:path';
import { readFileSync } from 'fs';
import { NFTAsset, SNFTCollection } from './app.model';
import { Repository } from './app.repository';
//import { ethers } from "ethers";

@Injectable()
export class AppService {
  solc = require('solc');

  compileContract(contract: string): string {
    const contractPath = resolve(__dirname, 'contracts', contract + '.json'); //current working directory
    const source = readFileSync(contractPath, 'utf8'); //read raw source file
    const output = JSON.parse(source);
    return output;
  }

  getAllSNFT(): Array<NFTAsset> {
    const ret: Array<NFTAsset> = new Array<NFTAsset>();
    const snftCollections: Array<SNFTCollection> = Repository.getAllSNFTCollections();
    for (const collection of snftCollections) {
      for (const asset of collection.getAssets()) {
        ret.push(asset);
      }
    }
    return ret;
  }
}
