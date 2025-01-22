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
  @IsInt()
  @IsOptional()
  firstObjectId?: number;

  @IsInt()
  @IsOptional()
  lastObjectId?: number;
}

export {
  GetBudgetDto,
  CreateBudgetDto,
  UpdateBudgetDto,
  PaginationDto
}