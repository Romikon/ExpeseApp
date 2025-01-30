import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  budgetid: number;

  @IsNumber()
  @IsNotEmpty()
  categoryid: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  sum: number;

  @IsString()
  @IsNotEmpty()
  activity: string;
}
