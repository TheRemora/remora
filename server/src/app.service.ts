import { Injectable } from '@nestjs/common';
import { CNFTDto, SNFTViewModel } from './app.model';
import Web3 from 'web3';

@Injectable()
export class AppService {
  web3: Web3;

  constructor() {
    this.web3 = new Web3();
  }

  getAllSNFTs(): Array<SNFTViewModel> {
    const result: Array<SNFTViewModel> = new Array<SNFTViewModel>();
    result.push(new SNFTViewModel('1', '0x123', 'kakao'));
    result.push(new SNFTViewModel('2', '0x234', 'bear'));
    return result;
  }

  mintNFT(cnftDto: CNFTDto) {
    return 'Hello World';
  }
}
