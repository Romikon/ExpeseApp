import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  budgetid: number;

  @ApiProperty({
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  categoryid: number;

  @ApiProperty({
    example: 'income',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    example: 100,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  sum: number;

  @ApiProperty({
    example: 'salary',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  activity: string;
}
