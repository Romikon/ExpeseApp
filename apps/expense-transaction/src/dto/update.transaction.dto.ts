import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTransactionDto {
  @ApiProperty({
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsOptional()
  budgetid?: number;

  @ApiProperty({
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsOptional()
  categoryid?: number;

  @ApiProperty({
    example: 'income',
    required: true,
  })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({
    example: 200,
    required: true,
  })
  @IsNumber()
  @IsOptional()
  sum?: number;

  @ApiProperty({
    example: 'salary',
    required: true,
  })
  @IsString()
  @IsOptional()
  activity?: string;
}
