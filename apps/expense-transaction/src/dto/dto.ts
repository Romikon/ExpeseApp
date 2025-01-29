import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class CreateTransactionDto {
  @ApiProperty({
    example: 1,
    required: true
   })
  @IsNumber()
  @IsNotEmpty()
  budgetid: number;

  @ApiProperty({
    example: 1,
    required: true
   })
  @IsNumber()
  @IsNotEmpty()
  categoryid: number;

  @ApiProperty({
    example: 'income',
    required: true
   })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    example: 100,
    required: true
   })
  @IsNumber()
  @IsNotEmpty()
  sum: number;

  @ApiProperty({
    example: 'salary',
    required: true
   })
  @IsString()
  @IsNotEmpty()
  activity: string;
}

class UpdateTransactionDto{
  @ApiProperty({
    example: 1,
    required: true
   })
  @IsNumber()
  @IsOptional()
  budgetid?: number;

  @ApiProperty({
    example: 1,
    required: true
   })
  @IsNumber()
  @IsOptional()
  categoryid?: number;

  @ApiProperty({
    example: 'income',
    required: true
   })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({
    example: 200,
    required: true
   })
  @IsNumber()
  @IsOptional()
  sum?: number;

  @ApiProperty({
    example: 'salary',
    required: true
   })
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