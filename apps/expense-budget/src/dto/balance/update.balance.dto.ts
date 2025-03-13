import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBalanceDto {
  @ApiProperty({
    example: 200,
    required: true,
  })
  @IsNumber()
  @IsOptional()
  amount: number;
}
