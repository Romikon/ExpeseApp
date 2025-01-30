import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    example: 'Roman',
    required: true,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'Roman1@gmail.com',
    required: true,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: 'qwerty1',
    required: true,
  })
  @IsString()
  @IsOptional()
  password?: string;
}
