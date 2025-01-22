import { IsInt, IsEmail, IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

class CreateUserDto {
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

class UpdateUserDto{
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

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
  @IsInt()
  @IsOptional()
  firstObjectId?: number;

  @IsInt()
  @IsOptional()
  lastObjectId?: number;
}

export{
  GetUserDto,
  CreateUserDto,
  UpdateUserDto,
  PaginationDto
}