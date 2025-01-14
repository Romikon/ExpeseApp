import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class BudgetDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  currency: string;
}

export class PaginationDTO {
  @IsInt()
  firstObjectId: number;

  @IsInt()
  lastObjectId: number;
}