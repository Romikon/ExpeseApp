import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
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