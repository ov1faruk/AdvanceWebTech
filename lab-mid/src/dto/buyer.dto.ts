import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class BuyerDto {
  id: string;

  @IsNotEmpty({ message: 'Buyer name should not be empty' })
  @Length(2, 50, { message: 'Buyer name length should be between 2 and 50 characters' })
  name: string;

  @IsNotEmpty({ message: 'Buyer email should not be empty' })
  @IsEmail({}, { message: 'Invalid buyer email format' })
  email: string;

  @IsNotEmpty({ message: 'Buyer contact number should not be empty' })
  @Length(10, 15, { message: 'Buyer contact number length should be between 10 and 15 digits' })
  contactNumber: string;

  @IsNotEmpty({ message: 'Buyer address should not be empty' })
  address: string;
}
