import { Body, Controller, Get, Post } from '@nestjs/common';
import { CNFTDto, SNFTViewModel } from './app.model';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('snfts')
  getAllSNFTs(): SNFTViewModel[] {
    return this.appService.getAllSNFTs();
  }

  @Post('mint')
  mintCNFT(@Body() cnftDto: CNFTDto) {
    return this.appService.mintNFT(cnftDto);
  }
}
