import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryFromRabbitMQDto {
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
