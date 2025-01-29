import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBudgetDto {
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