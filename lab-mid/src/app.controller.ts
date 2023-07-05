import { Controller, Get, Post, Body, UsePipes, Param, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { SellerDto } from './dto/seller.dto';
import { BuyerDto } from './dto/buyer.dto';
import { ValidationPipe } from './pipes/validation.pipe';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sellers')
  getSellers() {
    return this.appService.getSellers();
  }

  @Post('sellers')
  @UsePipes(new ValidationPipe())
  addSeller(@Body() sellerDto: SellerDto) {
    return this.appService.addSeller(sellerDto);
  }

  @Get('sellers/:id')
  getSeller(@Param('id') id: string) {
    return this.appService.getSeller(id);
  }

  @Put('sellers/:id')
  @UsePipes(new ValidationPipe())
  updateSeller(@Param('id') id: string, @Body() sellerDto: SellerDto) {
    return this.appService.updateSeller(id, sellerDto);
  }

  @Delete('sellers/:id')
  deleteSeller(@Param('id') id: string) {
    return this.appService.deleteSeller(id);
  }

  @Get('buyers')
  getBuyers() {
    return this.appService.getBuyers();
  }

  @Post('buyers')
  @UsePipes(new ValidationPipe())
  addBuyer(@Body() buyerDto: BuyerDto) {
    return this.appService.addBuyer(buyerDto);
  }

  @Get('buyers/:id')
  getBuyer(@Param('id') id: string) {
    return this.appService.getBuyer(id);
  }

  @Put('buyers/:id')
  @UsePipes(new ValidationPipe())
  updateBuyer(@Param('id') id: string, @Body() buyerDto: BuyerDto) {
    return this.appService.updateBuyer(id, buyerDto);
  }

  @Delete('buyers/:id')
  deleteBuyer(@Param('id') id: string) {
    return this.appService.deleteBuyer(id);
  }


}
