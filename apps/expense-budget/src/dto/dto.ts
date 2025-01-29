import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateBudgetDto {
  @ApiProperty({
   example: 'My budget>',
   required: true
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'UAH',
    required: true
   })
  @IsString()
  @IsNotEmpty()
  currency: string;
}

class UpdateBudgetDto {
  @ApiProperty({
    example: 'Roman',
    required: true
   })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'UAH',
    required: true
   })
  @IsString()
  @IsOptional()
  currency?: string;

  @ApiProperty({
    example: 'April',
    required: true
   })
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