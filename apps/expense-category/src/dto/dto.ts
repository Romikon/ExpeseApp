import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

class UpdateCategoryDto{
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  description?: string;
}

class GetCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

class CategoryFromRabbitMQDto {
  @IsString()
  @IsNotEmpty()
  activity: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  sum: string;
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
  GetCategoryDto,
  CreateCategoryDto,
  UpdateCategoryDto,
  PaginationDto,
  CategoryFromRabbitMQDto
}