import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateCategoryDto {
  @ApiProperty({
    example: 'Roman',
    required: true
   })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'income',
    required: true
   })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    example: 'Description',
    required: true
   })
  @IsString()
  @IsNotEmpty()
  description: string;
}

class UpdateCategoryDto{
  @ApiProperty({
    example: 'Roman',
    required: true
   })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'income',
    required: true
   })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({
    example: 'Description',
    required: true
   })
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
  @IsString()
  @IsOptional()
  page?: number;

  @IsString()
  @IsOptional()
  size?: number;
}

export {
  GetCategoryDto,
  CreateCategoryDto,
  UpdateCategoryDto,
  PaginationDto,
  CategoryFromRabbitMQDto
}