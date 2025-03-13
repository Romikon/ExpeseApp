import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetBalanceDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
