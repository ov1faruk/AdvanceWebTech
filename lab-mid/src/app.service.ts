import { Injectable } from '@nestjs/common';
import { SellerDto } from './dto/seller.dto';
import { BuyerDto } from './dto/buyer.dto';

@Injectable()
export class AppService {
  private sellers: SellerDto[] = [];
  private buyers: BuyerDto[] = [];

  // Seller-related methods
  getSellers(): SellerDto[] {
    return this.sellers;
  }

  addSeller(sellerDto: SellerDto): string {
    this.sellers.push(sellerDto);
    return 'Seller added successfully';
  }

  getSeller(id: string): SellerDto {
    return this.sellers.find((seller) => seller.id === id);
  }

  updateSeller(id: string, sellerDto: SellerDto): string {
    const index = this.sellers.findIndex((seller) => seller.id === id);
    if (index !== -1) {
      this.sellers[index] = { ...sellerDto, id };
      return 'Seller updated successfully';
    }
    return 'Seller not found';
  }

  deleteSeller(id: string): string {
    const index = this.sellers.findIndex((seller) => seller.id === id);
    if (index !== -1) {
      this.sellers.splice(index, 1);
      return 'Seller deleted successfully';
    }
    return 'Seller not found';
  }

  // Buyer-related methods
  getBuyers(): BuyerDto[] {
    return this.buyers;
  }

  addBuyer(buyerDto: BuyerDto): string {
    this.buyers.push(buyerDto);
    return 'Buyer added successfully';
  }

  getBuyer(id: string): BuyerDto {
    return this.buyers.find((buyer) => buyer.id === id);
  }

  updateBuyer(id: string, buyerDto: BuyerDto): string {
    const index = this.buyers.findIndex((buyer) => buyer.id === id);
    if (index !== -1) {
      this.buyers[index] = { ...buyerDto, id };
      return 'Buyer updated successfully';
    }
    return 'Buyer not found';
  }

  deleteBuyer(id: string): string {
    const index = this.buyers.findIndex((buyer) => buyer.id === id);
    if (index !== -1) {
      this.buyers.splice(index, 1);
      return 'Buyer deleted successfully';
    }
    return 'Buyer not found';
  }
}
