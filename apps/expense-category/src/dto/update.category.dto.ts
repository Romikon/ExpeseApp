import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty({
    example: 'Roman',
    required: true,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'income',
    required: true,
  })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({
    example: 'Description',
    required: true,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
