import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

class CreateUserDto {
  @ApiProperty({
    example: 'Roman',
    required: true
   })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Roman@gmail.com',
    required: true
   })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'qwerty',
    required: true
   })
  @IsString()
  @IsNotEmpty()
  password: string;
}

class UpdateUserDto{
  @ApiProperty({
    example: 'Roman',
    required: true
   })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'Roman1@gmail.com',
    required: true
   })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: 'qwerty1',
    required: true
   })
  @IsString()
  @IsOptional()
  password?: string;
}

class GetUserDto{
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

class PaginationDto {
  @IsString()
  @IsOptional()
  page?: number;

  @IsString()
  @IsOptional()
  size?: number;
}

export{
  GetUserDto,
  CreateUserDto,
  UpdateUserDto,
  PaginationDto
}