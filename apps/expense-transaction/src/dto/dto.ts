import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class CreateTransactionDto {
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

class UpdateTransactionDto{
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

class GetTransactionDto{
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

class PaginationDto {
  @IsString()
  @IsOptional()
  page?: number;

  @IsString()
  @IsOptional()
  size?: number;
}

export {
  GetTransactionDto,
  CreateTransactionDto,
  UpdateTransactionDto,
  PaginationDto
}