import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransactionDTO {
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

export class PaginationDTO {
  @IsInt()
  firstObjectId: number;

  @IsInt()
  lastObjectId: number;
}
