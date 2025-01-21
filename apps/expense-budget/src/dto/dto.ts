import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateBudgetDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  currency: string;
}

class UpdateBudgetDTO {
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

class GetBudgetDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  currency: string;
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
  GetBudgetDTO,
  CreateBudgetDTO,
  UpdateBudgetDTO,
  PaginationDTO
}