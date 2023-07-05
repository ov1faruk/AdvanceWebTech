import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class SellerDto {
  id: string;

  @IsNotEmpty({ message: 'Seller name should not be empty' })
  @Length(2, 50, { message: 'Seller name length should be between 2 and 50 characters' })
  name: string;

  @IsNotEmpty({ message: 'Seller email should not be empty' })
  @IsEmail({}, { message: 'Invalid seller email format' })
  email: string;

  @IsNotEmpty({ message: 'Seller address should not be empty' })
  address: string;
}
