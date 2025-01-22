import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateBudgetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  currency: string;
}

class UpdateBudgetDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  currency?: string;

  @IsString()
  @IsOptional()
  month?: string;
}

class GetBudgetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  currency: string;
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
  GetBudgetDto,
  CreateBudgetDto,
  UpdateBudgetDto,
  PaginationDto
}