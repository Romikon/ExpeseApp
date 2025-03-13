import { IsOptional, IsString } from 'class-validator';

export class PaginationDto {
  @IsString()
  @IsOptional()
  page?: number;

  @IsString()
  @IsOptional()
  size?: number;
}
