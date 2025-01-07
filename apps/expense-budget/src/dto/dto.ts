import { IsNotEmpty, IsString } from 'class-validator';

export class BudgetDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  currency: string;
}
