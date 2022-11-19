import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { NFTAsset } from './app.model';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('snfts')
  getAllSNFTs(): NFTAsset[] {
    return this.appService.getAllSNFT();
  }

  @Get('contract/:contract')
  getContract(@Param() params): string {
    console.log('Fetching contract ' + params.contract);
    return this.appService.compileContract(params.contract);
  }
}
