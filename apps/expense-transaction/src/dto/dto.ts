import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class CreateTransactionDTO {
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

class UpdateTransactionDTO{
  @IsNumber()
  @IsOptional()
  budgetid?: number;

  @IsNumber()
  @IsOptional()
  categoryid?: number;

  @IsString()
  @IsOptional()
  type?: string;

  @IsNumber()
  @IsOptional()
  sum?: number;

  @IsString()
  @IsOptional()
  activity?: string;
}

class GetTransactionDTO{
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

class PaginationDTO {
  @IsInt()
  @IsOptional()
  firstObjectId?: number;

  @IsInt()
  @IsOptional()
  lastObjectId?: number;
}

export {
  GetTransactionDTO,
  CreateTransactionDTO,
  UpdateTransactionDTO,
  PaginationDTO
}