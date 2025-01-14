import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class CategoryFromRabbitMQDTO {
  @IsString()
  @IsNotEmpty()
  activity: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  sum: string;
}

export class PaginationDTO {
  @IsInt()
  firstObjectId: number;

  @IsInt()
  lastObjectId: number;
}
