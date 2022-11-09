import { Controller, Get } from '@nestjs/common';
import { SNFTViewModel } from './app.model';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('snfts')
  getAllSNFTs(): SNFTViewModel[] {
    return this.appService.getAllSNFTs();
  }

  @Get('compile')
  compileContract(): string {
    return this.appService.compileContract();
  }
}
