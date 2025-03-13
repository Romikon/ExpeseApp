import { IsNotEmpty, IsString } from 'class-validator';

export class GetBudgetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  currency: string;
}
