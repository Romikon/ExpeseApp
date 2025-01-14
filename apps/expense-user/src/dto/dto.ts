import { IsInt, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
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

export class PaginationDTO {
  @IsInt()
  firstObjectId: number;

  @IsInt()
  lastObjectId: number;
}